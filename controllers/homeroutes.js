const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/:id", async (req, res) => {
  const postData = await Post.findByPk(req.params.id);

  const post = postData.get({ plain: true });

  res.render("homepage");
});

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({});

    const post = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      post,
    });
    // res.send(post)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
