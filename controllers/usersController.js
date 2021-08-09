const express = require("express");
const router = express.Router();

const users = require("../models/users");

// Index
router.get("/", (req, res) => {
  res.render("users/index.ejs", {
    users: users,
  });
});

// Signup GET route
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// Signup POST route
router.post("/", (req, res) => {
  users.push(req.body);
  let index = users.length - 1;
  res.redirect(`/users/profile/${index}`);
});

// Login GET route
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// Login POST route
router.post("/login", (req, res) => {
  let index = users.findIndex(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );

  res.redirect(`/users/profile/${index}`);
});

// Profile GET route
router.get("/profile/:index", (req, res) => {
  res.render("users/profile.ejs", {
    user: users[req.params.index],
    index: req.params.index,
  });
});

// Profile Edit GET route
router.get("users/:index/edit", (req, res) => {
  res.render("/users/edit.ejs", {
    user: users[req.params.index],
    index: req.params.index,
  });
});

// Profile Edit PUT route
router.put("/profile/:index", (req, res) => {
  users[req.params.index] = req.body;
  res.redirect(`/users/profile/${req.params.index}`);
});

// Profile Delete route
router.delete("/:index", (req, res) => {
  users.splice(req.params.index, 1);
  res.redirect("/users");
});

module.exports = router;
