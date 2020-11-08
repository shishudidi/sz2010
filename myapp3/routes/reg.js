var express = require("express");
var router = express.Router();
const user = require("../sql/user");
router.get("/", function (req, res, next) {
  res.render("reg");
});
router.post("/in", (req, res, next) => {
  console.log("提交注册");
  let obj = req.body;
  console.log(obj);
  user.findOne({ username: obj.username }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      console.log(data, "账号已存在");
      res.redirect("/reg");
    } else {
      console.log("注册成功");
      user.insertMany(obj,(err,data)=>{
        if(err) {
          console.log(err)
        } 
        res.redirect("/login");
   })
    }
  });
});
module.exports = router;
