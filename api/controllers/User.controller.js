import { handleError } from "../helpers/handleError.js"
import cloudinary from "../config/cloudinary.js"
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const getUser = async (req, res , next) =>{
    try {
        const { userId } = req.params
        const user = await User.findOne({ _id: userId }).lean().exec()
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

export const updateUser = async(req, res, next) =>{
    try {
        const data = JSON.parse(req.body.data)
        const { userId } = req.params

        const user = await User.findById(userId)
        user.username = data.username
        user.email = data.email
        user.bio = data.bio


        if(data.password && data.password.length >= 8){
            const hashedPassword = bcryptjs.hashSync(data.message)
            user.password = hashedPassword
        }

        if(req.file){
            //we are uploading a image
            const uploadResult = await cloudinary.uploader.upload(
                req.file.path,
                { folder: 'Yogi_mern_blog', resource_type: 'auto' }
            ).catch((error) =>{
                next(handleError(500, error.message))
            })

            user.avatar = uploadResult.secure_url
        }
        await user.save()

        const newUser = user.toObject({ getters: true})
        delete newUser.password
        res.status(200).json({
            success: true,
            message: "Data uploaded",
            user: newUser
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}