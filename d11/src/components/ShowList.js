// src/components/ShowList.js

import { useContext, useEffect } from "react";
import { PodcastDetails } from "../AppDetails/PodacastDetails";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowList = () => {
  const { shows, setShows } = useContext(PodcastDetails);

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
  }, [setShows]);

  return (
    <div>
      <h2>Available Shows</h2>
      <ul>
        {shows.map((show) => (
          <Link key={show.id} to={`/shows/${show.id}`}>
            <li>{show.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;