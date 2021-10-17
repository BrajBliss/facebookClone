const router = require('express').Router();

router.get('/', async (req, res) => {
	res.send('user route');
});

module.exports = router;
