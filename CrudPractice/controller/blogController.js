const blogService = require("../service/blogService");

exports.getAllBlog = async (req, res) => {
  try {
    const blog = await blogService.getAllBlogs();
    res.status(200).json({ data: blog, message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    res.status(200).json({ data: blog, message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(200).json({ data: blog, message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.status(200).json({ data: blog, message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    res.status(200).json({ data: blog, message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
