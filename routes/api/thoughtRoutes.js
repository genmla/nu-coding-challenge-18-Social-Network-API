const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThought,
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put()
    .delete()

module.exports = router;