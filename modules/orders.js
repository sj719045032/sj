/**
 * Created by shijin on 2015/11/15.
 */
var mongooseDb=require("./mongooseDb");
function Order(order){
    this.name=order.name;
    this.street=order.street;
    this.city = order.city;
    this.state=order.state;
    this.zip=order.zip;
    this.country=order.country;
    this.giftwrap=order.giftwrap;
    this.products = order.products
}

module.exports=Order;
var OrderSchema=new mongooseDb.Schema({
    name:String,
    street:String,
    city:String,
    state:String,
    zip:String,
    country:String,
    giftwrap:Boolean,
    products:Array
});

var OrderModel=mongooseDb.model("orders",OrderSchema);
Order.prototype.save= function (callback) {
    var order={
        name:this.name,
        street:this.street,
        city:this.city,
        state:this.state,
        zip:this.zip,
        country:this.country,
        giftwrap:this.giftwrap,
        products:this.products
    };

    var orderEntity=new OrderModel(order);
    orderEntity.save(function (err,data) {
        callback(err,data);
    });
};

Order.getSome= function (page, number, callback) {
    var thePage=page?page:1;
    var theNumber=number?number:10;
    OrderModel.find().sort({time: -1}).limit(theNumber).skip((thePage - 1) * theNumber).exec(function (err, orders) {
        callback(err, orders);
    })
};