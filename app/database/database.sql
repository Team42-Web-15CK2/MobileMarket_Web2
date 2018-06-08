-- users
INSERT INTO `users` (`id`, `name`, `email`, `phonenumber`, `address`, `account`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0909123456', 'Nguyễn Văn A Street', 'admin', '123456', 1, NOW(), NOW()),
(2, 'Nguyễn Văn B', 'nguyenvanb@gmail.com', '0909123457', 'Nguyễn Văn B Street', 'user1', '123456', 0, NOW(), NOW());

-- catalogs
INSERT INTO `catalogs`(`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES
(1,'Điện thoại','dien-thoai',NOW(),NOW()),
(2,'Lap top','lap-top',NOW(),NOW());

-- brand
INSERT INTO `brands` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'SAMSUNG', 'oppo', NOW(), NOW()),
(2, 'OPPO', 'oppo', NOW(), NOW()),
(3, 'ASUS', 'asus', NOW(), NOW()),
(4, 'DELL', 'dell', NOW(), NOW()),
(5, 'MSI', 'msi', NOW(), NOW()),
(6, 'HP', 'hp', NOW(), NOW()),
(7, 'XIAOMI', 'xiaomi', NOW(), NOW());

-- products
INSERT INTO `products` (`id`, `id_catalog`, `id_brand`, `name`, `image_url`, `description`, `price`, `sold_quantity`, `remaining_quantity`, `createdAt`, `updatedAt`) VALUES
(1,1,1, 'SAMSUNG GALAXY J3 VÀNG', 'images/dienthoai/dt100.jpg', 'Màn hình : Super AMOLED, 5 inches\\r\\nHĐH: Android\\r\\nCPU: Quad Core 1.3GHz\\r\\nCamera: 8MP, 5MP\\r\\nPin: 2600 mAh',2900000,5,10, NOW(), NOW()),
(2,1,1, 'SAMSUNG GALAXY J7 PRIME ĐEN', 'images/dienthoai/dt101.jpg', 'Màn hình : 5.5 inches\r\nHĐH: Android\r\nCPU: Octa-core 1.6 GHz\r\nCamera: 13 MP, 8 MP\r\nPin: 3300mAh\r\n',5450000,6,10, NOW(), NOW()),
(3,1,1, 'SAMSUNG GALAXY J7 PRIME VÀNG', 'images/dienthoai/dt102.jpg', 'Màn hình : 5.5 inches\r\nHĐH: Android\r\nCPU: Octa-core 1.6 GHz\r\nCamera: 13 MP, 8 MP\r\nPin: 3300mAh\r\n',5490000,7,10, NOW(), NOW()),
(4,1,1, 'SAMSUNG GALAXY J3 PRO VÀNG', 'images/dienthoai/dt103.jpg', 'Màn hình TFT 5 HD\r\nBộ nhớ RAM 2GB/Bộ nhớ trong 16GB\r\nVi xử lý 4 nhân 1.4GHz\r\nCamera trước/sau: 5MP/13MP\r\nHệ điều hành Android 7.0',4490000,5,10, NOW(), NOW()),
(5,1,1, 'SAMSUNG GALAXY J3 PRO XANH', 'images/dienthoai/dt104.jpg', 'Màn hình TFT 5 HD\r\nBộ nhớ RAM 2GB/Bộ nhớ trong 16GB\r\nVi xử lý 4 nhân 1.4GHz\r\nCamera trước/sau: 5MP/13MP\r\nHệ điều hành Android 7.0',4490000,2,10, NOW(), NOW()),
(6,1,1, 'SAMSUNG GALAXY NODE8 VÀNG', 'images/dienthoai/dt105.jpg', 'Màn hình: 6.3\" Super AMOLED\r\nHệ điều hành: Android 7.1\r\nCPU: Octa-core\r\nPin: Li-Ion 3300 mAh\r\nCamera sau: dual 12MP - trước: 8MP\r\nChipset: Exynos 8895 Oct',22490000,1,10, NOW(), NOW()),
(7,1,1, 'SAMSUNG GALAXY A8 2018 VÀNG', 'images/dienthoai/dt106.jpg', 'Thiết kế kim loại nguyên khối\r\nMàn hình Super AMOLED 5.6\r\nRAM 4 GB, bộ nhớ trong 32GB\r\nVi xử lý Exynos 7880 8 nhân\r\nKháng nước, chống bụi IP68\r\nSạc nhanh qua cổng USB type C',10990000,5,10, NOW(), NOW()),
(8,1,2, 'OPPO F5 YOUTH VÀNG', 'images/dienthoai/dt107.jpg', 'Tích hợp bảo mật vân tay\r\nThiết kế mỏng nhẹ, dày chỉ 7.5mm\r\nMàn hình 6 sắc nét, độ phân giải Full HD+\r\nVi xử lý Helio P23 hiệu năng cao\r\nRAM 3GB, Bộ nhớ trong 32 GB',6190000,5,10, NOW(), NOW()),
(9,1,2, 'OPPO F3 VÀNG', 'images/dienthoai/dt108.jpg', 'Màn hình: 5.5 inches, Full HD\r\nHĐH: Android 6.0\r\nCPU: 1.5 GHz\r\nCamera: trước 16 MP + 8 MP, sau 13MP\r\nPin: 3200 mAh',6090000,5,10, NOW(), NOW()),
(10,1,2, 'OPPO F3 VÀNG HỒNG', 'images/dienthoai/dt109.jpg', 'Màn hình: 5.5 inches, Full HD\r\nHĐH: Android 6.0\r\nCPU: 1.5 GHz\r\nCamera: trước 16 MP + 8 MP, sau 13MP\r\nPin: 3200 mAh',6090000,5,10, NOW(), NOW()),
(11,1,2, 'OPPO F3 ĐEN', 'images/dienthoai/dt110.jpg', 'Màn hình: 5.5 inches, Full HD\r\nHĐH: Android 6.0\r\nCPU: 1.5 GHz\r\nCamera: trước 16 MP + 8 MP, sau 13MP\r\nPin: 3200 mAh',6090000,5,10, NOW(), NOW()),
(12,1,1, 'SAMSUNG GALAXY J7 PRO ĐEN', 'images/dienthoai/dt111.jpg', 'Màn hình:SuperAMOLED FullHD\r\nCamera trước và sau:13 MP\r\nChip 8 nhân 1,6 GHz\r\nRAM 3GB\r\nHệ điều hành Android 7 Nougat',4490000,5,10, NOW(), NOW()),
(13,1,1, 'SAMSUNG GALAXY J7 PRO VÀNG', 'images/dienthoai/dt112.jpg', 'Màn hình: SuperAMOLED Full HD\r\nCamera trước và sau: 13 MP\r\nChip 8 nhân tốc độ 1,6 GHz/ RAM 3GB\r\nHệ điều hành Android 7 Nougat',5990000,5,10, NOW(), NOW()),
(14,1,1, 'SAMSUNG GALAXY J7 PRO XANH', 'images/dienthoai/dt113.jpg', 'Màn hình: SuperAMOLED Full HD\r\nCamera trước và sau: 13 MP\r\nChip 8 nhân tốc độ 1,6 GHz/ RAM 3GB\r\nHệ điều hành Android 7 Nougat',20000000,5,10, NOW(), NOW()),
(15,1,1, 'SAMSUNG GALAXY J7 PRO XANH', 'images/dienthoai/dt114.jpg', 'Màn hình: SuperAMOLED Full HD\r\nCamera trước và sau: 13 MP\r\nChip 8 nhân tốc độ 1,6 GHz/ RAM 3GB\r\nHệ điều hành Android 7 Nougat',16990000,5,10, NOW(), NOW()),
(16,1,1, 'SAMSUNG GALAXY J3 PRO', 'images/dienthoai/dt115.jpg', 'Màn hình TFT 5 HD\r\nBộ nhớ RAM 2GB/Bộ nhớ trong 16GB\r\nVi xử lý 4 nhân 1.4GHz\r\nCamera trước/sau: 5MP/13MP\r\nHệ điều hành Android 7.0',14500000,5,10, NOW(), NOW()),
(17,2,3, 'Asus E502NA-GO021', 'images/laptop/lt100.jpg', 'Màn Hình : 15.6 inchLED Back-litCPU : Intel, Celeron, 1.10 GHzRam : 4 GB,\r\n DDR3L, 1333 MHzVGA : Intel HD Graphics ShareHĐH : ENDLESSNặng : 1.86 Kg\r\n',5990000,5,10, NOW(), NOW()),
(18,2,4, 'Dell V3468', 'images/laptop/lt101id.jpg', 'Màn Hình : 14 inchHDCPU : Intel, Core i3, 2.4 GhzRam : 4 GB, \r\nDDR4, 2133 MHzVGA : Intel HD Graphics ShareHĐH : UbuntuNặng : 1.96 kg',10790000,5,10, NOW(), NOW()),
(19,2,5, 'MSI GL62M 7RDX – 1036XVN', 'images/laptop/lt102.jproductspg', '\"Màn Hình : 15.6 inchWide-ViewCPU : Intel, Core i5, 2.50 GHzRam : 4 GB,\r\n DDR4, 2133 MHzVGA : NVIDIA Geforce GTX 1050 2 GBHĐH : Free DOSNặng : 2.2 Kg\"\r\n',18990000,5,10, NOW(), NOW()),
(20,2,5, 'MSI GL62M 7RDX-1816XVN', 'images/laptop/lt103.jpg', 'Màn Hình : 15.6 inchWide-ViewCPU : Intel, Core i5, 2.50 GHzRam : 8 GB,\r\n DDR4, 2133 MHzVGA : NVIDIA Geforce GTX 1050 2 GBHĐH : Free DOSNặng : 2.2 Kg',20000000,5,10, NOW(), NOW()),
(21,2,5, 'MSI GL62M 7RDX-1817XVN', 'images/laptop/lt104.jpg', 'Màn Hình : 15.6 inchWide-ViewCPU : Intel, Core i7, 2.80 GHzRam : 8 GB,\r\n DDR4, 2400MHzVGA : NVIDIA Geforce GTX 1050 4 GBHĐH : Free DOSNặng : 2.2 Kg',25990000,5,10, NOW(), NOW()),
(22,2,4, 'Dell Vostro V5568/i5-7200U (2.5GHz) ', 'images/laptop/lt105.jpg', 'Màn Hình : 15.6 inch HD  Anti-Glare LEDCPU : Intel, Core i5, 2.50 GHzRam : 4 GB,\r\n DDR4, 2133 MHzVGA : Intel(R) HD 620 GraphicsHĐH : ubuntuNặng : 2.0Kg',16000000,5,10, NOW(), NOW()),
(23,2,4, 'Dell Vostro V5568/i5-7200U/Win10', 'images/laptop/lt106.jpg', 'Màn Hình : 15.6 inchHD LEDCPU : Intel, Core i5, 2.50 GHzRam : 4 GB, \r\nDDR4, 2133 MHzVGA : Intel® HD Graphics 620 ShareHĐH : Windows 10Nặng : 1.98Kg',16990000,5,10, NOW(), NOW()),
(24,2,4, 'Dell Inspiron N3567/i5-7200U', 'images/laptop/lt107.jpg', 'Màn Hình : 15.6 inchTruelife LED-Backlit DisplayCPU : Intel, Core i5-7200URam : 4 GB, \r\nDDR4, 2133 MHzVGA : AMD Radeon Graphics 2 GBHĐH : Ubuntu Linux 16.04Nặng : 2.30 Kg',14500000,5,10, NOW(), NOW()),
(25,2,5, 'MSI GL62 7RD - 675XVN', 'images/laptop/lt108.jpg', 'Màn Hình : 15.6 incheDP Vivid Color 94%CPU : Intel, Core i7, 2.80 GHzRam : 8 GB, \r\nDDR4, 2400MHzVGA : NVIDIA Geforce GTX 1050 2 GBHĐH : Free DOSNặng : 2.3kg',23000000,5,10, NOW(), NOW()),
(26,2,6, 'HP Envy 13-ad076TU', 'images/laptop/lt109.jpg', 'Màn Hình : 13.3 inchFHD IPS BrightView micro-edge WLED-backlitCPU : Intel, Core i5, 2.50 GHzRam : 4 GB, LPDDR3, 1866 MHzVGA : Intel HD Graphics 620 ShareHĐH : Windows 10 Home Single',20000000,5,10, NOW(), NOW()),
(27,2,3, 'ASUS ROG FX503VD-E4119T/i7-7700HQ', 'images/laptop/lt110.jpg', 'Màn Hình : 15.6 inch Full HDCPU : Intel Core i7-7700HQRam : 8 GB, DDR4, 2400MHzVGA : NVIDIA Geforce GTX 1050 4 GBHĐH : Window 10 Home 64 SLNặng : 2.57 Kg',25490000,5,10, NOW(), NOW()),
(28,2,4, 'Dell Precision 15 M7510', 'images/laptop/lt111.jpg', 'CPU Intel Core i7-6820HQ (2.70Ghz up to 3.60Ghz, 8M cache)\r\nHệ điều hành Windows 7 Professional 64 (Windows 10 Pro 64 downgrade)\r\nKích thước màn hình 15.6\" UltraSharp FHD IPS 1920*1080 Wide',41000000,5,10, NOW(), NOW()),
(29,2,4, 'Dell Precision 7710 Workstation', 'images/laptop/lt112.jpg', 'CPU Intel Core i7-6820HQ (2.70Ghz up to 3.60Ghz, 8M cache)\r\nHệ điều hành Windows 7 Professional 64 (Windows 10 Pro 64 downgrade)\r\nKích thước màn hình 17.3\" UltraSharp FHD IPS (1920x1080) \r\n',43500000,5,10, NOW(), NOW()),
(30,2,4, 'Dell Precision M3800', 'images/laptop/lt113.jpg', 'CPU 4th Generation Core i7 - 4712HQ Processor (6M Cache, 2.30Ghz up to 3.2 GHz)\r\nHệ điều hành Windows 7 Professional 64bit\r\n',39000000,5,10, NOW(), NOW()),
(31,2,7, 'Laptop Xiaomi MiBook Air 13.3 inch ( i5 )', 'images/laptop/lt114.jpg', 'Màn hình: 13,3 inch (1920×1080).\r\n– CPU: Intel Core i5-6200u Dual Core, Up to 3.0GHz\r\n– SSD: 256GB có 1 khe M2 trống để mở rộng dung lượng nếu cần.',22300000,5,10, NOW(), NOW()),
(32,2,4, 'Dell Precision 7510 New Dell', 'images/laptop/lt115.jpg', 'CPU\r\n Intel Core i7 6820HQ (8 x 2.7Ghz, Turbo Bost 3.6Ghz, 8MB Cache)\r\n RAM\r\n 16GB DDR4 2133 MHz, up to 32GB\r\n Hard Disk\r\n HDD 1000GB 7200rpm',30000000,5,10, NOW(), NOW()),
(33,2,4, 'Dell Inspiron N7460-N4I5259W', 'images/laptop/lt116.jpg', 'CPU Intel® Core™ i5-7200U (2.5GHz upto 3.1 GHz, 2Cores, 4Threads, 3MB Cache, FSB 4GT/s)\r\nRAM 4GB DDR4 2133MHz (1x4GB) + 1 slot Ram.',53000000,5,10, NOW(), NOW()),
(34,2,3, 'Asus ROG Strix Hero GL503VM-GZ219T', 'images/laptop/lt117.jpg', 'CPU Intel® Core™ i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)\r\nRAM 8GB DDR4 2400MHz (1x8GB), 2 slot Ram, Max 32GB\r\n',40000000,5,10, NOW(), NOW()),
(35,2,5, 'MSI GE63VR 7RE-088XVN Raider', 'images/laptop/lt118.jpg', 'CPU Intel® Core™ i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)', 15000000, 5,10 , NOW(), NOW());

-- orlers
INSERT INTO `orders` (`id`, `id_user`, `totalprice`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5600000, NOW(), NOW());

-- order-detail
INSERT INTO `orderdetails` (`id`, `id_order`, `id_product`, `name_product`, `price_product`, `quantity`, `total`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'SAMSUNG GALAXY J3 VÀNG', 2900000, 2, 5600000, NOW(), NOW());

-- comment
INSERT INTO `comments` (`id`, `id_user`, `id_product`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Sản phẩm tốt', NOW(), NOW());
