import React from 'react';
import styled from 'styled-components';
import Video from './Video';

const StyledVideoList = styled.ul`
  background-color: var(--dark-black-color);
  text-align: start;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const VideoList = ({ videos }) => {
  return (
    <StyledVideoList>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </StyledVideoList>
  );
};

export default VideoList;
