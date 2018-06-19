var express = require('express')
var router = express.Router()
var model = require('../../models')

/*product*/
// show all product
router.get('/product', function(req, res){
  model.product.findAll({
    attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity','createdAt','updatedAt']
  })
  .then(function(products){
    res.json(products)
  })
})
// show detail of product
router.get('/product/:id', function(req, res){
  model.product.findAll({
    attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity','createdAt','updatedAt'],
    where: {
      id: req.params.id
    }
    }).then(function(products){
      res.json(products)
    })
})
// show product group by catalog
router.get('/product/catalog/:id_catalog', function(req, res){
  model.product.findAll({
    attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity','createdAt','updatedAt'],
    where: {
      id_catalog: req.params.id_catalog
    }
    }).then(function(products){
      res.json(products)
    })
})
// show product group by brand
router.get('/product/brand/:id_brand', function(req, res){
  model.product.findAll({
    attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity','createdAt','updatedAt'],
    where: {
      id_brand: req.params.id_brand
    }
    }).then(function(products){
      res.json(products)
    })
})
// show 10 new product
router.get('/new-product', function(req, res){
  model.product.findAll({
    attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity',['createdAt','DESC'],'updatedAt'],
    limit: 10
  })
  .then(function(products){
    res.json(products)
  })
})
// show 10 best selling product
// router.get('/best-selling', function(req, res){
//   model.product.findAll({
//     attributes:['id','id_catalog','id_brand','name','image_url','description','price','sold_quantity','remaining_quantity','createdAt','updatedAt'],
//     limit: 10,
//   })
//   .then(function(products){
//     return model.product.decrement('sold_quantity',{by: 5})
//   })
//   .then(function(products){
//     res.json(products)
//   })
// })
// router.post('/product/store', productController.store)



/*catalog*/
router.get('/catalog', function(req, res){
  model.catalog.findAll()
  .then(function(catalogs){
    res.json(catalogs)
  })
})



/*brand*/
router.get('/brand', function(req, res){
  model.brand.findAll()
  .then(function(brands){
    res.json(brands)
  })
})
// router.post('/newbrand', brandController.newBrand);
// router.put('/brand/:id', brandController.update)
//router.delete('/brand/:id', brandController.deleteBrand)



/*order*/
router.get('/order/:id_user', function(req, res){
  model.order.findAll({
      attributes: ['id','id_user','totalprice','createdAt','updatedAt'],
      where: {
        id_user: req.params.id_user
      }
    }).then(function(orders){
      res.json(orders)
    })
})



/*orderdetail*/
router.get('/order/:id_order/orderdetail', function(req, res){
  model.orderdetail.findAll({
    attributes: ['id','id_order','id_product','name_product','price_product','quantity','total','createdAt','updatedAt'],
    where: {
      id_order: req.params.id_order
    }
  }).then(function(details){
    res.json(details)
  })
})



/*comment*/
router.get('/comment/:id_product', function(req, res){
  model.comment.findAll({
      attributes: ['id','id_user','id_product','content'],
      where: { id_product: req.params.id_product }
    }).then(function(comments){
      res.json(comments)
    })
})


module.exports = router;
