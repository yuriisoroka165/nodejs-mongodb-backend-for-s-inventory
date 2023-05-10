const { employeeModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Employee } = employeeModel;

const getEmployees = async (request, response, next) => {
    const result = await Employee.find();
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getEmployee = async (request, response, next) => {
    const { id } = request.params;
    const result = await Employee.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addEmployee = async (request, response, next) => {
    const result = await Employee.create(request.body);
    response.status(201).json(result);
};

const updateEmployee = async (request, response, next) => {
    const { id } = request.params;
    const result = await Employee.findByIdAndUpdate(id, request.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const deleteEmployee = async (request, response, next) => {
    const { id } = request.params;
    const result = await Employee.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "Employee deleted" });
};

module.exports = {
    getEmployees: controllerWrapper(getEmployees),
    getEmployee: controllerWrapper(getEmployee),
    addEmployee: controllerWrapper(addEmployee),
    updateEmployee: controllerWrapper(updateEmployee),
    deleteEmployee: controllerWrapper(deleteEmployee),
};
