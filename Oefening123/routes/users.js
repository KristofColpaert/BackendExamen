var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
var users = require('../data/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/index', { title : 'Users', users : users });
});

router.get('/new', function(req, res, next) {
    res.render('users/new', {title : 'New user'});
});

router.post('/new', function(req, res, next) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        var newUser = {
            "userName" : fields.userName,
            "firstName" : fields.firstName,
            "lastName" : fields.lastName,
            "profession" : fields.profession
        };

        if(typeof users[newUser.userName] === 'undefined') {
            users[newUser.userName] = newUser;

            var usersData = JSON.stringify(users);
            fs.writeFile(process.cwd() + '/data/users.json', usersData, function(error, result) {
                if(!error) {
                    res.redirect('/users/' + newUser.userName);
                }

                else {
                    console.log(error);
                    res.redirect('/');
                }
            });
        }

        else {
            res.redirect('/');
        }
    });
});

router.post('/delete', function(req, res, next) {
    if(typeof users[req.body.userName] !== 'undefined') {
        delete users[req.body.userName];

        var usersData = JSON.stringify(users);
        fs.writeFile(process.cwd() + '/data/users.json', usersData, function(error, result) {
            if(!error) {
                res.redirect('/users/');
            }

            else {
                console.log(error);
                res.redirect('/users/');
            }
        });
    }
});

router.get('/:userName', function(req, res, next) {
    var userName = req.params.userName;
    var user = users[userName];
    res.render('users/details', { title : 'User detail', user: user });
});

module.exports = router;
