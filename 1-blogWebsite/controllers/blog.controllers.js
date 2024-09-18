const fs = require("fs/promises");
const { v4: uuid } = require("uuid");

const getAllBlogs = async (req, res) => {
  try {
    const data = await fs.readFile("./db/data.json", "utf8");
    const dataObject = JSON.parse(data);
    res.status(200).json(dataObject.posts);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const createNewBlog = async (req, res) => {
  const { title, description } = req.body;
  try {
    const data = await fs.readFile("./db/data.json");
    const dataObject = JSON.parse(data);
    const newBlog = {
      id: uuid(),
      title,
      description,
    };
    dataObject.posts.push(newBlog);

    await fs.writeFile("./db/data.json", JSON.stringify(dataObject));
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const getOneBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const data = fs.readFile("./db/data.json", "utf-8");
    const dataObject = JSON.parse(data);
    const blog = dataObject.find((item) => item.id == id);
    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

module.exports = { getAllBlogs, createNewBlog,getOneBlog };
