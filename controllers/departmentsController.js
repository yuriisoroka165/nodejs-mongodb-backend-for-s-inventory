const { Department } = require("../models/department");
const { HttpError, controllerWrapper } = require("../helpers");

const getDepartments = async (request, response, next) => {
    const result = await Department.find();
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

module.exports = {
    getDepartments: controllerWrapper(getDepartments),
};
