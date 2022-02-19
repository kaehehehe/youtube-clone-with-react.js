import React from 'react';
import styled from 'styled-components';

const Video = styled.iframe`
  margin-top: 70px;
  padding-right: 20px;
  width: 100%;
  height: 500px;
`;

const WatchVideo = ({ selectedVideo }) => {
  return (
    <Video
      type="text/html"
      src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
      frameBorder="0"
      allowFullScreen
      allow="autoplay"
    ></Video>
  );
};

export default WatchVideo;
