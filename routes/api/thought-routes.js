const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  addThought,
  updateThought,
  deleteThought,
  //   createReaction,
  //   deleteReaction,
} = require("../../controllers/thought-controller");
// GET and POST callback to find all Thoughts /api/thoughts
router.route("/").get(getAllThoughts).post(addThought);
// DELETE, UPDATE, and GET thought by Id /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .post(updateThought)
  .delete(deleteThought);
// POST route to create a Reaction /api/thoughts/:thoughtId/reactions
// router.route("/:thoughtId/reactions").post(createReaction);
// DELETE route to remove a Reaction /api/thoughts/:thoughtId/reactions/:reactionId
// router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
module.exports = router;
