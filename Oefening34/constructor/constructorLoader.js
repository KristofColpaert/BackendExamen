var ConstructorLoader = function() {
    //Private
    var self = this;

    //Public
    this.delay = 1000;

    //Functions
    this.loadAsync = function(element, delay, callback) {
        setTimeout(function() {
            callback(null, 'Element ' + element + ' loaded.');
        }, delay)
    }
};

ConstructorLoader.prototype = {
    loadArrayAsync : function(fromArray, callback) {
        var self = this;
        var start = new Date().getTime();
        var toArray = [];

        fromArray.forEach(function(element) {
            self.loadAsync(element, self.delay, function(error, result) {
                if(!error) {
                    toArray.push(result);

                    if(toArray.length === fromArray.length){
                        var end = new Date().getTime();
                        var time = end - start;
                        callback(null, { toArray : toArray, time : time });
                    }
                }
            });
        });
    }
};

module.exports = ConstructorLoader;