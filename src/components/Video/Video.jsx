import React, { useEffect, useRef, useState, useContext } from 'react';
import { useWindowSize } from 'react-use';
import { VscDebugStackframeDot } from 'react-icons/vsc';

import { convertDataIntoMinutesAndSeconds } from '../../utils/convertDataIntoMinutesAndSeconds';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoNumberUsingUnits } from '../../utils/convertDataIntoNumberUsingUnits';
import { GlobalContext } from '../../App';
import * as S from './style';

const Video = ({ video, handleSelectedVideo }) => {
  const { youtube } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);
  const heightRef = useRef(null);
  const { width, height } = useWindowSize(null);
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
  }, [video, youtube]);

  return (
    <S.StyledVideo onClick={() => handleSelectedVideo(video)}>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
          ref={heightRef}
        />
        <S.Duration height={thumbnailHeight}>
          {convertDataIntoMinutesAndSeconds(video.contentDetails.duration)}
        </S.Duration>
      </S.ThumbnailWrapper>
      <S.Wrapper>
        <S.ChannelThumbnail src={channel} alt="channel thumbnail" />
        <S.VideoMetadata>
          <p className="title">{video.snippet.title}</p>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <S.MetadataWrapper>
            <span>{`${convertDataIntoNumberUsingUnits(
              video.statistics.viewCount
            )} views`}</span>
            <VscDebugStackframeDot color="gray" />
            <span className="published-at">
              {convertDataIntoAgo(video.snippet.publishedAt)} ago
            </span>
          </S.MetadataWrapper>
        </S.VideoMetadata>
      </S.Wrapper>
    </S.StyledVideo>
  );
};

export default Video;
