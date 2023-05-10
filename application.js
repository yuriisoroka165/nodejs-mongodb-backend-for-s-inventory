const path = require("path");
const express = require("express");
const morganLogger = require("morgan");
const cors = require("cors");
const rfs = require("rotating-file-stream");

const departmentsRouter = require("./routes/api/departmentsRoutes");

const application = express();

const accesLogStream = rfs.createStream("access.log", {
    interval: "1d", //log rotate daily
    path: path.join(__dirname, "logs"),
});

application.use(express.json());
application.use(cors());
application.use(morganLogger("combined", { stream: accesLogStream }));

application.use("/api/departments", departmentsRouter);

application.use((request, response) => {
    response.status(400).json({ message: "Not found" });
});

application.use((error, request, response, nex) => {
    const { status = 500, message = "Server error" } = error;
    response.status(status).json({ message });
});

module.exports = application;
