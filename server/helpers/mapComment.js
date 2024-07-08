module.exports = (comment) => ({
  id: comment._id,
  author: comment.author.email,
  content: comment.content,
  publishedAt: new Date(comment.createdAt).toLocaleDateString(),
});
