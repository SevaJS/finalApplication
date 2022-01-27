const multer = require("multer")
const ApiError = require("../exceptions/api-errors")

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'static/')

    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const types = ["image/png", "image/jpeg", "image/jpg"];
const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})