var express = require('express');
var fs = require('fs');
var cryptoJS = require('crypto-js');
var router = express.Router();
var saltKey = "pappamysjakrnaefsnafesifjalosf";
var cors = require('cors');

router.use(cors())

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

    //krypterar lösenord
    var cryptedPassword = cryptoJS.AES.encrypt(req.body.password, saltKey).toString();

    newuser =    
    {
      "userName": req.body.userName,
      "password": cryptedPassword,
      "userEmail": req.body.userEmail,
      "subscriptionActive": req.body.subscriptionActive
    }

    //lägger till ny användare och skriver över med den nya lista
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

    //användarens subsciptionstatus sätts till den medskickade statusen 
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


//authorisera användare för login
router.post('/authorize', function(req, res) {
  fs.readFile('users.json', (err, data) => {

    if(err)
    {
      throw err;
    }

    var users = JSON.parse(data);
    var authorized = false;
    var userId;
    var subscription;
    
    for(var i = 0; i<users.length; i++)
    {
      //checkar matchande användarnamn om de har rätt lösenord
      if (users[i].userName == req.body.userName)
      {
        //avkrypterar lösenord och jämför
        var decryptedPassord = cryptoJS.AES.decrypt(users[i].password, saltKey).toString(cryptoJS.enc.Utf8);
        if(decryptedPassord == req.body.password)
        {
          subscription = users[i].subscriptionActive;
          userId =i;
          authorized = true;
        }
      }
    
    }

    res.send({authorized, userId, subscription});
    

  })
})


module.exports = router;
