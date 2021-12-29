const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogs = [
    {
        name: "Food Blog",
        img : "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        author : "Joseph Gonsalez",
        desc : "This Dorito casserole recipe is easy to make and definitely a family favorite. My kids think it’s hilarious that we’re eating Doritos for dinner! Enjoy it with some mango salsa appetizer and pineapple ice cream for dessert."
    },
    {
        name: "Travel Blog",
        img : "https://www.theblondeabroad.com/wp-content/uploads/2021/02/Travel-Bucket-List-2021.jpg",
        author: "Kiersten",
        desc: "If you’ve never been on a solo trip before, make this your year. It doesn’t matter where you go, just go further than you’ve ever been on your own before. Learning to simply enjoy your own company is truly one of the best things you can do for yourself. And, that doesn’t have to mean crossing the globe solo. Work your way up. Go to a new cafe on your own and just enjoy the peace and quiet. Geek out at a gallery or watch a movie that only you want to see. Treat yourself to a weekend away in the next town over."
    },
    {
        name: "Fitness Blog",
        img : "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Tyler Nix",
        desc: "Stop Making Excuses. You don’t have time, you’re too tired, you got invited to dinner with friends, etc., etc. There are a million reasons we can all come up with to NOT fit exercise into our day. But the reality is that a 1-hour workout is 4% of your day. Of course, there will be days when you simply can’t make it, but Taco Tuesday at your local Mexican joint every week shouldn’t be one of them (ok maybe every once in awhile – moderation is key)."
    },
    {
        name: "Fashion Blog",
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=362&q=80",
        author: "Dom Hill",
        desc: "What’s the perfect “post” pandemic summer vibe? The “hot girl” style doesn’t work for everyone. More user-friendly is spring 2021’s winning oversized look, which literally gives you space to ease back into spending more time outdoors and in public settings, comfortably. This maximized and quite stylish aesthetic is an easy and chic way to make your summer debut IRL."
    },
    {
        name: "Beauty Blog",
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGJlYXV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Jazmin",
        desc: "With a WFH schedule, our skincare regimen has shifted. While we all are trying to fix our skincare schedules, it's time to give a try to an overnight skincare regimen to up our beauty game. Having an overnight skincare routine doesn't need a lot of effort, all you need is the right kind of products and beginning with a face gel is a great thing to get a natural glow."  
    }
    
]

const seedDB = async ()=>{
    await Blog.insertMany(blogs);
    console.log("DB seeded");
}

module.exports = seedDB;