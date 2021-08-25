const express = require("express");
const router = express.Router();

const User = require("../models").User;
const Team = require("../models").Team;
const Pokemon = require("../models").Pokemon;

// Index route
router.get("/", (req, res) => {
  User.findAll().then((user) => {
    res.render("users/index.ejs", {
      users: user,
    });
  });
});

// Signup GET route
router.get("/signup", (req, res) => {
  res.render("/signup.ejs");
});

// Signup POST route
router.post("/", (req, res) => {
  User.create(req.body).then((newUser) => {
    res.redirect("/users");
  });
});

// Login GET route
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// Login POST route
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
    .then((loggedInPlayer) => {
      res.redirect(`/users/profile/${loggedInPlayer.id}`);
    })
    .catch((err) => {
      res.redirect("/users");
    });
});

// Profile GET route
router.get("/profile/:id", (req, res) => {
  User.findByPk(req.params.id, {
    include: [{ model: Team }, { model: Pokemon }],
  }).then((singleUser) => {
    Team.findAll().then((allTeams) => {
      console.log(singleUser);
      res.render("users/profile.ejs", {
        user: singleUser,
        teams: allTeams,
      });
    });
  });
});

// Profile Edit PUT route
router.put("/profile/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((user) => {
    res.redirect("/users");
  });
});

// Profile Delete route
router.delete("profile/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/users");
  });
});

module.exports = router;
