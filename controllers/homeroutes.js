const router = require('express').Router();
const {User, Post} = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all post and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

    const post = postData.map((posts) => posts.get({ plain: true }));
//  passes into handlebars
    res.render('homepage', { 
      post, 
      logged_in: req.session.logged_in 
    });
    // res.send(post)
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
