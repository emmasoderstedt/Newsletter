var express = require('express');
var fs = require('fs');
var router = express.Router();


router.get('/', function (req, res) {

    //skriver ut inloggningsformulär
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

    //hårdkodade inloggningsuppgifter för admin
    var adminUserName = "test";
    var adminPassword = "1234";

    //kontrollerar att inloggninsuppgifterna stämmer, skriver då ut adminsidan
    if (req.body.userName == adminUserName && req.body.password == adminPassword) 
    {
        console.log("lösenordet och användarnamnet stämmer");
        var page = '';

        fs.readFile("users.json", (err, data) => {
            if (err) throw err;
            var users = JSON.parse(data);
            console.log(users);

            //skriver ut alla användarnamn
            page += "Alla användare: "
            users.forEach(u => {
                page += "<br/>" + u.userName;
            });
            page += "<br/>";

            //skriver ut lista med subscribade mailadresser
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
