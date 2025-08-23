import { handleError } from "../helpers/handleError.js"
import Comment from "../models/comment.model.js"
export const addcomment = async (req, res, next) => {
    try {
        const { user, blogid, comment } = req.body
        const newComment = new Comment({
            user: user,
            blogid: blogid,
            comment: comment
        })

        await newComment.save()
        res.status(200).json({
            success: true,
            message: 'Comment submited.',
            comment: newComment
        })

    } catch (error) {
        next(handleError(500, error.message))
    }
}

// this function is to get the comments based on the particular blog id 
export const getComments = async (req, res, next) => {
    try {
        const { blogid } = req.params
        const comments = await Comment.find({ blogid }).populate('user', 'username avatar').sort({ createdAt: -1 }).lean().exec()

        res.status(200).json({
            comments
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}

// this function is to show the count of comments in singleBlogDetails page
export const commentCount = async (req, res, next) => {
    try {
        const { blogid } = req.params
        const commentCount = await Comment.countDocuments({ blogid })

        res.status(200).json({
            commentCount
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}

// this is for get all the comments that are commented on a user's all blogs and here admin can see all the blogs thorughtout the application
// but a user with role as user can only see the comments that are maked on the blogs that are created by himseelf only
export const getAllComments = async (req, res, next) => {
    try {
        const user = req.user
        let comments
        if (user.role === 'admin') {
            comments = await Comment.find().populate('blogid', 'title').populate('user', 'username')

        } else {

            comments = await Comment.find({ user: user._id }).populate('blogid', 'title').populate('user', 'username')
        }

        res.status(200).json({
            comments
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}

// this is also protected for the user 
export const deleteComment = async (req, res, next) => {
    try {
        const { commentid } = req.params
        await Comment.findByIdAndDelete(commentid)

        res.status(200).json({
            success: true,
            message: 'Data deleted'
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}