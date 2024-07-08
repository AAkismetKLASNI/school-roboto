const express = require('express');
const { addPost, getPosts, getPost } = require('../controllers/post');
const { addComment, deleteComment } = require('../controllers/comment');
const mapPost = require('../helpers/mapPost');
const mapComment = require('../helpers/mapComment');
const authenficated = require('../middlewares/authenficated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const { posts, count } = await getPosts(req.query.limit);

  res.send({ posts: posts.map(mapPost), count });
});

router.post('/', authenficated, async (req, res) => {
  try {
    const post = await addPost({
      author: res.user.id,
      title: req.body.title,
      content: req.body.content,
      image: req.body.imageUrl,
    });

    res.send({ post: mapPost(post) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const post = await getPost(req.params.id);

  res.send({ post: mapPost(post) });
});

router.post('/:id/comments', authenficated, async (req, res) => {
  try {
    const comment = await addComment(req.params.id, {
      author: res.user.id,
      content: req.body.content,
    });

    res.send({ comment: mapComment(comment) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.delete(
  '/:postId/comments/:commentId',
  authenficated,
  hasRole([ROLES.TEACHER]),
  async (req, res) => {
    try {
      await deleteComment(req.params.postId, req.params.commentId);

      res.send({ error: null });
    } catch (error) {
      res.send({ error: error.message });
    }
  }
);

module.exports = router;
