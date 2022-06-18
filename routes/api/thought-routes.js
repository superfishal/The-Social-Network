const router = require("express").Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");
// GET and POST callback to find all Thoughts /api/thoughts
router.route("/").get(getThoughts).post(createThought);
// DELETE, UPDATE, and GET thought by Id /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);
// POST reaction to thought /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);
// DELETE reaction by Id /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
module.exports = router;
