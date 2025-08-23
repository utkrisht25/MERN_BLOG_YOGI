import express from 'express';
import { addcomment, commentCount, deleteComment, getAllComments, getComments } from '../controllers/Comment.controller.js';
import { authenticate } from '../middleware/authenticate.js'

const CommentRoute = express.Router();

CommentRoute.post('/add', authenticate,  addcomment)
CommentRoute.get('/get/:blogid', getComments)
CommentRoute.get('/get-count/:blogid', commentCount)
CommentRoute.get('/get-all-comment',authenticate ,  getAllComments)
CommentRoute.delete('/delete/:commentid', authenticate ,  deleteComment)




export default CommentRoute;