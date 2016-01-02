var progressCalculator = (function() {
    function show(number) {
        setTimeout(function() {
            console.log(number);
        });
    }

    return show;
})();

for(var i = 0; i < 5; i++) {
    progressCalculator(i);
}

/*
 * Synchrone for stuurt data door naar closure.
 * Closure behoudt state en onthoudt dus de waarden die hij binnenkrijgt.
 */