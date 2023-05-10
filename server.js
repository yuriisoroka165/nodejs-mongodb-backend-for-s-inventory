const application = require("./application");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log("Database connection Successful.");
        application.listen(PORT);
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
