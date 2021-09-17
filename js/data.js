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
        "pdfHeader": "Phần mềm tính toán sản lượng điện",
        "tieuDe": "Kết quả tính toán các thông số chính của hệ thống điện mặt trời nối lưới",
        "tieuDeThongTin": "Thông tin về dự án",
        "diaChi": "Địa chỉ",
        "congSuatLapDat": "Công suất lắp đặt",
        "soLuongPin": "Số lượng pin",
        "loaiPin": "Loại pin",
        "congSuatPin": "Công suất 1 tấm pin",
        "dienTich": "Diện tích lắp đặt",
        "sanLuongDuKien": "Sản lượng dự kiến",
        "tieuDeKetQua": "Kết quả tính toán",
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
        "pdfHeader": "Software to calculate electricity output",
        "tieuDe": "Calculation results of main parameters of grid-connected solar power system",
        "tieuDeThongTin": "Project Information",
        "diaChi": "Address",
        "congSuatLapDat": "Installed capacity",
        "soLuongPin": "Number of batteries",
        "loaiPin": "Type of battery",
        "congSuatPin": "Capacity 1 panel",
        "dienTich": "Installation area",
        "sanLuongDuKien": "Expected output",
        "tieuDeKetQua":  "Calculation results",
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
        "bucXa": [156.7, 152.9, 170.6, 154.8, 166.5, 161.4, 163.0, 161.7, 137.0, 148.1, 140.5, 138.8]
      },
      {
        "ten": "Biên Hòa, Tân Phong",
        "bucXa": [154.8, 151.8, 168.7, 153.7, 165.0, 161.0, 162.5, 162.3, 137.7, 147.7, 139.8, 138.6,]
      },
      {
        "ten": "Biên Hòa, Tân Biên",
        "bucXa": [156.4, 153.1, 169.9, 154.4, 165.5, 160.9, 163.0, 161.7, 137.5, 148.3, 140.6, 138.3]
      },
      {
        "ten": "Biên Hòa, Hố Nai",
        "bucXa": [154.5, 152.1, 168.0, 153.0, 163.7, 160.7, 162.9, 161.8, 138.0, 148.1, 140.5, 137.1]
      },
      {
        "ten": "Biên Hòa, Tân Hòa",
        "bucXa": [155.6, 152.6, 168.9, 153.8, 164.5, 160.7, 162.9, 161.7, 137.6, 148.1, 140.4, 137.7,]
      },
      {
        "ten": "Biên Hòa, Bửu Long",
        "bucXa": [153.1, 150.6, 167.2, 152.9, 164.2, 160.7, 162.4, 162.7, 137.8, 147.1, 139.1, 138.6]
      },
      {
        "ten": "Biên Hòa, Tân Tiến",
        "bucXa": [154.3, 151.5, 168.3, 153.5, 164.7, 160.9, 162.4, 162.4, 137.8, 147.6, 139.6, 138.5]
      },
      {
        "ten": "Biên Hòa, Tam Hiệp",
        "bucXa": [154.2, 151.6, 168.2, 153.5, 164.5, 160.9, 162.6, 162.1, 137.7, 147.7, 139.7, 138.2]
      },
      {
        "ten": "Biên Hòa, Long Bình",
        "bucXa": [154.9, 152.0, 168.6, 153.6, 164.5, 160.9, 162.8, 162.0, 137.6, 147.9, 140.0, 138.1]
      },
      {
        "ten": "Biên Hòa, Quang Vinh",
        "bucXa": [152.6, 150.4, 166.7, 152.7, 163.7, 160.5, 162.2, 162.8, 138.0, 147.2, 139.0, 138.4]
      },
      {
        "ten": "Biên Hòa, Tân Mai",
        "bucXa": [154.1, 151.4, 168.2, 153.5, 164.7, 160.8, 162.5, 162.1, 137.8, 147.6, 139.6, 138.4]
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
      },
      {
        "ten": "Biên Hòa, Quyết Thắng",
        "bucXa": [152.6, 150.5, 166.7, 152.7, 163.7, 160.5, 162.2, 162.8, 138.1, 147.2, 139.0, 138.3,]
      },
      {
        "ten": "Biên Hòa, Thanh Bình",
        "bucXa": [152.5, 150.5, 166.7, 152.5, 163.6, 160.6, 162.2, 162.8, 138.2, 157.2, 139.0, 138.2,]
      },
      {
        "ten": "Biên Hòa, Bình Đa",
        "bucXa": [151.8, 150.0, 165.9, 151.8, 162.6, 160.5, 162.1, 162.3, 138.0, 146.6, 138.6, 137.2]
      },
      {
        "ten": "Biên Hòa, An Bình",
        "bucXa": [151.7, 149.9, 165.8, 151.8, 162.6, 160.5, 162.1, 162.4, 138.0, 146.5, 138.5, 137.4]
      },
      {
        "ten": "Biên Hòa, Bửu Hòa",
        "bucXa": [152.2, 150.2, 166.4, 152.4, 163.5, 160.5, 162.2, 162.9, 138.1, 147.1, 138.8, 138.2]
      },
      {
        "ten": "Biên Hòa, Bình Tân",
        "bucXa": [151.1, 149.2, 165.1, 150.6, 162.0, 161.7, 137.8, 145.6, 138.2, 136.4, 138.4, 137.6]
      },
      {
        "ten": "Biên Hòa, Tân Vạn",
        "bucXa": [151.7, 149.8, 165.9, 151.9, 163.0, 160.5, 162.0, 162.6, 137.9, 146.6, 138.4, 137.6]
      },
      {
        "ten": "Biên Hòa, Tân Hạnh",
        "bucXa": [153.0, 150.4, 167.2, 152.8, 164.2, 160.8, 162.5, 162.7, 137.8, 146.9, 139.0, 138.5]
      },
      {
        "ten": "Biên Hòa, Hiệp Hòa",
        "bucXa": [152.0, 150.1, 166.2, 152.2, 163.2, 160.5, 162.1, 162.7, 137.7, 146.9, 138.7, 137.9]
      },
      {
        "ten": "Biên Hòa, Hóa An",
        "bucXa": [152.5, 150.4, 166.7, 152.6, 163.7, 160.5, 162.2, 162.9, 138.2, 147.3, 139.0, 138.3]
      },
      {
        "ten": "Biên Hòa, An Hòa",
        "bucXa": [150.2, 148.5, 164.4, 150.4, 161.5, 160.6, 161.7, 161.6, 137.6, 145.1, 137.6, 136.3]
      },
      {
        "ten": "Long Khánh, Xuân Lập",
        "bucXa": [154.6, 153.7, 170.3, 152.6, 161.4, 160.5, 165.1, 160.6, 136.8, 145.8, 143.1, 134.6]
      },
      {
        "ten": "Long Khánh, Xuân Tây",
        "bucXa": [146.1, 145.3, 174.4, 188.7, 170.6, 154.0, 156.2, 151.5, 134.8, 171.4, 118.7, 128.1]
      },
      {
        "ten": "Long Khánh, Bảo Vinh",
        "bucXa": [145.2, 143.9, 171.2, 185.3, 170.3, 153.4, 156.2, 147.9, 131.7, 170.4, 119.6, 128.9]
      },
      {
        "ten": "Long Khánh, Phú Bình",
        "bucXa": [155.1, 155.1, 172.1, 153.6, 161.5, 160.0, 164.5, 160.3, 136.3, 145.9, 143.9, 134.8]
      },
      {
        "ten": "Long Khánh, Bình Lộc",
        "bucXa": [145.2, 143.8, 170.6, 183.9, 170.4, 153.2, 155.5, 146.1, 130.5, 169.6, 120.7, 130.5]
      },
      {
        "ten": "Long Khánh, Bảo Quang",
        "bucXa": [145.4, 143.9, 171.0, 184.5, 170.3, 153.1, 155.2, 146.4, 130.9, 169.8, 120.4, 130.4]
      },
      {
        "ten": "Long Khánh, Suối Tre",
        "bucXa": [155.7, 154.5, 171.2, 154.0, 162.6, 160.6, 164.5, 160.1, 136.4, 146.5, 143.2, 135.2]
      },
      {
        "ten": "Long Khánh, Bàu Sen",
        "bucXa": [154.7, 154.1, 170.5, 152.7, 161.3, 160.4, 164.6, 160.5, 136.6, 145.8, 143.3, 134.4]
      },
      {
        "ten": "Long Thành, Hiệp Phước",
        "bucXa": [139.7, 141.1, 168.1, 179.9, 166.6, 154.7, 156.1, 152.5, 134.6, 165.2, 115.9, 120.3]
      },
      {
        "ten": "Long Thành, Phú Hội",
        "bucXa": [139.3, 140.2, 167.2, 178.9, 166.0, 154.8, 156.2, 152.4, 134.6, 164.8, 115.6, 119.7]
      },
      {
        "ten": "Long Thành, Long Thọ",
        "bucXa": [140.7, 141.2, 168.6, 181.1, 166.4, 154.0, 156.2, 152.4, 134.7, 165.5, 115.1, 119.7]
      },
      {
        "ten": "Long Thành, Phú Hữu",
        "bucXa": [138.4, 139.6, 165.9, 177.3, 165.9, 154.9, 156.1, 153.2, 134.6, 163.8, 114.8, 118.6]
      },
      {
        "ten": "Long Thành, Đại Phước",
        "bucXa": [138.5, 139.8, 166.1, 177.6, 165.9, 154.7, 156.2, 153.1, 134.6, 163.9, 114.8, 114.8]
      },
      {
        "ten": "Long Thành, Vĩnh Thanh",
        "bucXa": [139.0, 139.9, 167.3, 179.3, 165.9, 154.0, 156.2, 153.2, 134.2, 164.4, 114.5, 118.3]
      },
      {
        "ten": "Long Thành, Phú Thạnh",
        "bucXa": [138.9, 140.0, 167.4, 178.9, 165.4, 153.7, 156.0, 153.2, 134.9, 163.7, 113.9, 117.6]
      },
      {
        "ten": "Long Thành, Phước Thiền",
        "bucXa": [139.6, 140.9, 167.8, 179.9, 166.6, 154.7, 156.2, 152.4, 134.5, 165.1, 115.7, 120.3]
      },
      {
        "ten": "Long Thành, Phước Khánh",
        "bucXa": [138.5, 139.8, 166.8, 178.2, 165.3, 154.1, 156.0, 153.2, 134.5, 163.4, 114.0, 117.6]
      },
      {
        "ten": "Long Thành, Phước An",
        "bucXa": [140.9, 141.4, 168.7, 181.2, 166.6, 154.0, 156.2, 152.4, 134.5, 165.9, 115.3, 120.2]
      },
      {
        "ten": "Long Thành, Phú Đông",
        "bucXa": [138.5, 139.7, 167.1, 178.4, 165.2, 153.7, 156.2, 153.2, 135.0, 163.2, 113.2, 117.3]
      },
      {
        "ten": "Long Thành, Long Tân",
        "bucXa": [139.0, 139.9, 166.6, 178.3, 165.7, 154.8, 156.2, 152.4, 134.6, 164.4, 115.2, 118.9]
      },
      {
        "ten": "Long Thành, TT. Long Thành",
        "bucXa": [140.2, 140.6, 167.5, 179.7, 167.4, 154.5, 156.2, 152.1, 133.9, 166.2, 116.7, 121.9]
      },
      {
        "ten": "Long Thành, Tân Hiệp",
        "bucXa": [142.0, 142.3, 170.2, 183.4, 167.1, 154.1, 156.2, 152.5, 134.7, 167.3, 115.8, 121.7]
      },
      {
        "ten": "Long Thành, An Phước",
        "bucXa": [139.6, 140.4, 167.2, 179.1, 167.2, 154.7, 156.1, 152.3, 133.9, 165.7, 116.4, 121.1]
      },
      {
        "ten": "Long Thành, Cẩm Đường",
        "bucXa": [142.8, 142.4, 170.1, 183.4, 168.9, 153.9, 156.0, 150.7, 133.1, 168.8, 118.2, 125.3]
      },
      {
        "ten": "Long Thành, Bàu Cạn",
        "bucXa": [142.3, 142.6, 170.1, 183.5, 168.4, 153.7, 156.2, 151.7, 134.0, 168.1, 117.0, 123.4]
      },
      {
        "ten": "Long Thành, Long Phước",
        "bucXa": [138.9, 139.7, 165.9, 177.7, 166.6, 154.7, 156.2, 152.4, 133.7, 164.5, 115.9, 120.2]
      },
      {
        "ten": "Long Thành,Phước Thái",
        "bucXa": [141.5, 141.9, 169.8, 182.7, 166.8, 154.1, 156.1, 152.3, 134.0, 166.9, 115.6, 121.2]
      },
      {
        "ten": "Long Thành, Lộc An",
        "bucXa": [141.4, 141.1, 168.3, 180.7, 167.5, 154.6, 156.2, 151.5, 133.7, 166.7, 116.9, 122.8]
      },
      {
        "ten": "Trảng Bom",
        "bucXa": [155.9, 153.5, 169.6, 153.7, 164.0, 161.1, 163.6, 161.4, 137.6, 148.0, 141.2, 136.6]
      },
      {
        "ten": "Trảng Bom, An Viễn",
        "bucXa": [151.4, 150.3, 165.7, 149.5, 160.0, 159.6, 162.4, 160.8, 137.1, 144.8, 138.8, 134.3]
      },
      {
        "ten": "Trảng Bom, Bắc Sơn",
        "bucXa": [157.0, 153.8, 170.3, 154.9, 165.6, 161.3, 163.3, 161.3, 137.5, 148.8, 141.2, 137.7]
      },
      {
        "ten": "Trảng Bom, Bình Minh",
        "bucXa": [155.7, 152.9, 169.0, 153.8, 164.3, 160.8, 163.2, 161.7, 137.8, 148.8, 140.8, 137.4]
      },
      {
        "ten": "Trảng Bom,Cây Gáo",
        "bucXa": [163.7, 158.7, 176.5, 161.8, 172.6, 163.9, 163.6, 159.9, 137.4, 152.0, 142.4, 140.2]
      },
      {
        "ten": "Trảng Bom, Đông Hòa",
        "bucXa": [151.2, 150.5, 165.9, 148.7, 158.8, 158.9, 162.5, 160.1, 136.4, 144.1, 138.8, 133.3]
      },
      {
        "ten": "Trảng Bom, Giang Điền",
        "bucXa": [152.1, 150.8, 166.2, 150.6, 160.9, 160.0, 162.7, 161.2, 137.4, 145.8, 139.4, 135.0]
      },
      {
        "ten": "Trảng Bom, Hố Nai",
        "bucXa": [155.1, 152.6, 168.5, 153.4, 163.9, 160.6, 162.9, 161.6, 137.9, 148.2, 140.7, 137.1]
      },
      {
        "ten": "Trảng Bom, Hưng Thịnh",
        "bucXa": [153.7, 152.4, 168.0, 150.9, 161.0, 160.0, 164.2, 161.1, 137.2, 146.1, 141.0, 134.3]
      },
      {
        "ten": "Trảng Bom, Quảng Tiến",
        "bucXa": [155.7, 153.1, 169.1, 153.6, 164.0, 161.0, 163.4, 161.5, 137.7, 148.0, 141.0, 136.7]
      },
      {
        "ten": "Trảng Bom, Sông Thao",
        "bucXa": [155.6, 153.8, 169.6, 153.3, 163.3, 160.9, 164.3, 161.0, 137.2, 147.4, 141.6, 135.6]
      },
      {
        "ten": "Trảng Bom, Sông Trầu",
        "bucXa": [155.2, 153.2, 169.1, 152.7, 163.0, 160.8, 164.2, 161.2, 137.4, 147.4, 141.2, 135.5]
      },
      {
        "ten": "Trảng Bom, Tây Hòa",
        "bucXa": [154.4, 152.7, 168.5, 151.5, 162.0, 160.7, 164.3, 161.3, 137.4, 146.9, 141.2, 135.1]
      },
      {
        "ten": "Trảng Bom,Thanh Bình",
        "bucXa": [164.2, 159.2, 176.8, 162.6, 173.3, 164.1, 163.4, 159.7, 137.5, 152.5, 142.5, 140.5]
      },
      {
        "ten": "Trảng Bom,Trung Hòa",
        "bucXa": [153.8, 152.4, 168.0, 151.0, 161.4, 160.5, 164.4, 161.3, 137.5, 146.5, 141.1, 134.6]
      },
      {
        "ten": "Định Quán",
        "bucXa": [160.1, 156.0, 170.2, 157.4, 167.2, 158.0, 156.3, 151.5, 131.3, 147.1, 138.4, 137.0]
      },
      {
        "ten": "Định Quán, Thanh Sơn",
        "bucXa": [161.7, 157.5, 172.2, 159.7, 169.5, 160.2, 157.8, 154.0, 133.8, 149.4, 139.5, 138.2]
      },
      {
        "ten": "Định Quán,Phú Vinh",
        "bucXa": [159.8, 155.7, 169.7, 156.9, 166.5, 157.6, 155.8, 151.0, 130.9, 146.4, 138.0, 136.6]
      },
      {
        "ten": "Định Quán, Phú Tân",
        "bucXa": [160.0, 155.9, 170.2, 157.3, 166.9, 158.1, 156.1, 151.4, 131.4, 147.0, 138.3, 136.8]
      },
      {
        "ten": "Định Quán, Phú Lợi",
        "bucXa": [158.0, 154.2, 167.9, 154.3, 164.0, 155.0, 153.9, 148.4, 128.3, 143.9, 136.5, 135.0]
      },
      {
        "ten": "Định Quán, Phú Hòa",
        "bucXa": [157.1, 153.5, 166.9, 153.0, 162.6, 153.7, 152.6, 146.8, 127.0, 142.5, 135.6, 134.1]
      },
      {
        "ten": "Định Quán, Ngọc Định",
        "bucXa": [155.5, 152.7, 166.1, 150.8, 160.3, 152.0, 151.6, 145.7, 125.4, 139.9, 134.9, 133.4]
      },
      {
        "ten": "Định Quán, La Ngà",
        "bucXa": [162.9, 159.0, 173.9, 161.7, 172.1, 162.1, 160.4, 157.0, 136.2, 151.5, 141.1, 139.3]
      },
      {
        "ten": "Định Quán, Gia Canh",
        "bucXa": [158.2, 154.5, 168.1, 154.7, 164.4, 155.5, 154.2, 148.8, 128.9, 144.3, 136.7, 135.3]
      },
      {
        "ten": "Định Quán, Phú Ngọc",
        "bucXa": [161.1, 157.0, 171.4, 158.9, 168.7, 159.7, 157.6, 153.2, 133.2, 148.7, 139.4, 137.9]
      },
      {
        "ten": "Định Quán, Phú Cường ",
        "bucXa": [163.7, 159.8, 175.1, 162.7, 173.3, 163.5, 161.7, 158.5, 137.5, 152.5, 141.9, 149.0]
      },
      {
        "ten": "Định Quán, Phú Túc",
        "bucXa": [163.4, 159.6, 174.5, 162.4, 172.9, 163.1, 161.1, 157.9, 137.0, 152.1, 141.6, 139.7]
      },
      {
        "ten": "Định Quán, Túc Trưng",
        "bucXa": [163.1, 159.2, 174.0, 161.6, 172.2, 162.5, 160.5, 157.3, 136.4, 151.6, 141.3, 139.4]
      },
      {
        "ten": "Định Quán, Suối Nho",
        "bucXa": [160.6, 157.0, 171.8, 158.6, 168.3, 159.7, 158.5, 154.0, 133.6, 148.5, 140.1, 137.7]
      },
      {
        "ten": "Thống Nhất, Gian Tân 2",
        "bucXa": [163.6, 159.8, 174.8, 162.7, 173.1, 163.4, 161.5, 158.5, 137.3, 152.5, 141.7, 139.8]
      },
      {
        "ten": "Thống Nhất, Gian Tân 3",
        "bucXa": [162.1, 158.4, 174.4, 160.6, 171.1, 163.0, 162.7, 159.3, 137.2, 151.2, 142.0, 139.0]
      },
      {
        "ten": "Thống Nhất, Quang Trung",
        "bucXa": [159.2, 156.6, 172.6, 157.5, 167.5, 162.0, 163.5, 160.0, 137.2, 149.2, 142.3, 137.4]
      },
      {
        "ten": "Thống Nhất, Bàu Hàm 2",
        "bucXa": [156.4, 154.7, 170.9, 154.4, 163.8, 161.1, 164.2, 160.5, 137.0, 147.4, 142.5, 135.8]
      },
      {
        "ten": "Thống Nhất, Gia Kiệm",
        "bucXa": [162.2, 158.8, 174.0, 160.8, 171.4, 162.9, 162.2, 158.8, 137.4, 151.3, 142.0, 139.0]
      },
      {
        "ten": "Thống Nhất, Hưng Lộc",
        "bucXa": [153.7, 152.6, 168.2, 151.0, 160.8, 159.9, 164.2, 161.0, 137.1, 146.0, 141.2, 134.4]
      },
      {
        "ten": "Thống Nhất, Xã Lộ 25",
        "bucXa": [152.0, 151.7, 167.2, 149.2, 158.6, 158.8, 163.0, 160.1, 136.1, 144.2, 139.8, 133.1]
      },
      {
        "ten": "Thống Nhất, Xuân Thiện",
        "bucXa": [160.9, 158.0, 173.4, 159.4, 169.4, 161.8, 161.5, 157.6, 136.2, 149.9, 142.0, 138.2]
      },
      {
        "ten": "Thống Nhất, Dầu Dây",
        "bucXa": [155.8, 154.3, 170.5, 153.5, 163.0, 161.0, 164.6, 160.6, 137.0, 146.8, 142.6, 135.4]
      },
      {
        "ten": "Tân Phú, Phú Trung",
        "bucXa": [149.8, 146.8, 171.8, 183.7, 171.1, 151.9, 155.5, 140.5, 128.2, 168.1, 122.4, 137.6,]
      },
      {
        "ten": "Tân Phú, Phú Xuân",
        "bucXa": [148.8, 146.4, 171.2, 183.0, 170.9, 151.9, 155.4, 140.4, 127.3, 168.9, 122.4, 136.9]
      },
      {
        "ten": "Tân Phú, Phú Lộc",
        "bucXa": [149.1, 146.5, 170.9, 182.7, 170.8, 151.9, 155.5, 140.7, 127.6, 168.9, 122.4, 136.9]
      },
      {
        "ten": "Tân Phú, Phú Lâm",
        "bucXa": [149.3, 146.8, 172.0, 184.9, 171.7, 151.9, 155.5, 141.6, 128.4, 169.2, 122.4, 136.4]
      },
      {
        "ten": "Tân Phú, Phú Bình",
        "bucXa": [149.5, 147.1, 171.8, 185.1, 171.8, 151.8, 155.5, 141.3, 128.2, 168.9, 122.4, 136.9]
      },
      {
        "ten": "Tân Phú, Phú Thanh",
        "bucXa": [156.1, 153.0, 166.2, 151.6, 161.1, 152.6, 151.9, 146.0, 125.9, 140.9, 135.1, 133.7]
      },
      {
        "ten": "Tân Phú, Trà Cổ",
        "bucXa": [156.5, 152.9, 166.4, 151.9, 161.5, 152.9, 152.3, 146.2, 126.2, 141.5, 135.2, 133.8]
      },
      {
        "ten": "Tân Phú, Phú Điền",
        "bucXa": [156.8, 153.2, 166.5, 152.5, 162.1, 153.2, 152.2, 146.2, 126.5, 141.9, 135.3, 133.9]
      },
      {
        "ten": "Tân Phú",
        "bucXa": [157.6, 153.8, 167.5, 153.7, 163.3, 154.3, 153.5, 147.8, 127.8, 143.4, 136.1, 134.6]
      },
      {
        "ten": "Tân Phú, Phú Lập",
        "bucXa": [157.9, 153.7, 167.0, 153.7, 163.5, 154.4, 152.7, 147.3, 127.9, 143.2, 135.1, 134.7]
      },
      {
        "ten": "Tân Phú, Nam Cát Tiên",
        "bucXa": [156.0, 151.4, 163.9, 150.0, 160.5, 151.7, 150.2, 144.4, 125.2, 139.6, 132.2, 133.1]
      },
      {
        "ten": "Tân Phú, Phú An",
        "bucXa": [155.9, 151.9, 164.9, 150.5, 160.3, 151.8, 150.8, 145.0, 125.2, 139.8, 133.5, 133.2]
      },
      {
        "ten": "Tân Phú, Núi Tượng",
        "bucXa": [157.3, 152.8, 166.0, 152.5, 162.2, 153.6, 152.2, 146.4, 126.9, 142.2, 134.1, 134.2]
      },
      {
        "ten": "Tân Phú, Tà Lài",
        "bucXa": [159.5, 155.1, 168.8, 156.0, 165.8, 156.7, 154.8, 149.7, 130.1, 145.5, 136.7, 136.1]
      },
      {
        "ten": "Tân Phú, Phú Sơn",
        "bucXa": [155.1, 152.1, 165.1, 149.9, 159.5, 151.3, 150.8, 144.8, 124.5, 138.8, 133.9, 133.0]
      },
      {
        "ten": "Tân Phú, Phú Thịnh",
        "bucXa": [158.7, 154.5, 168.2, 154.9, 164.7, 155.7, 153.9, 148.8, 129.0, 144.5, 136.5, 135.5]
      },
      {
        "ten": "Tân Phú, Thanh Sơn",
        "bucXa": [161.4, 157.3, 171.7, 159.4, 169.4, 160.1, 158.0, 153.9, 133.6, 149.1, 139.6, 138.2]
      },
      {
        "ten": "Xuân Lộc, Gia Ray",
        "bucXa": [159.2, 160.7, 180.8, 160.8, 166.3, 160.5, 164.5, 159.8, 136.3, 148.4, 148.9, 138.1]
      },
      {
        "ten": "Xuân Lộc, Suối Cao",
        "bucXa": [158.5, 156.8, 172.6, 156.9, 165.2, 157.8, 158.4, 153.3, 131.9, 146.1, 141.4, 136.4]
      },
      {
        "ten": "Xuân Lộc, Xuân Thọ",
        "bucXa": [157.4, 157.7, 175.3, 157.3, 164.9, 160.0, 163.2, 158.4, 135.0, 147.2, 145.8, 136.5]
      },
      {
        "ten": "Xuân Lộc, Xuân Trường",
        "bucXa": [159.7, 161.3, 181.1, 161.3, 167.0, 160.2, 163.6, 158.5, 135.5, 148.4, 148.7, 138.7]
      },
      {
        "ten": "Xuân Lộc, Xuân Hòa",
        "bucXa": [161.4, 163.1, 185.1, 165.6, 170.8, 161.9, 166.0, 161.4, 138.2, 150.2, 151.1, 139.0]
      },
      {
        "ten": "Xuân Lộc, Xuân Hưng",
        "bucXa": [160.6, 162.0, 184.4, 165.4, 168.7, 162.1, 167.0, 163.6, 139.2, 150.0, 150.4, 138.7]
      },
      {
        "ten": "Xuân Lộc, Xuân Tâm",
        "bucXa": [159.8, 161.0, 183.4, 163.6, 167.2, 161.5, 166.4, 163.4, 138.7, 149.3, 149.6, 138.2]
      },
      {
        "ten": "Xuân Lộc, Suối Cát",
        "bucXa": [157.6, 158.7, 177.6, 158.4, 165.0, 160.5, 164.6, 160.0, 136.2, 147.6, 147.5, 136.8]
      },
      {
        "ten": "Xuân Lộc, Xuân Hiệp",
        "bucXa": [158.4, 160.0, 180.0, 160.2, 165.5, 160.6, 165.0, 160.7, 136.7, 148.2, 148.2, 137.4]
      },
      {
        "ten": "Xuân Lộc, Xuân Phú",
        "bucXa": [157.1, 158.1, 176.7, 157.6, 164.3, 160.4, 164.5, 160.2, 136.3, 147.4, 146.9, 136.3]
      },
      {
        "ten": "Xuân Lộc, Xuân Định",
        "bucXa": [155.3, 155.8, 173.2, 154.0, 161.4, 159.6, 164.2, 160.2, 136.2, 146.0, 144.2, 134.7]
      },
      {
        "ten": "Xuân Lộc, Bảo Hòa",
        "bucXa": [156.0, 156.9, 174.7, 155.5, 162.5, 159.7, 164.3, 160.3, 163.3, 146.6, 145.2, 135.2]
      },
      {
        "ten": "Xuân Lộc, Lang Minh",
        "bucXa": [158.1, 159.5, 179.7, 160.0, 165.0, 160.5, 165.1, 161.2, 137.0, 148.1, 147.7, 137.0]
      },
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
