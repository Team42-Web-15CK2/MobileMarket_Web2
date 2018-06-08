# MobileMarket_Web2

### **THÀNH VIÊN**

1. 1560262 - Võ Lê Bảo Khiêm
2. 1560264 - Đỗ Đăng Khoa

*******************************************************************************************************************************
-------------------------------------------------------------------------------------------------------------------------------
Key:

	- react 
	- express
	- mysql 
	- webpack
	- sequelize


### 1. Cài dependence

	1.1: 
		cd frontend
		npm install
	1.2:
		cd app
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

- B4: run db:seeds

		sequelize db:seed:all
	

------------------------------------------------------------------------------------------------------------------------------
### 3. run wepack in frontend 

	cd frontend
	./node_modules/.bind/webpack -p

------------------------------------------------------------------------------------------------------------------------------
### 4. run app

	cd app
	npm start


----------------------------------------------------------------------------------------------------------------
### API

## Catalog
    router.get('/catalog', catalogController.index)
    roueter.get('/catalog/:id_product', catalogController.indexProduct)
    router.get('/catalog/:id_brand', catalogController.indexBrand)

## Brand
    router.get('/:id_catalog/brand/:id_brand', brandController.index)

## Product
    router.get
