const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const roomSchema = new Schema(
    {
        room_number: {
            type: String,
            required: [true, "Set room number"],
        },
        room_name: {
            type: String,
        },
        is_werehouse: {
            type: Boolean,
            default: false,
        },
        room_note: {
            type: String,
        },
    },
    { versionKey: false, timestamps: false }
);

roomSchema.post("save", handleMongooseError);

const requiredFieldSchema = Joi.object({
    room_number: Joi.string().required(),
    room_name: Joi.string(),
    is_werehouse: Joi.boolean(),
    room_note: Joi.string(),
});

const schemas = {
    requiredFieldSchema,
};

const Room = model("room", roomSchema);

module.exports = { Room, schemas };
