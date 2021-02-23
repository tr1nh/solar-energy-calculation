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