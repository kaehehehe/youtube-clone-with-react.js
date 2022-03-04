import React, { useEffect, useState, useContext } from 'react';

import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { GlobalContext } from '../../App';
import * as S from './style';

const SearchedVideo = ({ video, handleSelectedVideo }) => {
  const { youtube } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    youtube
      .getChannelsData(video)
      .then((data) => setChannel(data[0].snippet.thumbnails.default.url))
      .catch((error) => console.error('error', error));
  }, [video, youtube]);

  return (
    <S.StyledVideo onClick={() => handleSelectedVideo(video)}>
      <S.Thumbnail>
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </S.Thumbnail>
      <S.VideoMetadata>
        <S.Title>{video.snippet.title}</S.Title>
        <S.PublishedAt>
          {convertDataIntoAgo(video.snippet.publishedAt)} ago
        </S.PublishedAt>
        <S.Wrapper>
          <S.ChannelImg src={channel} alt="channel thumbnail" />
          <S.Channel>{video.snippet.channelTitle}</S.Channel>
        </S.Wrapper>
        <S.Description>{video.snippet.description}</S.Description>
      </S.VideoMetadata>
    </S.StyledVideo>
  );
};

export default SearchedVideo;
