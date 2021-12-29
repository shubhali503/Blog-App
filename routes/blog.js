const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');

//display all the blogs
router.get('/blogs', async(req,res)=>{
    const blogs = await Blog.find({});
    res.render('blogs/index',{blogs});
})

//get the form for a new blog
router.get('/blogs/new', (req,res)=>{
    res.render('blogs/new');
})

//create new blog
router.post('/blogs', async(req,res)=>{

    await Blog.create(req.body.blog);
    res.redirect('/blogs');
})

//show a particular blog
router.get('/blogs/:id', async(req,res)=>{

    const blog = await Blog.findById(req.params.id).populate('reviews');
    console.log(blog);
    res.render('blogs/show', {blog});
})

//get the edit form
router.get('/blogs/:id/edit', async(req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('blogs/edit', {blog});
})

//update a blog
router.patch('/blogs/:id', async(req,res)=>{
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    res.redirect(`/blogs/${req.params.id}`);
})

//delete a blog
router.delete('/blogs/:id', async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/blogs');
})

//creating a new comment on a blog
router.post('/blogs/:id/review', async(req,res)=>{

    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body);

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
})


module.exports = router;