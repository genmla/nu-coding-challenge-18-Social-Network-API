const { Thought, User } = require('../models');

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                const thoughtObj = {
                    thoughts,
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //get thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then(async (thoughts) => {
                const thoughtObj = {
                    thoughts
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })
    },
    //post a thought
    postThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'thought posted but could not assign to userId' })
                    : res.json({ message: 'thought posted for this userId!' })
            )
            .catch((err) => {
                console.log(err);
            });
    },
    //update a thought by _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought found with that id!'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //delete a thought by _id
    deleteThought(req, res) {
        Thought.findByIdAndDelete({ _id: req.params.thoughtId})
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought with this Id!'})
            : res.json({ message: 'Thought deleted!'})
        )
        .catch((err) => res.status(500).json(err));
    },
    //
}