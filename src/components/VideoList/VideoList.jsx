import React from 'react';

import SearchedVideo from '../SearchedVideo';
import Video from '../Video/Video';
import * as S from './style';

const VideoList = ({ videos, searched, handleSelectedVideo }) => {
  return (
    <S.StyledVideoList searched={searched}>
      {searched
        ? videos?.map((video) => (
            <SearchedVideo
              key={video.id}
              video={video}
              handleSelectedVideo={handleSelectedVideo}
            />
          ))
        : videos?.map((video) => (
            <Video
              key={video.id}
              video={video}
              handleSelectedVideo={handleSelectedVideo}
            />
          ))}
    </S.StyledVideoList>
  );
};

export default VideoList;
