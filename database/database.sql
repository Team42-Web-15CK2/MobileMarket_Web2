/* catalogs */
INSERT INTO `catalogs` (`id`,`name`,`slug`,`createAt`,`updateAt`) VALUES ('1','Điện thoại','dien-thoai',NOW(), NOW());
INSERT INTO `catalogs` (`id`,`name`,`slug`,`createAt`,`updateAt`) VALUES ('1','Laptop','laptop',NOW(), NOW());

/* users */
INSERT INTO `users` (`id`, `name`, `email`, `phonenumber`, `address`, `account`, `password`,`isAdmin`,`createAt`,`updateAt`) VALUES
(1,'Võ Lê Bảo Khiêm','volebaokhiem1711@gmail.com','0123123123','95 Đinh Tiên Hoàng, Bình Thạnh','khiemvo','12345678',1,NOW(), NOW()),
(2,'Hồ Liệt Na','holietna@gmail.com','0124124124','97 Đinh Tiên Hoàng, Quận 1','holietna','12345678',0,NOW(), NOW()),
(3,'Nam Thu','namthu@gmail.com','0125125125','97 Lê Duẩn, Quận 1','namthu','12345678',0,NOW(), NOW());

/* orders */
INSERT INTO `orders` (`id`,`id_user`,`totalprice`,`createAt`,`updateAt`) VALUES
(1, 2, 2000000, '2018-01-02 13:20:57','2018-01-02 13:20:57'),
(2, 3, 4000000, '2018-01-02 13:20:57','2018-01-02 13:20:57'),
(3, 3, 1300000, '2018-01-04 09:30:57','2018-01-04 09:30:57'),
(4, 3, 12000000, '2018-02-04 15:00:57','2018-02-04 15:00:57'),
(5, 2, 25000000, '2018-12-05 21:20:57','2018-12-05 21:20:57'),
(6, 2, 45000000, '2018-21-05 12:15:57','2018-21-05 12:15:57');
