var express = require("express");
var router = express.Router();
const user = require("../sql/user");
router.get("/", function (req, res, next) {
  res.render("login");
});
router.post("/in", (req, res, next) => {
  console.log("提交登录");
  const obj = req.body;
  console.log(obj);
  user.findOne({ username: obj.username, pwd: obj.pwd }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      console.log(data, "登录成功");
      res.cookie("islogin","yes");
      res.redirect("/");
    } else {
      console.log(data, "登录失败");
      res.redirect("/login");
    }
  });
});
module.exports = router;
