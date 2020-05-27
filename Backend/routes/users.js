var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('users.json', (err,data) => {
    if(err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  })

});

router.post('/', function(req, res, next) {

fs.readFile('users.json', (err, data) => {
  if(err)
  {
    throw err;
  }
        
  var users = JSON.parse(data);

  newuser =    
  {
    "id": req.body.id,
    "userName": req.body.userName,
    "userEmail": req.body.userEmail
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


module.exports = router;
