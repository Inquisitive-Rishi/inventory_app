const router = require('express').Router()

const title = "Catalog Page"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('layout', {title: title});
});

module.exports = router;
