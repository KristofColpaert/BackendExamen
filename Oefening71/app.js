var loadUserModule = require('./loadUserModule.js');

var inputs = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

loadUserModule.loadUsersPromise(inputs)
    .then(function(response) {
        console.log(response);
        return response;
    })
    .then(function(response) {
        var array = JSON.stringify(response);
        console.log(array);
    })
    .catch(function(error) {
        console.log(error);
    });