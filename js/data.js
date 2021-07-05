const data = {
  "labels": {
    "vi": {
      "tieuDe": "Tính toán sản lượng năng lượng mặt trời tại Tỉnh Đồng Nai",
      "khuVuc": {
        "tieuDe": "Tính toán sản lượng năng lượng mặt trời tại Tỉnh Đồng Nai",
        "mieuTa": "Đây là công cụ sử dụng để ước lượng sản lượng điện mặt trời. Để tính toán sản lượng điện các bạn làm theo các bước sau: (1) Chọn địa điểm lắp đặt;(2) Chọn công suất lắp đặt ( Đối với hộ gia đình mỗi tháng sử dụng từ 300 kWh đến 400kWh thì công suất lắp đặt nên chọn từ 3000 Wp đến 5000 Wp), (3) Chọn loại Pin năng lượng mặt trời.Kết quả sẽ là sản lượng điện và tổng diện tích lắp đặt.",
        "chonKhuVuc": {
          "tieuDe": "Chọn khu vực",
          "mieuTa": "Lọc huyện hoặc thành phố theo tên"
        },
        "bucXaTheoNam": {
          "tieuDe": "Thông tin của huyện / thành phố",
          "viTri": "Tên huyện / thành phố",
          "bucXa": "Bức xạ của cả năm (kWh/m²/năm)"
        },
        "bucXaTheoThang": {
          "tieuDe": "Bức xạ mặt trời trung bình (kWh/m²/tháng)",
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
                "label": "Bức xạ mặt trời",
                "backgroundColor": "#ff9f43",
                "borderColor": "#ff9f43",
                "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }
        }
      },
      "pin": {
        "tieuDe": "Tính Toán sản lượng điện",
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
          "soLuong": "Số lượng pin quang dien",
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
              "label": "Sản lượng",
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
        "tieuDe": "Calculating solar energy production in Dong Nai Province ",
        "mieuTa": "This is a tool used to estimate solar power output. To calculate the power output, you follow these steps: (1) Choose the installation location; (2) Choose the installed capacity (For households that use between 300 kWh and 400kWh per month, the installed capacity is should choose from 3000 Wp to 5000 Wp), (3) Choose the type of solar battery. The result will be the power output and total installation area.",
        "chonKhuVuc": {
          "tieuDe": "Select region",
          "mieuTa": "Filter district or city by name"
        },
        "bucXaTheoNam": {
          "tieuDe": "Information of the district / city",
          "viTri": "Name of district / city",
          "bucXa": "Radiation level of the whole year (kWh/m²/year)"
        },
        "bucXaTheoThang": {
          "tieuDe": "Average solar radiation (kWh/m²/month)",
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
        "tieuDe": "Calculate power output",
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
      },
      {
        "ten": "Biên Hòa, Trảng Dài",
        "bucXa": [156.7, 152.9, 170.6, 154.8, 166.5, 161.4, 163.0, 161.7, 137.0, 148.1, 140.5, 138.]
      },
      {
        "ten": "Biên Hòa, Tân Biên",
        "bucXa": [156.4, 153.1, 169.9, 154.4, 165.5, 160.9, 163.0, 161.7, 137.5, 148.3, 140.6, 138.]
      },
      {
        "ten": "Biên Hòa, Hố Nai",
        "bucXa": [154.5, 152.1, 168.0, 153.0, 163.7, 160.7, 162.9, 161.8, 138.0, 148.1, 140.5, 137.]
      },
      {
        "ten": "Biên Hòa, Tân Hòa",
        "bucXa": [155.6, 152.6, 168.9, 153.8, 164.5, 160.7, 162.9, 161.7, 137.6, 148.1, 140.4, 137.7,]
      },
      {
        "ten": "Biên Hòa, Tân Tiến",
        "bucXa": [154.3, 151.5, 168.3, 153.5, 164.7, 160.9, 162.4, 162.4, 137.8, 147.6, 139.6, 138.]
      },
      {
        "ten": "Biên Hòa, Tam Hiệp",
        "bucXa": [154.2, 151.6, 168.2, 153.5, 164.5, 160.9, 162.6, 162.1, 137.7, 147.7, 139.7, 138.]
      },
      {
        "ten": "Biên Hòa, Long Bình",
        "bucXa": [154.9, 152.0, 168.6, 153.6, 164.5, 160.9, 162.8, 162.0, 137.6, 147.9, 140.0, 138.]
      },
      {
        "ten": "Biên Hòa, Quang Vinh",
        "bucXa": [152.6, 150.4, 166.7, 152.7, 163.7, 160.5, 162.2, 162.8, 138.0, 147.2, 139.0, 138.]
      },
      {
        "ten": "Biên Hòa, Bửu Long",
        "bucXa": [153.1, 150.6, 167.2, 152.9, 164.2, 160.7, 162.4, 162.7, 137.8, 147.1, 139.1, 138.]
      },
      {
        "ten": "Biên Hòa, Tân Mai",
        "bucXa": [154.1, 151.4, 168.2, 153.5, 164.7, 160.8, 162.5, 162.1, 137.8, 147.6, 139.6, 138.]
      },
      {
        "ten": "Biên Hòa, Thống Nhất",
        "bucXa": [153.1, 150.8, 167.2, 152.9, 164.1, 160.6, 162.1, 162.7, 138.1, 147.4, 139.2, 138.4]
      },
      {
        "ten": "Biên Hòa, Trung Dũng",
        "bucXa": [152.8, 150.6, 166.9, 152.8, 163.9, 160.5, 162.0, 162.6, 138.0, 147.3, 139.1, 138.4]
      },
      {
        "ten": "Biên Hòa, Tam Hòa",
        "bucXa": [154.7, 151.8, 168.5, 153.4, 164.6, 160.9, 162.7, 162.2, 137.8, 147.8, 139.9, 138.3]
      },
      {
        "ten": "Biên Hòa, Hòa Bình",
        "bucXa": [152.5, 150.4, 166.7, 152.5, 163.6, 160.6, 162.2, 162.8, 138.2, 147.2, 138.9, 138.2]
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
