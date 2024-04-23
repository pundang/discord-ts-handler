const { Schema, model } = require("mongoose");

const bans = new Schema(
	{
		guild: { type: String, required: true },
		reason: { type: String, required: true },
		by: { type: String, required: true },
		permanent: { type: Boolean, required: true },
		expires: { type: Date, required: false }
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const reputation = new Schema(
	{
		guild: { type: String, required: true },
		amount: { type: Number, required: true },
		reason: { type: String, required: true }
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const modelo = new Schema(
	{
		_id: { type: String, required: true },
		id: { type: String, required: true, unique: true },
		bans: [bans],
		reputation: [reputation]
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = model("users", modelo);
