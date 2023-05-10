const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const employeeSchema = new Schema(
    {
        employee_full_name: {
            type: String,
            required: [true, "Set employee name"],
        },
        employee_position: {
            type: String,
        },
        employee_note: {
            type: String,
        },
    },
    { versionKey: false, timestamps: false }
);

employeeSchema.post("save", handleMongooseError);

const requiredFieldSchema = Joi.object({
    employee_full_name: Joi.string().required(),
    employee_position: Joi.string(),
    employee_note: Joi.string(),
});

const schemas = {
    requiredFieldSchema,
};

const Employee = model("employee", employeeSchema);

module.exports = { Employee, schemas };
