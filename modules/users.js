/**
 * Created by shijin on 2015/11/15.
 */

var mongooseDb = require("./mongooseDb");
function User(user) {
    this.username = user.username;
    this.password = user.password;


}
module.exports = User;
var UserSchema = new mongooseDb.Schema({
    username: String,
    password: String,
});
var UserModel = mongooseDb.model("users", UserSchema);
User.prototype.save = function (callback) {
    var user = {
        username: this.username,
        password: this.password
    };
    var  UserEntity=new UserModel(user);
    UserEntity.save(function (err) {
        callback(err);
    })
};

User.getUser= function (username, callback) {

    UserModel.findOne({username:username},function (err, user) {
        callback(err, user);
    })
};