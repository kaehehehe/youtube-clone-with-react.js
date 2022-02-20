import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publishedAt } from '../logic/publishedAt';
import { convertNumber } from '../logic/convertNumber';
import { VscDebugStackframeDot } from 'react-icons/vsc';

const StyledVideo = styled.li`
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 13px;
`;

const VideoMetadata = styled.div`
  .title {
    font-size: 14px;
  }

  .channel-name,
  .published-at {
    font-size: 12px;
    color: var(--gray-color);
  }

  .channel-name {
    margin-top: 5px;
  }

  .published-at {
  }
`;

const MetadataWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 3px;
  color: var(--gray-color);

  .published-at {
    margin-left: 3px;
  }
`;

const Video = ({ video, handleSelectedVideo }) => {
  const [channel, setChannel] = useState(null);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getRequestOptions = { method: 'GET', redirect: 'follow' };
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setChannel(res.items[0].snippet.thumbnails.default.url);
      });
  }, []);

  return (
    <StyledVideo onClick={() => handleSelectedVideo(video)}>
      <Thumbnail
        src={video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <Wrapper>
        <ChannelThumbnail src={channel} alt="channel thumbnail" />
        <VideoMetadata>
          <p className="title">{video.snippet.title}</p>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <MetadataWrapper>
            <span>{`${convertNumber(video.statistics.viewCount)} views`}</span>
            <VscDebugStackframeDot color="gray" />
            <span className="published-at">
              {publishedAt(video.snippet.publishedAt)} ago
            </span>
          </MetadataWrapper>
        </VideoMetadata>
      </Wrapper>
    </StyledVideo>
  );
};

export default Video;
