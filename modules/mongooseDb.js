/**
 * Created by shijin on 2015/11/14.
 */
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/sportsstore");
module.exports=mongoose;