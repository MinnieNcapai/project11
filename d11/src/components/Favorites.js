// src/components/Favorites.js

import { useContext } from "react";
import { PodcastDetails } from "../AppDetails/PodacastDetails";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(PodcastDetails);

  return (
    <div>
      <h2>Favorite Episodes</h2>
      <ul>
        {favorites.map((episode) => (
          <li key={episode.id}>
            <span>{episode.title}</span>
            <button onClick={() => removeFavorite(episode.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;