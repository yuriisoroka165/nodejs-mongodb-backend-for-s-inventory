const express = require("express");
const router = express.Router();

const { branchesController } = require("../../controllers");
const { branchModel } = require("../../models");
const { validateData, checkBody, isValidId } = require("../../middlewares");

const { schemas } = branchModel;

router.get("/", branchesController.getBranches);
router.get("/:id", isValidId, branchesController.getBranch);
router.post("/", branchesController.addBranch);
router.put(
    "/:id",
    isValidId,
    checkBody,
    validateData(schemas.requiredFieldSchema),
    branchesController.updateBranch
);
router.delete("/:id", isValidId, branchesController.deleteBranch);

module.exports = router;
