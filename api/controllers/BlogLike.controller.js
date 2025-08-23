import { handleError } from "../helpers/handleError.js"
import BlogLike from "../models/bloglike.model.js"

// this one is for save the like or delete the like of the user
export const doLike = async (req, res, next) => {
    try {
        const { user, blogid } = req.body
        let like
        like = await BlogLike.findOne({ user, blogid })
        if (!like) {
            const saveLike = new BlogLike({
                user, blogid
            })
            like = await saveLike.save()
        } else {
            await BlogLike.findByIdAndDelete(like._id)
        }

        const likecount = await BlogLike.countDocuments({ blogid })

        res.status(200).json({
            likecount
        })

    } catch (error) {
        next(handleError(500, error.message))
    }
}


// this one is for get the like of the user based on is the user liked it or not  to change the color of like icon in UI
export const likeCount = async (req, res, next) => {
    try {
        const { blogid, userid } = req.params
        const likecount = await BlogLike.countDocuments({ blogid })

        let isUserliked = false
        if (userid) {
            const getuserlike = await BlogLike.countDocuments({ blogid, user: userid })
            if (getuserlike > 0) {
                isUserliked = true
            }
        }


        res.status(200).json({
            likecount,
            isUserliked
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}