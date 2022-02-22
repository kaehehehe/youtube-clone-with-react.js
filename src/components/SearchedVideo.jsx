import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { convertDataIntoAgo } from '../logic/convertDataIntoAgo';
import { GlobalContext } from '../App';

const StyledVideo = styled.li`
  display: flex;
  width: 70%;
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 650px) {
    padding: 0;
    margin: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`;

const Thumbnail = styled.div`
  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;

const VideoMetadata = styled.div`
  margin-left: 15px;
  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

const PublishedAt = styled.p`
  font-size: 12px;
  color: var(--gray-color);
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  line-height: 25px;
`;

const ChannelImg = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Channel = styled.p`
  font-size: 15px;
  color: var(--gray-color);
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: var(--gray-color);
`;

const SearchedVideo = ({ video, handleSelectedVideo }) => {
  const { youtube } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    youtube
      .getChannelsData(video)
      .then((data) => setChannel(data[0].snippet.thumbnails.default.url))
      .catch((error) => console.error('error', error));
  }, []);

  return (
    <StyledVideo onClick={() => handleSelectedVideo(video)}>
      <Thumbnail>
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </Thumbnail>
      <VideoMetadata>
        <Title>{video.snippet.title}</Title>
        <PublishedAt>
          {convertDataIntoAgo(video.snippet.publishedAt)} ago
        </PublishedAt>
        <Wrapper>
          <ChannelImg src={channel} alt="channel thumbnail" />
          <Channel>{video.snippet.channelTitle}</Channel>
        </Wrapper>
        <Description>{video.snippet.description}</Description>
      </VideoMetadata>
    </StyledVideo>
  );
};

export default SearchedVideo;
