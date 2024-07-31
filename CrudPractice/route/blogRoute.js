const express = require("express");
const {
  getAllBlog,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");

const router = express.Router();

router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
