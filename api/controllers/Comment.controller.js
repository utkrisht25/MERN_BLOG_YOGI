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