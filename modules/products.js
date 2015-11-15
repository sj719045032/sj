/**
 * Created by shijin on 2015/11/14.
 */
var ObjectID = require('mongodb').ObjectID;
var mongooseDb = require("./mongooseDb");
function Product(product) {
    this.name = product.name;
    this.description = product.description;
    this.category = product.category;
    this.price = product.price;

}
module.exports = Product;
var ProductSchema = new mongooseDb.Schema({
    name: String,
    description: String,
    category: String,
    price: Number
});
var ProductModel = mongooseDb.model("products", ProductSchema);
Product.prototype.save = function (callback) {
    var product = {
        name: this.name,
        description: this.description,
        category: this.category,
        price: this.price
    };
  var  ProductEntity=new ProductModel(product);
    ProductEntity.save(function (err,product) {

        callback(err,product);
    })
};

Product.getSome= function (page, number, callback) {
    var thePage=page?page:1;
    var theNumber=number?number:10;
    ProductModel.find().sort({time: -1}).limit(theNumber).skip((thePage - 1) * theNumber).exec(function (err, products) {
        callback(err,products);
    })
};

Product.delete= function (id,callback) {

    var _id=new ObjectID(id);
    console.log("hehe");
    ProductModel.remove({_id:_id}, function (err) {
        callback(err);
    });
};

Product.update= function (id,product,callback) {
    var _id=new ObjectID(id);
    ProductModel.update({_id:_id},{$set:product}, function (err) {
        callback(err);
    });
};
