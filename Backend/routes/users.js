var express = require('express');
var fs = require('fs');
var router = express.Router();

//List of users, behövs ej?
// router.get('/', function(req, res, next) {

//   fs.readFile('users.json', (err,data) => {
//     if(err) throw err;
//     var users = JSON.parse(data);
//     res.send(users);
//   })

// });

//Post new user
router.post('/', function(req, res, next) {

  fs.readFile('users.json', (err, data) => {
    if(err)
    {
      throw err;
    }

    if(req.body.userName === undefined || req.body.password === undefined || req.body.userEmail === undefined || req.body.subscriptionActive === undefined)
    {
      res.status(400);
      res.send("Saknas uppgifter");
      return;
    } 
          
    var users = JSON.parse(data);
    

    newuser =    
    {
      "userName": req.body.userName,
      "password": req.body.password,
      "userEmail": req.body.userEmail,
      "subscriptionActive": req.body.subscriptionActive
    }

    users.push(newuser);

    var saveUsers= JSON.stringify(users, null, 2);

    fs.writeFile('users.json', saveUsers, (err, data) => 
    {
      if(err) 
      {
        throw err;
      }
      
    });
    
    res.send("Ny användare sparad!");
  })

});

//Change subscriptionstatus
router.put('/:userId', function(req, res, next) {

  fs.readFile('users.json', (err, data) => {
    if(err)
    {
      throw err;
    }
          
    var users = JSON.parse(data);

    users[req.params.userId].subscriptionActive = req.body.subscriptionActive;

    var saveUsers= JSON.stringify(users, null, 2);

    fs.writeFile('users.json', saveUsers, (err, data) => 
    {
      if(err) 
      {
        throw err;
      }

  });

  res.send("användare ändrad!");
  })

});


//verifiera användare 
router.post('/authorize', function(req, res) {
  fs.readFile('users.json', (err, data) => {

    if(err)
    {
      throw err;
    }

    var users = JSON.parse(data);
    var authorized = false;
    
    for(var i = 0; i<users.length; i++)
    {
      if (users[i].userName == req.body.userName && users[i].password == req.body.password)
      {
        authorized = true;
      }
    }

    res.send(authorized);

  })
})


module.exports = router;
