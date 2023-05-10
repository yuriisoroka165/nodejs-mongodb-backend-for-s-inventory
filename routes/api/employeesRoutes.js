const express = require("express");
const router = express.Router();

const { employeesController } = require("../../controllers");
const { employeeModel } = require("../../models");
const { validateData, checkBody, isValidId } = require("../../middlewares");

const { schemas } = employeeModel;

router.get("/", employeesController.getEmployees);
router.get("/:id", isValidId, employeesController.getEmployee);
router.post("/", employeesController.addEmployee);
router.put(
    "/:id",
    isValidId,
    checkBody,
    validateData(schemas.requiredFieldSchema),
    employeesController.updateEmployee
);
router.delete("/:id", isValidId, employeesController.deleteEmployee);

module.exports = router;
