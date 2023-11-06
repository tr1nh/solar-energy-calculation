var chartArea
var chartEnergy

const KHU_VUC_RONG = {
  ten: "",
  bucXa: [0,0,0,0,0,0,0,0,0,0,0,0],
  nhietDo: [0,0,0,0,0,0,0,0,0,0,0,0]
}

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      nhan: _.cloneDeep(data.labels.vi),
      danhSachKhuVuc: [],
      khuVucDuocChon: KHU_VUC_RONG,
      danhSachPin: [],
      pinAmount: 0,
      maPinDuocChon: '',
      heSoTonThat: 0.75,
      ngonNgu: 'vi',
      congSuatTieuThuThang: 0,
      giaPin: 0,
      inverter: [],
      inverterPhuHop: [],
      giaInverter: 0,
      thangDuocChon: 0,
    }
  },
  beforeMount: async function() {
    let gSheetId = '1--DtK6k7YhokP4g0lfPL3CcRRJ9s4DSw5ZrwoX5vpkI';

    fetchWSheet({ gSheetId, wSheetName: 'khuVuc' }).then(khuVuc => {;
      khuVuc.forEach(item => {
        item.bucXa = item.bucXa.split(',').map(Number);
        item.nhietDo = item.nhietDo.split(',').map(Number);
      });
      Object.assign(this.danhSachKhuVuc, khuVuc);
    });

    fetchWSheet({ gSheetId, wSheetName: 'pin' }).then(data => {
      this.danhSachPin = data
      this.maPinDuocChon = this.danhSachPin[0].maSanPham;
      this.layGiaPinMacDinh();
    });

    fetchWSheet({ gSheetId, wSheetName: 'inverter' }).then(data => {
      this.inverter = data;
    });
  },
  mounted: function () {
    Chart.defaults.global.legend.display = false;

    chartArea = initChart(document.getElementById('chart-area'), data.labels.vi.khuVuc.bucXaTheoThang.chartjs)
    chartEnergy = initChart(document.getElementById('chart-energy'), data.labels.vi.sanLuong.chartjs)
  },
  methods: {
    chinhGiaPin: function(e) {
      this.giaPin = e.target.value;
    },
    layGiaPinMacDinh: function() {
      this.giaPin = this.pinDuocChon.giaTien;
    },
    timKhuVuc: _.debounce(function (e) {
      if (e.target.value == "") return;
      let temp = this.danhSachKhuVuc.find(khuVuc => {
        return khuVuc.ten.indexOf(e.target.value) > -1
      });
      this.khuVucDuocChon = temp || KHU_VUC_RONG;
      Object.assign(this.khuVucDuocChon, temp || KHU_VUC_RONG);
      updateChartColumn(chartArea, this.khuVucDuocChon.bucXa)
    }, 250),
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
        const fontSizeNormal = 10
        const fontSizeTitle = 15
        const fontSizeHeading = 14

        function printDate() {
          let now = new Date()
          let year = now.getFullYear()
          let month = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
          let date = now.getDate() + 1 > 9 ? now.getDate() + 1 : `0${now.getDate() + 1}`
          return `${year}/${month}/${date}`
        }

        // timestamp and Header
        await loadFontPDF(page, './fonts/Roboto-Italic.ttf')
        addTextPDF(page, printDate(), fontSizeNormal, margin, currentLine)
        addTextPDF(page, `${this.nhan.pdf.pdfHeader}`, fontSizeNormal, (width / 2) + 40, currentLine)

        // title
        await loadFontPDF(page, './fonts/Roboto-Bold.ttf')
        await addTextCenterPDF(page, this.nhan.pdf.tieuDe.toUpperCase(), fontSizeTitle, (width / 2), currentLine += 20, 100)

        // project information
        await loadFontPDF(page, './fonts/Roboto-Bold.ttf')
        addTextPDF(page, `${this.nhan.pdf.tieuDeThongTin}`, fontSizeHeading, margin, currentLine += 20)

        await loadFontPDF(page, './fonts/Roboto-Regular.ttf')

        // vi tri // system grid
        addTextPDF(page, `Geographical site: ${this.khuVucDuocChon.ten}` , fontSizeNormal, margin, currentLine += 7)
        addTextPDF(page, `System Type: Grid - Connected` , fontSizeNormal, margin + 100, currentLine)

        // meteo data // loai pin quang dien
        addTextPDF(page, `Meteo data: PV GIS (Solar radiation) Nasa (Temperature)` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `PV module: ${this.pinDuocChon.maSanPham}` , fontSizeNormal, margin + 100, currentLine)

        // tieu thu hang thang // so luong pin
        addTextPDF(page, `Monthly Power consumption (kW): ${this.congSuatTieuThuThang}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Number of PV module: ${this.ketQua.soLuongPin}` , fontSizeNormal, margin + 100, currentLine)

        // cong suat lap dat // cong suat tieu thu
        addTextPDF(page, `Installed capacity (kW): ${this.ketQua.congSuatLapDat}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Power of PV module (W) ${this.pinDuocChon.pmax}` , fontSizeNormal, margin + 100, currentLine)

        // tong nang suat // gia mot tam pin
        addTextPDF(page, `Final Yield (kWh/yr): ${this.ketQua.tongSanLuongTieuThu}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Price of PV module (VND): ${this.giaPin}` , fontSizeNormal, margin + 100, currentLine)

        // tong chi phi dau tu // inverter heading
        addTextPDF(page, `Total investment (VND): ${Number(this.ketQua.tongVonDauTu).toLocaleString("us-US")}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Number of Inverter:` , fontSizeNormal, margin + 100, currentLine)

        // so nam thu hoi von // cong suat inverter
        addTextPDF(page, `Payback years (Yr): ${this.ketQua.soNamHoanVon}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Power of inverter (kW): ${this.inverterDuocChon.congSuat}` , fontSizeNormal, margin + 100, currentLine)

        // ti le hieu suat // gia inverter
        addTextPDF(page, `Performance Ratio PR: ${this.pinDuocChon.hieuSuat}` , fontSizeNormal, margin, currentLine += 5)
        addTextPDF(page, `Price of PV module (VND): ${this.inverterDuocChon.gia}` , fontSizeNormal, margin + 100, currentLine)


        // calculation result
        await loadFontPDF(page, './fonts/Roboto-Bold.ttf')
        addTextPDF(page, `${this.nhan.pdf.tieuDeKetQua}`, fontSizeHeading, margin, currentLine += 12)

        // charts
        addChartJSPDF(page, chartArea, document.getElementById('chart-area'), margin, currentLine += 7, (width / 2 - margin - (margin / 2)), 50)
        addChartJSPDF(page, chartEnergy, document.getElementById('chart-energy'), (width / 2), currentLine, (width / 2 - margin - (margin / 2)), 50)
        await loadFontPDF(page, './fonts/Roboto-Italic.ttf')
        await addTextCenterPDF(page, this.nhan.pdf.hinh1, fontSizeNormal, (width / 4), currentLine += 55, (width / 2))
        await addTextCenterPDF(page, this.nhan.pdf.hinh2, fontSizeNormal, ((width * (3 / 4)) - (margin / 2)), currentLine, (width / 2))

        // table
        await loadFontPDF(page, './fonts/Roboto-Regular.ttf')
        let data = await layDuLieuBangBucXaHangThang(this.nhan.pdf.bang1.column1, this.khuVucDuocChon.bucXa, this.khuVucDuocChon.nhietDo, this.ketQua.sanLuongTieuThu, this.tongBucXa, this.khuVucDuocChon.nhietDo.reduce((a,c) => a+=c, 0), this.ketQua.tongSanLuongTieuThu)
        page.addPage();

        page.autoTable({
          head: this.nhan.pdf.bang1.head,
          body: data,
          startY: 25,
          margin: {horizontal: (width * 0.25)},
          styles: {
            font: 'Roboto-Regular',
            lineWidth: 0.25,
            lineColor: 0
          },
          theme: 'plain'
        })

        await addTextCenterPDF(page, 'Results of simulation', fontSizeNormal, (width / 2), 155, 100)

        page.save(this.nhan.pdf.tenTep)
      } catch (error) {
        console.log(error);
        alert(this.nhan.pdf.canhBao)
      }
    }
  },
  computed: {
    tongBucXa: function () {
      const tong = tinhTong(this.khuVucDuocChon.bucXa)
      return tong
    },
    ketQua: function () {
      if (!this.khuVucDuocChon || !this.pinDuocChon) return null;

      let heSoSuyGiamNangSuat = this.khuVucDuocChon.nhietDo.map(nhietDo => 1 - 0.0045 * (nhietDo - 25));
      let dienTichPin = this.pinDuocChon.chieuDai * this.pinDuocChon.chieuRong / 1000000;
      let sanLuong1TamPin = heSoSuyGiamNangSuat.map((heSo, i) => this.heSoTonThat * dienTichPin * this.khuVucDuocChon.bucXa[i] * heSo * this.pinDuocChon.hieuSuat / 100);
      let sanLuong1TamPinTB = sanLuong1TamPin.reduce((a,c) => a+=c, 0) / 12;
      let soLuongPin = Math.round(this.congSuatTieuThuThang / sanLuong1TamPinTB);
      let tongDienTichPin = Math.round((this.pinDuocChon.chieuDai / 1000) * (this.pinDuocChon.chieuRong / 1000) * soLuongPin);
      let dienTichLapDat = soLuongPin * tongDienTichPin;
      let congSuatLapDat = soLuongPin * this.pinDuocChon.pmax / 1000;
      let sanLuongTieuThu = this.khuVucDuocChon.bucXa.map(bucXa => Math.round((tongDienTichPin * (this.pinDuocChon.hieuSuat / 100) * bucXa * this.heSoTonThat)));
      let tongSanLuongTieuThu = sanLuongTieuThu.reduce((acc, v) => acc += v);
      let tongChiPhiPin = this.giaPin * soLuongPin;

      if (congSuatLapDat) {
        this.inverterPhuHop = this.inverter.filter(item => item.congSuat >= congSuatLapDat);
        this.giaInverter = this.inverterPhuHop[0].gia;
      }

      let tongChiPinInverter = parseInt(this.giaInverter) + tongChiPhiPin;
      let phiLapDat = 0.15 * tongChiPinInverter;
      let phiDayCap = 0.2 * tongChiPinInverter;
      let phiKhungGiaDo = 0.4 * tongChiPinInverter;

      let tongVonDauTu = tongChiPinInverter + phiLapDat + phiDayCap + phiKhungGiaDo;
      let giaDien = this.congSuatTieuThuThang > 401 ? 3015 : this.congSuatTieuThuThang >= 301 ? 2919 : this.congSuatTieuThuThang >= 201 ? 2612 : this.congSuatTieuThuThang >= 101 ? 2072 : this.congSuatTieuThuThang >= 51 ? 1786 : 1728;
      let soNamHoanVon = Math.floor(tongVonDauTu / (sanLuong1TamPinTB * giaDien * 12 * soLuongPin));

      updateChartColumn(chartEnergy, sanLuongTieuThu);

      return { soLuongPin ,tongDienTichPin ,sanLuongTieuThu ,congSuatLapDat ,dienTichLapDat ,tongSanLuongTieuThu ,tongChiPhiPin, tongVonDauTu, soNamHoanVon };
    },
    pinDuocChon: function () {
      return chonPin(this.danhSachPin, this.maPinDuocChon)
    },
    inverterDuocChon: function () {
      return this.inverterPhuHop.find(item => item.gia == this.giaInverter);
    },
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
  return Math.round((mang.reduce((acc, i) => acc += i) + Number.EPSILON) * 100) / 100
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

async function layDuLieuBangBucXaHangThang(thang, bucXa, nhietDo, sanLuong, tongBucXa, tongNhietDo, tongSanLuong) {
  let data = []

  thang.forEach((v, i) => {
    let row = {}

    if (i < 12) {
      row = [
        v,
        bucXa[i].toString(),
        nhietDo[i].toString(),
        sanLuong[i].toString(),
      ]
    } else {
      row = [
        v,
        tongBucXa.toString(),
        tongNhietDo.toString(),
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

async function fetchWSheet({ gSheetId, wSheetName, range, query }) {
  let url, raw, response;

  url = "https://docs.google.com/spreadsheets/d/";
  url += `${gSheetId}/gviz/tq?tqx=out:csv`;

  if (wSheetName) url += `&sheet=${wSheetName}`;
  if (range) url += `&range=${range}`;
  if (query) url += `&tq=${query}`;

  response = await fetch(url);

  if (response.status != 200) return [];

  raw = await response.text();
  raw = raw
    .slice(1, raw.length - 1)
    .split(/\"\n\"/)
    .map((row) => row.split('","'));

  let map = getRowMap(raw[0]);
  raw.splice(0, 1); // remove header
  return array2Json(raw, map);
}

function getRowMap(array) {
  return array.reduce((a, c, i) => ({ ...a, [c]: i }), {});
}

function array2Json(data, map) {
  return data.map((row) =>
    row.reduce((a, c, i) => ({ ...a, [Object.keys(map)[i]]: row[i] }), {})
  );
}
