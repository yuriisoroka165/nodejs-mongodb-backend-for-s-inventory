const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const branchSchema = new Schema(
    {
        branch_name: {
            type: String,
            required: [true, "Set room number"],
        },
        branch_address: {
            type: String,
        },
        branch_note: {
            type: String,
        },
    },
    { versionKey: false, timestamps: false }
);

branchSchema.post("save", handleMongooseError);

const requiredFieldSchema = Joi.object({
    branch_name: Joi.string().required(),
    branch_address: Joi.string(),
    branch_note: Joi.string(),
});

const schemas = {
    requiredFieldSchema,
};

const Branch = model("branch", branchSchema);

module.exports = { Branch, schemas };
