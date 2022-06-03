const router = require("express").Router();
// const {
//   getAllThoughts,
//   getThought,
//   addThought,
//   removeThought,
// } = require("../../controllers/thought-controller");
// // POST callback
// router.route("/:userId").post(addThought);
// // DELETE callback for removing thought
// router.route("/:userId/:thoughtId").delete(removeThought);
// PUT callback to make reply
// router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);
// // DELETE callback for removing reply
// router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);
module.exports = router;

// /api/thoughts
// GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value
