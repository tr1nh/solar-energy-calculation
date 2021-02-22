var app = new Vue({
  el: '#app',
  data: function () {
    return {
      nhan: _.cloneDeep(data.labels.vi),
      danhSachKhuVuc: data.values.khuVuc,
      khuVucDuocChon: _.cloneDeep(data.values.khuVuc[0])
    }
  },
  mounted: function () {
    chartArea = initChartArea(document.getElementById('chart-area'), data.labels.vi.khuVuc.bucXaTheoThang.chartjs)
  },
  methods: {
    timKhuVuc: _.debounce(function (e) {
      this.danhSachKhuVuc = timKhuVuc(data.values.khuVuc, e.target.value.toLowerCase())
    }, 250),
    chonKhuVuc: function (khuVuc) {
      this.khuVucDuocChon = khuVuc
      updateChartAreaLabel(chartArea, khuVuc.bucXa)
    }
  },
  computed: {
    tongBucXa: function () {
      const tong = tinhTong(this.khuVucDuocChon.bucXa)
      return tong
    },
  }
})

function timKhuVuc(tatCaKhuVuc, chuoiTimKiem) {
  if (chuoiTimKiem === '') return tatCaKhuVuc

  return tatCaKhuVuc.filter(khuVuc => {
    return khuVuc.ten.toLowerCase().indexOf(chuoiTimKiem) > -1
  })
}

function tinhTong(mang) {
  return mang.reduce((acc, i) => acc += i)
}