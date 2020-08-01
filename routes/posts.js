const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//import PostSchema
const Post = require("../models/Post");

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

router.get("/specyfic", (req, res) => {
  res.send("test site!!!");
});

//SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  //save post to DB
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    // .then((data) => {
    //   res.json(data);
    // })
    // .catch((err) => {
    //   res.json({ message: err });
    // });
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECYFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update post
router.patch('/:postId', (req, res) => {
    try{
    const updatePost =  Post.updateOne(
        {_id: req.params.postId }, 
        { $set: { title: req.body.title }}
        );
    res.json(updatePost);
    }catch(err){
        res.json({ message: err });
    }
});

module.exports = router;
