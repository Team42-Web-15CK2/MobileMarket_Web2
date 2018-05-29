# MobileMarket_Web2

### **THÀNH VIÊN**

1. 1560262 - Võ Lê Bảo Khiêm
2. 1560264 - Đỗ Đăng Khoa

*******************************************************************************************************************************
-------------------------------------------------------------------------------------------------------------------------------


### 1. Cài dependence

	npm install


-------------------------------------------------------------------------------------------------------------------------------

### 2. Cài đặt database

- B1: tạo database "mobile_market_web2" với collation utf8_unicode_ci
- B2: chỉnh username, password trong /config/config.json  

		"development": {
				"username": "root",
				"password": null,
				"database": "mobile_market_web2",
				"host": "127.0.0.1",
				"dialect": "mysql"
			},
	
- B3: chạy lệnh sau để tạo các table cho database

		sequelize db:migrate 
		
- B4: insert dữ liệu

		Import file database.sql trong folder database	
	hoặc	

		* Copy nội dung file database.sql trong folder database
		* Dán vào ô nhập của mục SQL trong database
		* Nhấn `GO`
		
------------------------------------------------------------------------------------------------------------------------------
### 3. Run Server: Port 3000

	npm run dev
		
------------------------------------------------------------------------------------------------------------------------------
### 4. Run client: client chạy ở port 3000 và được proxy sang port 3001

	cd view
	npm run start
