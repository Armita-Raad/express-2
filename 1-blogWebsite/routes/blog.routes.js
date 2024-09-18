const router = require("express").Router();
const {
  getAllBlogs,
  createNewBlog,
  getOneBlog,
} = require("../controllers/blog.controllers");

/**
 * @URL: /
 * @Method: GET
 * @Status: Public
 * @Description: Get all blogs data
 */
router.get("/", getAllBlogs);

/**
 * @URL: /
 * @Method: POST
 * @Status: Public
 * @Description: Create new blogs data
 */
router.post("/compose", createNewBlog);

/**
 * @URL: /blogs/:id
 * @Method: GET
 * @Status: Public
 * @Description: Get one blog data
 */
router.get("/:id", getOneBlog);

module.exports = router;
