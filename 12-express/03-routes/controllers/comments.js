const getCommentsHandler = (req, res) => {
  res.send('Get comments route');
};

const getSingleCommentHandler = (req, res) => {
  console.log(req.params);
  res.send(`Get comment route. CommentId: ${req.params.commentId}`);
};

const postCommentsHandler = (req, res) => {
  res.send('Post comment route');
};

const deleteSingleCommentHandler = (req, res) => {
  console.log(req.params);
  res.send(`Delete comment route. CommentId: ${req.params.commentId}`);
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
};
