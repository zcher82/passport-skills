var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var skill = req.body;
  User.findById(id, function (err, user) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    user.skills.push(skill);
    user.save(function (err) {
      if (err) {
        res.sendStatus(500);
        return
      }
      res.sendStatus(204);
    });
  });

});

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in');
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // res.sendFile(path.join(__dirname, '../public/views/index.html'));
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.put('/skill')


module.exports = router;
