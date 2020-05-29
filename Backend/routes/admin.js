var express = require('express');
var fs = require('fs');
var router = express.Router();


router.get('/', function (req, res) {

    var html = '';
    html += "<body>";
    html += "<form action='/admin/adminpage' method='post' name='form1'>";
    html += "Användarnamn: <input type='text' name='userName'><br/>";
    html += "Lösenord: <input type='password' name='password'><br/>";
    html += "<input type='submit' value='Login'><br/>";
    html += "</form>";
    html += "</body>";
    res.send(html);
}) 

router.post('/adminpage', function (req, res) {

    console.log("du kom hit");

    var adminUserName = "test";
    var adminPassword = "1234";

    if (req.body.userName == adminUserName && req.body.password == adminPassword) 
    {
        console.log("lösenordet och användarnamnet stämmer");
        var page = '';

        fs.readFile("users.json", (err, data) => {
            if (err) throw err;
            var users = JSON.parse(data);
            console.log(users);

            page += "Alla användare: "

            users.forEach(u => {
                page += "<br/>" + u.userName;
            });

            page += "<br/>";
            page += "<br/>Lista med subscribade mailadresser: ";

            var subscribers = users.filter(a => a.subscriptionActive === true);
            console.log("subscribers",subscribers);
            page += "<br/>";
            var listOfSubscribers = [];

            subscribers.forEach(u => {
                listOfSubscribers.push(u.userEmail);
            });
            page += listOfSubscribers.join(", ").toString();
            
        

            res.send(page);
        })

    }
    else {
        console.log("Lösenordet matchar inte");
        res.sendStatus(401);

    }

});

module.exports = router;
