const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const departmentSchema = new Schema(
    {
        department_name: {
            type: String,
            required: [true, "Set department name"],
        },
        department_short_name: {
            type: String,
        },
        department_note: {
            type: String,
        },
    },
    { versionKey: false, timestamps: true }
);

departmentSchema.post("save", handleMongooseError);

const requiredFieldSchema = Joi.object({
    department_name: Joi.string().required(),
    department_short_name: Joi.string(),
    department_note: Joi.string(),
});

const schemas = {
    requiredFieldSchema,
};

const Department = model("department", departmentSchema);

module.exports = { Department, schemas };
