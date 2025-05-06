const express = require('express')
const Router = express.Router()
const fs = require('fs')
const path = require('path')

const multer = require('multer')

const Userreg=require('./Userreg/Userregcontroller')
Router.post('/register',Userreg.upload,Userreg.register)
Router.post('/login',Userreg.login)
Router.post('/viewcust',Userreg.viewcust)
Router.post('/deletecust/:_id',Userreg.deletecust)
Router.post('/viewcustone/:_id',Userreg.viewcustone)
Router.post('/updatecust/:_id',Userreg.updatecust)
//ADmin addstock

const Addstock=require('./Admin/Addstockcontroller')
Router.post('/addstock',Addstock.upload,Addstock.addstock)
Router.post('/viewfood',Addstock.viewfood)
Router.post('/viewone/:_id',Addstock.viewone)
Router.post('/deletefood/:_id',Addstock.deletefood)
Router.post('/updatefood/:_id',Addstock.updatefood)


//Orders
const Orders=require('./Order/Ordercontroller')
Router.post('/orders',Orders.orders)
Router.post('/vieworderforuser/:id',Orders.vieworderforuser)
Router.post('/deleteorder/:_id',Orders.deleteorder)
Router.post('/viewallorder',Orders.viewallorder)

module.exports = Router   