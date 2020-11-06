var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;
var URI = 'mongodb://localhost:27017/ATNshop?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
var connect = require('mongoose').connect;
connect(URI, {useNewUrlParser: true});

const ProductSchema = new Schema({
    _id:String,
    ID: String,
    Product: String,
    Price: String,
    Description: String,
    img: String
});

const Product = Model('Product', ProductSchema, 'product');

module.exports.Product = Product;