const { default: mongoose } = require('mongoose');
const mapComment = require('./mapComment');

module.exports = (post) => ({
  id: post._id,
  title: post.title,
  imageUrl: post.image,
  content: post.content,
  comments: post.comments.map((comment) =>
    mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
  ),
  publishedAt: new Date(post.createdAt).toLocaleDateString(),
});
