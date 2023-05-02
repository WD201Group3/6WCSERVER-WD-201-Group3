const express = require('express'); 
const clientRoute = express.Router(); 
// model
let ClientModel = require('../models/Client');
clientRoute.route('/create-client').post((req, res, next) => {
  ClientModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
clientRoute.route('/').get((req, res, next) => {
  ClientModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 clientRoute.route('/edit-client/:id').get((req, res, next) => {
  ClientModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
clientRoute.route('/update-client/:id').put((req, res, next) => {
  ClientModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Appointment successfully updated!')
    }
  })
})
// Delete
clientRoute.route('/delete-client/:id').delete((req, res, next) => {
  ClientModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = clientRoute;