var connectDbService = (function(configURL, database) {
    var connection = database.connect(configURL);

    database.connection.on('open', function() {
        console.log('Connection initialized with Mongo.');
    });

    database.connection.on('error', function(error) {
        console.log('Error while connecting to Mongo: ' + error);
    });

    database.connection.on('close', function() {
        console.log('Closing connection with database.');
    });

    return database;
});

module.exports = connectDbService;