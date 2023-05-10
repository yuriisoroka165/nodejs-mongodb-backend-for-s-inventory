const { isValidObjectId } = require("mongoose");

const { HttpError } = require("helpers");

const isValidId = (request, response, next) => {
    const { id } = request.params;
    if (!isValidObjectId(id)) {
        next(HttpError(400, `${id} is not valid id`));
    }
    next();
};

module.exports = isValidId;
