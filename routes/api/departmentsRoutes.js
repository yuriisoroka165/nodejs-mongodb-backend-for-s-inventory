const express = require("express");
const router = express.Router();

const { departmentsController } = require("../../controllers");
// const { schemas } = require("models/department");
// const { validateData, checkBody, isValidId } = require("middlewares");

router.get("/", departmentsController.getDepartments);

module.exports = router;
