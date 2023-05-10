const { roomModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Room } = roomModel;

const getRooms = async (request, response, next) => {
    const result = await Room.find();
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getRoom = async (request, response, next) => {
    const { id } = request.params;
    const result = await Room.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addRoom = async (request, response, next) => {
    const result = await Room.create(request.body);
    response.status(201).json(result);
};

const updateRoom = async (request, response, next) => {
    const { id } = request.params;
    const result = await Room.findByIdAndUpdate(id, request.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const deleteRoom = async (request, response, next) => {
    const { id } = request.params;
    const result = await Room.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "Room deleted" });
};

module.exports = {
    getRooms: controllerWrapper(getRooms),
    getRoom: controllerWrapper(getRoom),
    addRoom: controllerWrapper(addRoom),
    updateRoom: controllerWrapper(updateRoom),
    deleteRoom: controllerWrapper(deleteRoom),
};
