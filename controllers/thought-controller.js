const { Thought, User } = require("../models");

const thoughtController = {
  // gets all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get single thought
  getThought({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // add thought to user
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // update a thought
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this ID." });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },
  // delete a thought
  deleteThought({ params }, res) {
    Thought.findOneAndRemove({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this ID." });
          return;
        }

        //   remove thought from user
        return User.findOneAndUpdate(
          { thoughts: params.thoughtId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({
              message: "Thought deleted but no user found with this ID.",
            });
          return;
        }
        res.json({ message: "Thought deleted." });
      })
      .catch((err) => res.status(500).json(err));
  },
  // createReaction(),
  // deleteReaction(),
  // add reply to comment
  // addReply({ params, body }, res) {
  //   Comment.findOneAndUpdate(
  //     { _id: params.commentId },
  //     { $push: { replies: body } },
  //     { new: true, runValidators: true }
  //   )
  //     .then((dbThoughtData) => {
  //       if (!dbThoughtData) {
  //         res.status(404).json({ message: "No Thought found with this id!" });
  //         return;
  //       }
  //       res.json(dbThoughtData);
  //     })
  //     .catch((err) => res.json(err));
  // },
};

module.exports = thoughtController;
