const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//import PostSchema
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try{
        const posts = await Post.find();
        res.json(posts);
  }catch{
      res.json({message: err});
  }
});

router.get("/specyfic", (req, res) => {
  res.send("test site!!!");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  //save post to DB
  try{
  const savedPost = await post.save()
  res.json(savedPost);
    // .then((data) => {
    //   res.json(data);
    // })
    // .catch((err) => {
    //   res.json({ message: err });
    // });
  }catch(err){
      res.json({message: err})
  }
});

module.exports = router;
