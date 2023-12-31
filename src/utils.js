 multer from 'multer'

const simporttorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './src/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

export const uploader = multer({storage})