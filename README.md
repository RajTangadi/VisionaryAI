# VisionaryAI

## 🚀 Overview

VisionaryAI is a MERN stack application designed to generate and manage AI-generated images. This project leverages React (Vite) for the frontend, Express.js for the backend, MongoDB for database storage, and Cloudinary for image storage. The application integrates Hugging Face black-forest-labs/FLUX.1-schnell for image generation and provides a seamless user experience.

## 🎯 Features

- **AI-powered image generation** 

- **Download generate image** 

- **search image** 

- **Scalable backend** powered by Express.js and Node.js

- **RESTful API** implementation for seamless communication


## ⚙️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Shadcn
- **Backend:**  Node.js, Express.js
- **Database:**  MongoDB
- **ORM:** Mongoose
- **AI Model:**  black-forest-labs/FLUX.1-schnell
- **Image Storage:**  Cloudinary

## 📂 ScreenShots

![Image](https://github.com/user-attachments/assets/688be528-08e3-456a-99d0-f2f66f302366)

![Image](https://github.com/user-attachments/assets/c4b352d6-872f-4ebe-844f-095c971bf572)

![Image](https://github.com/user-attachments/assets/9f641aa2-7882-4e11-af4b-bb7ebf005186)


## 🛠️ Project Setup

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
2. Install dependencies:
   ```bash
     npm install
3. Create .env file in the root directory of server
    ```bash
     MONGO_URI=<your_mongodb_connection_string>
     CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
     CLOUDINARY_API_KEY=<your_cloudinary_api_key>
     CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
     TOGETHER_AI_KEY=<your_together_api_key>
     PORT=4000
4. Start the backend server:
    ``` bash
    npm start
    # or for development
    npm run dev
for more detail about model black-forest-labs/FLUX.1-schnell [here](https://api.together.ai/models/black-forest-labs/FLUX.1-schnell-Free)



### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
2. Install dependencies:
   ```bash
     npm install
3. Create .env file in the root directory of client
    ```bash
     VITE_BACKEND_URL= <Your Backend Link. if your hoisting on vercel or any other platform then paste generate backend link>
4. Start the backend server:
    ``` bash
    npm run dev
### Api Endpoint

   **/api/images/generate**
   - POST: Generate an image based on a text prompt.

   **/api/images/**
  - GET: Fetch Generated Images

## Live Project
You can access the live project [here](https://visionary-ai-hep7.vercel.app/)



### 🤝 Contributing
We welcome contributions! Please follow these steps:

- Fork the project

- Create your feature branch (git checkout -b feature/AmazingFeature)

- Commit your changes (git commit -m 'Add some AmazingFeature')

- Push to the branch (git push origin feature/AmazingFeature)

- Open a Pull Request