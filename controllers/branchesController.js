const { branchModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Branch } = branchModel;

const getBranches = async (request, response, next) => {
    const result = await Branch.find();
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getBranch = async (request, response, next) => {
    const { id } = request.params;
    const result = await Branch.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addBranch = async (request, response, next) => {
    const result = await Branch.create(request.body);
    response.status(201).json(result);
};

const updateBranch = async (request, response, next) => {
    const { id } = request.params;
    const result = await Branch.findByIdAndUpdate(id, request.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const deleteBranch = async (request, response, next) => {
    const { id } = request.params;
    const result = await Branch.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "Branch deleted" });
};

module.exports = {
    getBranches: controllerWrapper(getBranches),
    getBranch: controllerWrapper(getBranch),
    addBranch: controllerWrapper(addBranch),
    updateBranch: controllerWrapper(updateBranch),
    deleteBranch: controllerWrapper(deleteBranch),
};
