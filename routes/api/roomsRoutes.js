const express = require("express");
const router = express.Router();

const { roomsController } = require("../../controllers");
const { roomModel } = require("../../models");
const { validateData, checkBody, isValidId } = require("../../middlewares");

const { schemas } = roomModel;

router.get("/", roomsController.getRooms);
router.get("/:id", isValidId, roomsController.getRoom);
router.post("/", roomsController.addRoom);
router.put(
    "/:id",
    isValidId,
    checkBody,
    validateData(schemas.requiredFieldSchema),
    roomsController.updateRoom
);
router.delete("/:id", isValidId, roomsController.deleteRoom);

module.exports = router;
