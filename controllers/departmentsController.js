const { departmentModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Department } = departmentModel;

const getDepartments = async (request, response, next) => {
    const result = await Department.find();
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getDepartment = async (request, response, next) => {
    const { id } = request.params;
    const result = await Department.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addDepartment = async (request, response, next) => {
    const result = await Department.create(request.body);
    response.status(201).json(result);
};

const updateDepartment = async (request, response, next) => {
    const { id } = request.params;
    const result = await Department.findByIdAndUpdate(id, request.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const deleteDepartment = async (request, response, next) => {
    const { id } = request.params;
    const result = await Department.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "Department deleted" });
};

module.exports = {
    getDepartments: controllerWrapper(getDepartments),
    getDepartment: controllerWrapper(getDepartment),
    addDepartment: controllerWrapper(addDepartment),
    updateDepartment: controllerWrapper(updateDepartment),
    deleteDepartment: controllerWrapper(deleteDepartment),
};
