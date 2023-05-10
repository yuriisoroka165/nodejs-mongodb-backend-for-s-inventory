const express = require("express");
const router = express.Router();

const { departmentsController } = require("../../controllers");
const { departmentModel } = require("../../models");
const { validateData, checkBody, isValidId } = require("../../middlewares");

const { schemas } = departmentModel;

router.get("/", departmentsController.getDepartments);
router.get("/:id", isValidId, departmentsController.getDepartment);
router.post("/", departmentsController.addDepartment);
router.put(
    "/:id",
    isValidId,
    checkBody,
    validateData(schemas.requiredFieldSchema),
    departmentsController.updateDepartment
);
router.delete("/:id", isValidId, departmentsController.deleteDepartment);

module.exports = router;
