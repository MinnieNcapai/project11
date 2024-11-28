// src/AppDetails/PodcastDetails.js

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PodcastDetails = createContext();

const PodcastProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get("https://podcast-api.netlify.app");

        const showsWithDetails = await Promise.all(
          response.data.map(async (preview) => {
            const detailResponse = await axios.get(
              `https://podcast-api.netlify.app/id/${preview.id}`
            );
            return detailResponse.data;
          })
        );

        setShows(showsWithDetails);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  const addFavorite = (episode) => {
    setFavorites((prev) => [...prev, episode]);
  };

  const removeFavorite = (episodeId) => {
    setFavorites((prev) => prev.filter((ep) => ep.id !== episodeId));
  };

  return (
    <PodcastDetails.Provider
      value={{ shows, setShows, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </PodcastDetails.Provider>
  );
};

export default PodcastProvider;