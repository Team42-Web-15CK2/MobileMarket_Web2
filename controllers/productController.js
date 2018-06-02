var model = require('../models');

async function showDetail(req, res) {
  let products
  try{
    products = await model.product.findAll({
    attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
    where: {
      id: req.params.id
    }
    })
  } catch(e){
    return res.sendStatus(500)
  }
  return (res.json(products))
}

// async function showNew(req, res) {
//   let products
//   try{
//     products = await model.product.findAll({
//     attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
//     where: {
//       id_catalog: req.params.id_catalog,
//       id_brand: req.params.id_brand
//     }
//     })
//   } catch(e){
//     return res.sendStatus(500)
//   }
//   return (res.json(products))
// }

// async function showBestSolding(req, res) {
//   let products
//   try{
//     products = await model.product.findAll({
//     attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
//     where: {
//       id: req.params.id
//     }
//     })
//   } catch(e){
//     return res.sendStatus(500)
//   }
//   return (res.json(products))
// }

async function showByCatalog(req, res) {
  let products
  try{
    products = await model.product.findAll({
    attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
    where: {
      id_catalog: req.params.id_catalog
    }
    })
  } catch(e){
    return res.sendStatus(500)
  }
  return (res.json(products))
}

async function showByBrand(req, res) {
  let products
  try{
    products = await model.product.findAll({
    attributes:['id','name','image_url','description','price','createdAt','updatedAt'],
    where: {
      id_brand: req.params.id_brand
    }
    })
  } catch(e){
    return res.sendStatus(500)
  }
  return (res.json(products))
}

module.exports = {
  showDetail: showDetail,
  // showNew: showNew,
  // showBestSolding: showBestSolding,
  showByCatalog: showByCatalog,
  showByBrand: showByBrand
}

