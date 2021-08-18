const express = require("express");
const router = express.Router();

const Users = require("../models").Users;
const Team = require("../models").Team;

// Done - Index route
router.get("/", (req, res) => {
  Users.findAll().then((user) => {
    res.render("users/index.ejs", {
      users: user,
    });
  });
});

// Done - Signup GET route
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// Done - Signup POST route
router.post("/", (req, res) => {
  Users.create(req.body).then((newUser) => {
    res.redirect("/users");
  });
});

// Done - Login GET route
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// Login POST route
router.post("/login", (req, res) => {
  Users.findOne({
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

// Done - Profile GET route
router.get("/profile/:id", (req, res) => {
  Users.findByPk(req.params.id, {
    include: [
      {
        model: Team,
        attributes: ["name"],
      },
    ],
  }).then((user) => {
    Team.findAll().then((allTeams) => {
      res.render("users/profile.ejs", {
        users: user,
        teams: allTeams,
      });
    });
  });
});

// Done - Profile Edit PUT route
router.put("/profile/:id", (req, res) => {
  Users.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((user) => {
    res.redirect("/users");
  });
});

// Done - Profile Delete route
router.delete("/:id", (req, res) => {
  Users.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/users");
  });
});

module.exports = router;
