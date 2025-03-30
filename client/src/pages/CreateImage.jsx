import TypeAnimation1 from "@/components/TypeAnimation1";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CreateImage = () => {
  const [userName, setUserName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userNameError, setUserNameError] = useState("");

  const validateUsername = (username) => {
    // Check if username starts with an alphabetical letter
    const startsWithAlphabet = /^[a-zA-Z]/.test(username);

    if (!startsWithAlphabet && username.length > 0) {
      setUserNameError("Username must start with an alphabetical letter");
      return false;
    }

    setUserNameError("");
    return true;
  };

  const handleUserNameChange = (e) => {
    const newUsername = e.target.value;
    setUserName(newUsername);
    validateUsername(newUsername);
  };

  const handleGenerate = async () => {
    if (!userName || !prompt) {
      setError("User name and prompt are required!");
      return;
    }

    if (!validateUsername(userName)) {
      return;
    }

    setError("");
    setLoading(true);
    setImages(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/images/generate`, {
        userName,
        prompt,
      });
      setImages(response.data.data);
      setUserName("");
      setPrompt("");
    } catch (err) {
      setError(err.response?.data?.error || "Image generation failed.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="p-15 w-[75%] sm:w-[100%] lg:w-[75%] mx-auto">
        <div className="mx-auto text-center ">
          <TypeAnimation1 />
        </div>

        <div className="mt-8 mx-auto text-center">
          <h1 className="text-2xl text-gray-500 text-center mt-5  font-semibold ">
            Turn your words into breathtaking images with the power of AI.
            Unleash your creativity and bring your imagination to life—start
            generating stunning visuals today!
          </h1>
        </div>
        <div className="my-10">
          <h3 className="pt-5 pb-3 font-semibold">Name</h3>
          <input
            type="text"
            placeholder="Eg. Rayan"
            className={`w-full bg-white text-black p-2 ${
              userNameError ? "border-2 border-red-500" : ""
            }`}
            value={userName}
            onChange={handleUserNameChange}
          />
          {userNameError && (
            <p className="text-red-500 mt-1 text-sm">{userNameError}</p>
          )}
          <h3 className="pt-5 pb-3 font-semibold">Prompt</h3>
          <input
            type="text"
            placeholder="Eg. A beautiful sunset over the mountains"
            className="w-full bg-white text-black p-2"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div>
          <div className="my-8">
            <div className="relative w-70 h-55 border-gray-500/50 border-3 flex items-center justify-center bg-gray-100">
              {!images || !images.imageUrl ? (
                // Initial state - show logo placeholder
                <div className="flex flex-col items-center justify-center p-4">
                  <svg
                    className="w-20 h-20 text-gray-400 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">Generate image...</p>
                </div>
              ) : (
                // After generation - show the actual image
                <img
                  className="w-full h-full object-cover aspect-1"
                  src={images.imageUrl}
                  alt={images.prompt}
                  loading="lazy"
                />
              )}
            </div>
          </div>

          <Button
            className="bg-blue-700 hover:opacity-90 hover:bg-blue-700  cursor-pointer"
            // onClick={() => setLoading((prev) => !prev)}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Generating
              </>
            ) : (
              <>
                <Sparkles />
                <p>Generate</p>
              </>
            )}
          </Button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default CreateImage;
