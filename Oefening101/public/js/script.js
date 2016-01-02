$(document).ready(function(){
    $('#form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url : 'http://localhost:8080/search',
            dataType : 'jsonp',
            jsonpCallback : 'jsonFlickrFeed',
            data : $('#form').serialize(),
            success: function(data) {
                $('#root').empty();
                data.items.forEach(function(item) {
                    $('#root').append(item.description);
                });
            },
            error : function(error, error1, error2) {
                console.log(error);
                console.log(error1);
                console.log(error2);
            }
        });

        return false;
    });
});