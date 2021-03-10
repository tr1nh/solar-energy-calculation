var chartArea
var chartEnergy

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      nhan: _.cloneDeep(data.labels.vi),
      danhSachKhuVuc: data.values.khuVuc,
      khuVucDuocChon: _.cloneDeep(data.values.khuVuc[0]),
      congSuatLapDat: 0,
      danhSachPin: data.values.pin.thongTinRieng,
      thongTinChung: data.values.pin.thongTinChung,
      pinAmount: 0,
      maPinDuocChon: '',
      heSoTonThat: 0.75,
      ngonNgu: 'vi'
    }
  },
  mounted: function () {
    chartArea = initChart(document.getElementById('chart-area'), data.labels.vi.khuVuc.bucXaTheoThang.chartjs)
    chartEnergy = initChart(document.getElementById('chart-energy'), data.labels.vi.sanLuong.chartjs)
  },
  methods: {
    timKhuVuc: _.debounce(function (e) {
      this.danhSachKhuVuc = timKhuVuc(data.values.khuVuc, e.target.value.toLowerCase())
    }, 250),
    chonKhuVuc: function (khuVuc) {
      this.khuVucDuocChon = khuVuc
      updateChartColumn(chartArea, khuVuc.bucXa)
    },
    doiNgonNgu: function () {
      this.ngonNgu = (this.ngonNgu === 'en') ? 'vi' : 'en'
      updateObject(this.nhan, data.labels[this.ngonNgu])

      updateChartLabel(chartArea, data.labels[this.ngonNgu].khuVuc.bucXaTheoThang.chartjs)
      updateChartLabel(chartEnergy, data.labels[this.ngonNgu].sanLuong.chartjs)

      document.documentElement.setAttribute('lang', this.ngonNgu)
      document.title = this.nhan.tieuDe
    },
    xuatPDF: async function () {
      try {
        const page = new window.jspdf.jsPDF()
        const width = 210
        const margin = 10
        let currentLine = 10

        await loadFontPDF(page, './fonts/Roboto-Regular.ttf')
        await addTextCenterPDF(page, this.nhan.pdf.tieuDe.toUpperCase(), 20, (width / 2), currentLine, (width - (margin * 5)))

        addTextPDF(page, `${this.nhan.pdf.diaChi}: ${this.khuVucDuocChon.ten}`, 10, margin, currentLine += 20)
        addTextPDF(page, `${this.nhan.pdf.congSuatLapDat}: ${this.congSuatLapDat} (W)`, 10, margin, currentLine += 5)
        addTextPDF(page, `${this.nhan.pdf.soLuongPin}: ${this.pinAmount}`, 10, margin, currentLine += 5)
        addTextPDF(page, `${this.nhan.pdf.loaiPin}: ${this.pinDuocChon.maSanPham}`, 10, margin, currentLine += 5)
        addTextPDF(page, `${this.nhan.pdf.congSuatPin}: ${this.pinDuocChon.pmax} (W)`, 10, margin, currentLine += 5)
        addTextPDF(page, `${this.nhan.pdf.dienTich}: ${this.tongDienTichPin} (m²)`, 10, margin, currentLine += 5)
        addTextPDF(page, `${this.nhan.pdf.sanLuongDuKien}: ${this.tongSanLuongTieuThu} (kWh/an)`, 10, margin, currentLine += 5)

        addChartJSPDF(page, chartArea, document.getElementById('chart-area'), margin, currentLine += 20, (width / 2 - margin - (margin / 2)), 50)
        addChartJSPDF(page, chartEnergy, document.getElementById('chart-energy'), (width / 2), currentLine, (width / 2 - margin - (margin / 2)), 50)

        await addTextCenterPDF(page, this.nhan.pdf.hinh1, 10, (width / 4), currentLine += 55, (width / 2))
        await addTextCenterPDF(page, this.nhan.pdf.hinh2, 10, ((width * (3 / 4)) - (margin / 2)), currentLine, (width / 2))

        await addTextCenterPDF(page, this.nhan.pdf.bang1.tieuDe, 10, (width / 2), currentLine += 20, width)

        let data = await layDuLieuBangBucXaHangThang(this.nhan.pdf.bang1.column1, this.khuVucDuocChon.bucXa, this.sanLuongTieuThu, this.tongBucXa, this.tongSanLuongTieuThu)

        page.autoTable({
          head: this.nhan.pdf.bang1.head,
          body: data,
          startY: currentLine += 5,
          styles: {
            font: 'Roboto-Regular',
            lineWidth: 0.25,
            lineColor: 0
          },
          theme: 'plain'
        })

        page.save(this.nhan.pdf.tenTep)
      } catch (error) {
        alert(this.nhan.pdf.canhBao)
      }
    }
  },
  computed: {
    tongBucXa: function () {
      const tong = tinhTong(this.khuVucDuocChon.bucXa)
      return tong
    },
    pinDuocChon: function () {
      return chonPin(this.danhSachPin, this.maPinDuocChon)
    },
    soLuongPin: function () {
      return tinhSoLuongPin(this.congSuatLapDat, this.pinDuocChon.pmax)
    },
    tongDienTichPin: function () {
      return tinhTongDienTich(this.thongTinChung.kichThuoc.dai,
        this.thongTinChung.kichThuoc.rong,
        this.soLuongPin
      )
    },
    sanLuongTieuThu: function () {
      const ketQua = tinhSanLuongTieuThu(this.khuVucDuocChon.bucXa, this.tongDienTichPin, this.pinDuocChon.hieuSuat, this.heSoTonThat)
      updateChartColumn(chartEnergy, ketQua)
      return ketQua
    },
    tongSanLuongTieuThu: function () {
      return tinhTongSanLuongTieuThu(this.sanLuongTieuThu)
    }
  }
})

function initChart(element, data) {
  var ctx = element.getContext('2d')

  return new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

function timKhuVuc(tatCaKhuVuc, chuoiTimKiem) {
  if (chuoiTimKiem === '') return tatCaKhuVuc

  return tatCaKhuVuc.filter(khuVuc => {
    return khuVuc.ten.toLowerCase().indexOf(chuoiTimKiem) > -1
  })
}

function updateChartColumn(instance, data) {
  instance.data.datasets[0].data = data
  instance.update()
}

function updateObject(obj1, obj2) {
  for (var k in obj1) {
    if (!obj1.hasOwnProperty(k)) continue

    if (typeof obj1[k] == 'object') updateObject(obj1[k], obj2[k])
    else obj1[k] = obj2[k]
  }
}

function updateChartLabel(instance, data) {
  let temporaryData = Object.assign({}, data)
  temporaryData.datasets[0].data = instance.data.datasets[0].data

  instance.data = temporaryData
  instance.update()
}

function tinhTong(mang) {
  return mang.reduce((acc, i) => acc += i)
}

function chonPin(mang, ma) {
  return mang.filter(pin => {
    return pin.maSanPham === ma
  })[0]
}

function tinhSoLuongPin(congSuat, pin) {
  return Math.ceil(congSuat / pin)
}

function tinhTongDienTich(dai, rong, soLuong) {
  return Math.round((dai / 1000) * (rong / 1000) * soLuong)
}

function tinhSanLuongTieuThu(bucXaTungThang, tongDienTich, hieuSuat, heSoTonThat) {
  return bucXaTungThang.map(bucXa => Math.round((tongDienTich * hieuSuat * bucXa * heSoTonThat) / 100))
}

function tinhTongSanLuongTieuThu(sanLuongTungThang) {
  return sanLuongTungThang.reduce((acc, v) => acc += v)
}

async function loadFontPDF(instance, fontURL) {
  const fontFile = await fileToBase64(fontURL)

  instance.addFileToVFS('Roboto-Regular-normal.ttf', fontFile.split(',')[1])
  instance.addFont('Roboto-Regular-normal.ttf', 'Roboto-Regular', 'normal')
  instance.setFont('Roboto-Regular')
}

function fileToBase64(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
      let reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(xhr.response)
    }
    xhr.open("GET", url)
    xhr.responseType = "blob"
    xhr.send()
  })
}

async function addTextCenterPDF(instance, text, fontSize, x, y, maxWidth) {
  const tieuDe = instance.splitTextToSize(text, maxWidth)
  instance.setFontSize(fontSize)
  instance.text(tieuDe, x, y, { align: 'center' })
}

async function addTextPDF(instance, text, fontSize, x, y) {
  instance.setFontSize(fontSize)
  instance.text(text, x, y)
}

async function addChartJSPDF(pageInstance, chartInstance, element, x, y, width, height) {
  let oldSize = chartInstance.canvas.parentElement.style.width
  chartInstance.canvas.parentElement.style.width = "700px"
  chartInstance.resize()
  
  drawValueOnBar(chartInstance)
  pageInstance.addImage(element, 'PNG', x, y, width, height)

  chartInstance.canvas.parentElement.style.width = oldSize
  chartInstance.resize()
  
  chartInstance.update()
}

async function layDuLieuBangBucXaHangThang(thang, bucXa, sanLuong, tongBucXa, tongSanLuong) {
  let data = []

  thang.forEach((v, i) => {
    let row = {}

    if (i < 12) {
      row = [
        v,
        bucXa[i].toString(),
        sanLuong[i].toString(),
      ]
    } else {
      row = [
        v,
        tongBucXa.toString(),
        tongSanLuong.toString(),
      ]
    }

    data.push(row)
  })

  return data
}

function drawValueOnBar(instance) {
  let ctx = instance.ctx

  ctx.font = Chart.helpers.fontString(
    Chart.defaults.global.defaultFontSize,
    Chart.defaults.global.defaultFontStyle,
    Chart.defaults.global.defaultFontFamily
  )
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'

  instance.data.datasets.forEach(function (dataset, i) {
    let meta = instance.controller.getDatasetMeta(i)

    meta.data.forEach(function (bar, index) {
      if (dataset.data[index] > 0) {
        let data = dataset.data[index]
        ctx.fillText(data, bar._model.x, bar._model.y)
      }
    })
  })
}