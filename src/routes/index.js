const router = require('express').Router();



// GET all Tasks
router.get('/', async (req, res) => {
  res.json({status: 'api works'});
});



module.exports = router;