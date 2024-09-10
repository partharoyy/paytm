import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { minimize: false }
);

const accountModel = mongoose.models.account || mongoose.model("account", accountSchema);

export default accountModel;
