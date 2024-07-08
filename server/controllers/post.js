const Post = require('../models/Post.js');

async function getPosts(limit = 3) {
  const [posts, count] = await Promise.all([
    Post.find().limit(limit),
    Post.countDocuments(),
  ]);

  return { posts, count };
}

async function addPost(postData) {
  const post = await Post.create(postData);

  return post.populate('comments');
}

async function getPost(postId) {
  return Post.findById(postId).populate({
    path: 'comments',
    populate: 'author',
  });
}

module.exports = { addPost, getPosts, getPost };
