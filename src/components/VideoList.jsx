import React from 'react';
import styled from 'styled-components';
import SearchedVideo from './SearchedVideo';
import Video from './Video';

const StyledVideoList = styled.ul`
  background-color: var(--dark-black-color);
  text-align: start;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 30px;
  display: ${({ searched }) => (searched ? 'flex' : 'grid')};
  flex-direction: column;
  align-items: ${({ searched }) => searched && 'center'};
  justify-content: ${({ searched }) => searched && 'center'};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const VideoList = ({ videos, searched, handleSelectedVideo }) => {
  return (
    <StyledVideoList searched={searched}>
      {searched
        ? videos.map((video) => <SearchedVideo key={video.id} video={video} />)
        : videos.map((video) => (
            <Video
              key={video.id}
              video={video}
              handleSelectedVideo={handleSelectedVideo}
            />
          ))}
    </StyledVideoList>
  );
};

export default VideoList;
