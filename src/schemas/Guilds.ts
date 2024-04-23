import { Tiers } from "../enums/Tiers";

const { Schema, model } = require("mongoose");

const modelo = new Schema(
	{
		_id: { type: String, required: true },
		id: { type: String, required: true },
		memberCount: { type: Number, required: true },
		language: { type: String, required: true },
		premium: {
			status: { type: Boolean, required: true },
			expires: { type: Date, required: false },
			tier: { type: Number, required: false, default: Tiers.FREE, enums: [Tiers.FREE, Tiers.PREMIUM, Tiers.PRO] }
		},
		blacklisted: { type: Boolean, required: true, default: false }
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = model("users", modelo);
