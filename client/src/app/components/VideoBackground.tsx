

import React from 'react';
// import Video from '/Users/p/Desktop/codesmith/OSP/Dekaf2/client/public/login-background.mp4'


const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline>
        <source src='/Users/p/Desktop/codesmith/OSP/Dekaf2/client/public/login-background.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
