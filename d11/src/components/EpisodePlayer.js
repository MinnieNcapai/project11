// src/components/EpisodePlayer.js

import { useState, useRef } from "react";

const EpisodePlayer = ({ episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const audioRef = useRef(null);

  const playEpisode = (episode) => {
    if (currentEpisode && currentEpisode.id === episode.id) {
      audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
    } else {
      setCurrentEpisode(episode);
      audioRef.current.src = episode.file;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h4>Episodes</h4>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <span onClick={() => playEpisode(episode)}>{episode.title}</span>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default EpisodePlayer;