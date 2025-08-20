import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req,file,cb){
        cb(null, file.originalname)
    }
})

function filefilter(req,res,cb) {
    const allowedFile = ['image/png', 'image/jpeg', 'image/jpg' , 'image/jpeg' , 'image/webp'];
    if(!allowedFile.includes(file.mimetype)){
        cb(new Error('Only images are allowed.'), false)
    }else{
        cb(null, true)
    }
}

const upload = multer({storage: storage,  fileFilter: filefilter})

export default upload;