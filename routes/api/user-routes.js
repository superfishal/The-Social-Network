const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/user-controller");
// GET and POST routes to get all Users and create new User
router.route("/").get(getAllUsers).post(createUser);
// GET, PUT, and DELETE User routes by /:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
// POST and DELETE route to add to user's friend list
router
  .route("/api/users/:userId/friends/:friendId")
  .post(addUserFriend)
  .delete(deleteUserFriend);
module.exports = router;
