import { handleError } from "../helpers/handleError.js"
import User from "../models/user.model.js"

export const getUser = async (req, res , next) =>{
    try {
        const { userId } = req.params
        const user = User.findOne({ _id: userId })
        if(!user){
            next(handleError(404, "User not found!!"))
        }
        res.status(200).json({
            success:true,
            message: "User data found",
            user
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}