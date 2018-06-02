var model = require('../models');

async function index(req, res) {
  let catalogs
  try{
    catalogs = await model.catalog.findAll()
  } catch(e){
    return res.sendStatus(500)
  }
  return (res.json(catalogs))
}

async function indexProduct(req, res) {
  let products
  try{
    products = await model.product.findAll({
    attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
    where: {
      id_catalog: req.params.id
    }
    })
  } catch(e){
    return res.sendStatus(500)
  }
  return (res.json(products))
}

module.exports = {
  index: index,
  indexProduct: indexProduct
}

