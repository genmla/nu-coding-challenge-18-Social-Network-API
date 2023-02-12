const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId')

module.exports = router;