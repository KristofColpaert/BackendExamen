for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    });
}

/*
 * Fout hier: setTimeout zet op de event loop, maar de for werkt synchroon.
 * Gevolg: 5 keer 5.
 */