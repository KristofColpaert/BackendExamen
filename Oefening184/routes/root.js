var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('root', { title : 'Home' })
});

module.exports = router;