import { Schema, model } from "mongoose";

const ImageSchema = new Schema(
  {
    userName: { type: String, required: true },
    prompt: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Image = model("Post", ImageSchema);

export default Image;
