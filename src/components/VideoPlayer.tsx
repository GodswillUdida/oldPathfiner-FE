// components/VideoPlayer.tsx
import React, { useState } from "react";

interface VideoPlayerProps {
  video: { id: string; title: string; url: string; duration: number };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div>
      <h4>{video.title}</h4>
      <video controls src={video.url} />
      {!isCompleted && (
        <button onClick={handleComplete}>Mark as Completed</button>
      )}
      {isCompleted && <p>Completed!</p>}
    </div>
  );
};

export default VideoPlayer;
