import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;


const useFetchImages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/images`);
        setData(response.data); 
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch images");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { data, loading, error };
};

export default useFetchImages;
