const router = require("express").Router();
const Post = require("../models/Post.model");

/* GET home page */
router.get("/", (req, res, next) => {
 // res.render("index");
Post.find()
.then((posts)=>
  
  res.render("index", {posts}))
});



module.exports = router;
