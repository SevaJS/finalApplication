require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookeParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./route/index")
const app = express();
const PORT = process.env.PORT;
const errorMiddle = require("./middlewares/error-middle")


app.use(cors());
app.use(cookeParser());
app.use(express.json());
app.use('/api', router);
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