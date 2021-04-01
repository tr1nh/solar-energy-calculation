const data = {
  "labels": {
    "vi": {
      "tieuDe": "Tính sản lượng năng lượng mặt trời",
      "khuVuc": {
        "tieuDe": "Tính sản lượng năng lượng mặt trời",
        "mieuTa": "Tính toán và thống kê sản lượng năng lượng mặt trời theo tháng của từng khu vực trên Việt Nam.",
        "chonKhuVuc": {
          "tieuDe": "Chọn khu vực",
          "mieuTa": "Lọc huyện hoặc thành phố theo tên"
        },
        "bucXaTheoNam": {
          "tieuDe": "Thông tin của huyện / thành phố",
          "viTri": "Tên huyện / thành phố",
          "bucXa": "Mức bức xạ của cả năm (kWh/an)"
        },
        "bucXaTheoThang": {
          "tieuDe": "Mức bức xạ mặt trời trung bình theo tháng",
          "chartjs": {
            "labels": [
              "Tháng 1",
              "Tháng 2",
              "Tháng 3",
              "Tháng 4",
              "Tháng 5",
              "Tháng 6",
              "Tháng 7",
              "Tháng 8",
              "Tháng 9",
              "Tháng 10",
              "Tháng 11",
              "Tháng 12"
            ],
            "datasets": [
              {
                "label": "Mức bức xạ mặt trời",
                "backgroundColor": "#ff9f43",
                "borderColor": "#ff9f43",
                "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }
        }
      },
      "pin": {
        "tieuDe": "Tính toán năng luợng tiêu thụ",
        "dauVao": {
          "tieuDe": "Thông số đầu vào",
          "congSuat": "Công suất lắp đặt (W)",
          "loaiPin": "Chọn loại pin",
          "heSoTonThat": "Hệ số tổn thất"
        },
        "thongTin": {
          "tieuDe": "Thông tin pin",
          "mieuTa": "Bạn cần phải chọn loại pin để tính toán ra kết quả",
          "bang": {
            "maSanPham": "Mã sản phẩm",
            "pmax": "Pmax (W)",
            "vmp": "Vmp (V)",
            "imp": "Imp (A)",
            "voc": "Voc (V)",
            "isc": "Isc (A)",
            "hieuSuat": "Hiệu suất mô đun (%)",
            "nhietDoHoatDong": "Nhiệt độ hoạt động",
            "dienApToiDa": "Điện áp tối đa của hệ thống",
            "loaiVatLieu": "Loại vật liệu",
            "kichThuoc": "Kích thước",
            "trongLuong": "Trọng lượng"
          }
        },
        "ketQua": {
          "tieuDe": "Kết quả",
          "soLuong": "Số lượng pin",
          "tongDienTich": "Tổng diện tích lắp đặt",
          "tongSanLuong": "Tổng sản lượng cả năm"
        }
      },
      "sanLuong": {
        "tieuDe": "Sản lượng năng lượng mặt trời trong năm",
        "chartjs": {
          "labels": [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12"
          ],
          "datasets": [
            {
              "label": "Sản lượng tiêu thụ",
              "backgroundColor": "#1e90ff",
              "borderColor": "#1e90ff",
              "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
          ]
        }
      },
      "pdf": {
        "tenTep": "ket-qua.pdf",
        "tieuDe": "Kết quả tính toán các thông số chính của hệ thống điện mặt trời nối lưới",
        "diaChi": "Địa chỉ",
        "congSuatLapDat": "Công suất lắp đặt",
        "soLuongPin": "Số lượng pin",
        "loaiPin": "Loại pin",
        "congSuatPin": "Công suất 1 tấm pin",
        "dienTich": "Diện tích lắp đặt",
        "sanLuongDuKien": "Sản lượng dự kiến",
        "hinh1": "Hình 1. Bức xạ mặt trời.",
        "hinh2": "Hình 2. Sản lượng điện hàng tháng.",
        "bang1": {
          "tieuDe": "Bảng 1. Kết quả tính toán sản lượng điện mặt trời.",
          "head": [["Tháng", "Bức xạ mặt trời (KWh/m²)", "Sản lượng (KWh)"]],
          "column1": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12", "Cả năm"]
        },
        "canhBao": "Bạn phải điền đủ thông tin"
      }
    },
    "en": {
      "tieuDe": "Solar energy calculation",
      "khuVuc": {
        "tieuDe": "Calculate solar energy",
        "mieuTa": "Calculate and statistic the monthly solar energy output of each region in Vietnam.",
        "chonKhuVuc": {
          "tieuDe": "Select region",
          "mieuTa": "Filter district or city by name"
        },
        "bucXaTheoNam": {
          "tieuDe": "Information of the district / city",
          "viTri": "Name of district / city",
          "bucXa": "Radiation level of the whole year (kWh / an)"
        },
        "bucXaTheoThang": {
          "tieuDe": "Average solar radiation by month",
          "chartjs": {
            "labels": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            "datasets": [
              {
                "label": "Solar radiation level",
                "backgroundColor": "#ff9f43",
                "borderColor": "#ff9f43",
                "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }
        }
      },
      "pin": {
        "tieuDe": "Calculate energy consumption",
        "dauVao": {
          "tieuDe": "Input parameters",
          "congSuat": "Installed power (W)",
          "loaiPin": "Select battery type",
          "heSoTonThat": "Loss coefficient"
        },
        "thongTin": {
          "tieuDe": "Battery information",
          "mieuTa": "You need to choose the type of battery to calculate the results",
          "bang": {
            "maSanPham": "Product code",
            "pmax": "Pmax (W)",
            "vmp": "Vmp (V)",
            "imp": "Imp (A)",
            "voc": "Voc (V)",
            "isc": "Isc (A)",
            "hieuSuat": "Module efficiency (%)",
            "nhietDoHoatDong": "Operating temperature",
            "dienApToiDa": "Maximum system voltage",
            "loaiVatLieu": "Type of material",
            "kichThuoc": "Size",
            "trongLuong": "Weight"
          }
        },
        "ketQua": {
          "tieuDe": "Result",
          "soLuong": "Number of batteries",
          "tongDienTich": "Total installation area",
          "tongSanLuong": "Total production of the year"
        }
      },
      "sanLuong": {
        "tieuDe": "Solar output in the year",
        "chartjs": {
          "labels": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          "datasets": [
            {
              "label": "Consumption volume",
              "backgroundColor": "#1e90ff",
              "borderColor": "#1e90ff",
              "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
          ]
        }
      },
      "pdf": {
        "tenTep": "result.pdf",
        "tieuDe": "Calculation results of main parameters of grid-connected solar power system",
        "diaChi": "Address",
        "congSuatLapDat": "Installed capacity",
        "soLuongPin": "Number of batteries",
        "loaiPin": "Type of battery",
        "congSuatPin": "Capacity 1 panel",
        "dienTich": "Installation area",
        "sanLuongDuKien": "Expected output",
        "hinh1": "Figure 1. Solar radiation.",
        "hinh2": "Figure 2. Monthly electricity output.",
        "bang1": {
          "tieuDe": "Table 1. Calculation results of solar power output.",
          "head": [["Month", "Solar radiation (KWh/m²)", "Output (KWh)"]],
          "column1": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Year"]
        },
        "canhBao": "You must fill all information"
      }
    }
  },
  "values": {
    "khuVuc": [
      {
        "ten": "Đồng Nai, Cẩm Mỹ",
        "bucXa": [154, 163, 189, 182, 160, 150, 155, 152, 143, 148, 140, 143]
      },
      {
        "ten": "Đồng Nai, Định Quán",
        "bucXa": [163, 170, 187, 180, 165, 153, 157, 156, 145, 157, 149, 153]
      },
      {
        "ten": "Đồng Nai, Long Thành",
        "bucXa": [155, 162, 188, 180, 162, 151, 157, 153, 145, 147, 142, 143]
      },
      {
        "ten": "Đồng Nai, Nhơn Trạch",
        "bucXa": [160, 168, 197, 190, 163, 150, 159, 156, 145, 148, 143, 146]
      }
    ],
    "pin": {
      "thongTinChung": {
        "nhietDoHoatDong": "-40°C ➝ 85°C",
        "dienApToiDa": 1000,
        "loaiVatLieu": "Poly-Si",
        "kichThuoc": {
          "dai": 1956,
          "rong": 992,
          "cao": 40
        },
        "trongLuong": 26.5
      },
      "thongTinRieng": [
        {
          "maSanPham": "JKM300P",
          "pmax": 300,
          "vmp": 36.6,
          "imp": 8.84,
          "voc": 45.3,
          "isc": 8.84,
          "hieuSuat": 15.46
        },
        {
          "maSanPham": "JKM305P",
          "pmax": 305,
          "vmp": 36.8,
          "imp": 8.91,
          "voc": 45.6,
          "isc": 8.91,
          "hieuSuat": 15.72
        },
        {
          "maSanPham": "JKM310P",
          "pmax": 310,
          "vmp": 37,
          "imp": 8.96,
          "voc": 45.9,
          "isc": 8.96,
          "hieuSuat": 15.98
        },
        {
          "maSanPham": "JKM315P",
          "pmax": 315,
          "vmp": 37.2,
          "imp": 9.01,
          "voc": 46.2,
          "isc": 9.01,
          "hieuSuat": 16.23
        }
      ]
    }
  }
}
