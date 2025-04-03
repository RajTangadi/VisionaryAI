import TypeAnimation1 from "@/components/TypeAnimation1";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CreateImage = () => {
  const [userName, setUserName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userNameError, setUserNameError] = useState("");

  const validateUsername = (username) => {
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
      toast.success("Image Generated successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      setUserName("");
      setPrompt("");
    } catch (err) {
      setError(err.response?.data?.error || "Image generation failed.");
      toast.error('Image generation failed', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
    }

    setLoading(false);
  };

  return (
    <div className="p-5 w-full max-w-3xl mx-auto">
      <div className="mx-auto text-center hidden md:block lg:block xl:block 2xl:block 4xl:block">
        <TypeAnimation1 />
      </div>
      <div className="mx-auto text-center md:hidden">
        <h1 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Text To Image
          </span>{" "}
          Generator
        </h1>
      </div>

      <div className="mt-8 mx-auto text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-500 font-semibold">
          Turn your words into breathtaking images with AI. Unleash your
          creativity and bring your imagination to life!
        </h1>
      </div>

      <div className="my-6">
        <h3 className="pt-3 pb-2 font-semibold">Name</h3>
        <input
          type="text"
          placeholder="Eg. Rayan"
          className={`w-full bg-white text-black p-2 rounded border ${
            userNameError ? "border-red-500" : "border-gray-300"
          }`}
          value={userName}
          onChange={handleUserNameChange}
        />
        {userNameError && (
          <p className="text-red-500 mt-1 text-sm">{userNameError}</p>
        )}

        <h3 className="pt-5 pb-2 font-semibold">Prompt</h3>
        <input
          type="text"
          placeholder="Eg. A beautiful sunset over the mountains"
          className="w-full bg-white text-black p-2 rounded border border-gray-300"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="my-6 flex justify-center">
        <div className="relative w-full max-w-md h-64 border border-gray-300 flex items-center justify-center bg-gray-100 rounded">
          {!images || !images.imageUrl ? (
            <div className="flex flex-col items-center justify-center p-4">
              <svg
                className="w-16 h-16 text-gray-400 mb-2"
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
            <img
              className="w-full h-full object-cover rounded"
              src={images.imageUrl}
              alt={images.prompt}
              loading="lazy"
            />
          )}
        </div>
      </div>

      <div className="text-center">
        <Button
          className="bg-blue-700 hover:opacity-90 hover:bg-blue-700 cursor-pointer px-6 py-3 text-lg"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" /> Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2" /> Generate
            </>
          )}
        </Button>
      </div>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default CreateImage;
