var content = document.getElementById("content");

router.get('/', function(req, res, next) {

    fs.readFile('users.json', (err,data) => {
      if(err) throw err;
      var users = JSON.parse(data);
      res.send(users);

      for (var i = 0; i<users; i++)
      {
        content.insertAdjacentHTML("beforeend","<li>"+users[i]+"<li>");

      }
    })
  
  });