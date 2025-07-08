import multer from "multer";

// we are storing disk storage so that if the file is bigger then a lot of memory would be used if we use memory storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "file.originalname")
    }
  })
  
  const upload = multer(
        {
         storage: storage 
        }
    )