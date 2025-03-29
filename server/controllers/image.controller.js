import cloudinary from "../config/cloudinary.js";
import Together from "together-ai";
import Image from "../models/image.model.js";

const together = new Together({ apiKey: process.env.TOGETHER_AI_KEY });

// Controller function to generate image
export const generateImage = async (req, res) => {
  try {
    const { userName, prompt } = req.body;

    if (!userName || !prompt) {
      return res.status(400).json({ error: "Missing userName or prompt" });
    }


    // Check how many images the user has already generated
    const userImagesCount = await Image.countDocuments({ userName });

    if (userImagesCount >= 3) {
      return res
        .status(403)
        .json({ error: "You have reached the limit of 3 prompts" });
    }

    // Generate Image using Together AI
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: prompt,
      width: 1024,
      height: 768,
      steps: 4,
      n: 1,
      response_format: "b64_json",
      stop: [],
    });


    if (!response.data || !response.data[0]?.b64_json) {
      throw new Error("Image generation failed from Together AI");
    }

    const base64Image = `data:image/png;base64,${response.data[0].b64_json}`;

    // Upload to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(base64Image, {
      folder: "generated_images",
    });

    // Save to MongoDB
    const newImage = new Image({
      userName,
      prompt,
      imageUrl: cloudinaryResult.secure_url,
    });

    await newImage.save();

    res.status(201).json({
      message: "Image generated and saved successfully",
      data: newImage,
    });
  } catch (error) {
    res.status(500).json({
      error: "Image generation or upload failed",
      details: error.message,
    });
  }
};

export const getAllImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 }).limit(20);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
