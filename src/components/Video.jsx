import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { convertDataIntoAgo } from '../logic/convertDataIntoAgo';
import { convertDataIntoMinutesAndSeconds } from '../logic/convertDataIntoMinutesAndSeconds';
import { convertDataIntoNumberUsingUnits } from '../logic/convertDataIntoNumberUsingUnits';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { useWindowSize } from 'react-use';
import { GlobalContext } from '../App';

const StyledVideo = styled.li`
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  background-color: aliceblue;
`;

const Duration = styled.div`
  font-size: 12px;
  color: var(--white-color);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  padding: 5px 8px;
  position: absolute;
  top: ${({ height }) => `${height - 25}px`};
  right: 5px;
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
  const { youtube } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);
  const heightRef = useRef(null);
  const { width, height } = useWindowSize();
  const [thumbnailHeight, setThumbnailHeight] = useState(null);

  useEffect(() => {
    const thumbnailHeight = heightRef.current.height;
    setThumbnailHeight(thumbnailHeight);
  }, [[width, height]]);

  useEffect(() => {
    youtube
      .getChannelsData(video)
      .then((data) => setChannel(data[0].snippet.thumbnails.default.url))
      .catch((error) => console.error('error', error));
  }, []);

  return (
    <StyledVideo onClick={() => handleSelectedVideo(video)}>
      <ThumbnailWrapper>
        <Thumbnail
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
          ref={heightRef}
        />
        <Duration height={thumbnailHeight}>
          {convertDataIntoMinutesAndSeconds(video.contentDetails.duration)}
        </Duration>
      </ThumbnailWrapper>
      <Wrapper>
        <ChannelThumbnail src={channel} alt="channel thumbnail" />
        <VideoMetadata>
          <p className="title">{video.snippet.title}</p>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <MetadataWrapper>
            <span>{`${convertDataIntoNumberUsingUnits(
              video.statistics.viewCount
            )} views`}</span>
            <VscDebugStackframeDot color="gray" />
            <span className="published-at">
              {convertDataIntoAgo(video.snippet.publishedAt)} ago
            </span>
          </MetadataWrapper>
        </VideoMetadata>
      </Wrapper>
    </StyledVideo>
  );
};

export default Video;
