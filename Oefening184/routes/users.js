var router = require('express').Router();
var userRepository = require('../data/repositories/userRepository.js');

router.get('/', function(req, res, next) {
    userRepository.all(function(error, users) {
        if(!error) {
            res.render('users/index', { title : 'Users', users : users });
        }
    });
});

router.get('/new', function(req, res, next) {
    res.render('users/new', { title : 'New user' });
});

router.post('/new', function(req, res, next) {
    userRepository.add(req.body, function(error, addedUser) {
        if(!error) {
            res.redirect('/users');
        }

        else {
            if(typeof error.errors !== 'undefined') {
                res.render('users/new', { title : 'New user', errors : error.errors });
            }
            else {
                var temporaryErrors = [{ message : 'This user already exists.' }];
                res.render('users/new', { title : 'New user', errors : temporaryErrors });
            }
        }
    });
});

router.post('/edit', function(req, res, next) {
    var method = req.body.method;
    var username = req.body.username;

    switch(method) {
        case 'DELETE':
            userRepository.remove(username, function(error, result){
                if(!error) {
                    res.redirect('/users/');
                }
            });
            break;

        case 'EDIT_QUEST':
            userRepository.singleByUsername(username, function(error, user) {
                if(!error) {
                    res.render('users/edit', { title : 'Edit user', user : user});
                }
            });
            break;

        case 'EDIT_POST':
            userRepository.update(req.body, function(error, result) {
                if(!error) {
                    res.redirect('/users');
                }
                else {
                    res.render('users/edit', { title : 'Edit user', user : req.body, errors: error.errors });
                }
            });
    };


});

router.get('/:username', function(req, res, next) {
    var username = req.params.username;
    userRepository.singleByUsername(username, function(error, user) {
        if(!error) {
            res.render('users/details', { title : 'User details', user : user });
        }
    });
});

module.exports = router;