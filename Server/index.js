require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookeParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./route/index")
const fileUpload = require("express-fileupload")
const app = express();
const PORT = process.env.PORT;
const errorMiddle = require("./middlewares/error-middle")


app.use(cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    }
));
app.use(cookeParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/api', router);
app.use(fileUpload({}));
app.use(errorMiddle);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);

    }

}
start();