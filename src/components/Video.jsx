import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const VideoMetadata = styled.div`
  .title {
    font-size: 14px;
  }

  .channel-name,
  .published-at {
    font-size: 12px;
    color: gray;
  }

  .channel-name {
    margin-top: 5px;
  }

  .published-at {
    margin-top: 3px;
  }
`;

const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 13px;
`;

const Video = ({ video }) => {
  const [channel, setChannel] = useState(null);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getRequestOptions = { method: 'GET', redirect: 'follow' };

  const publishedAt = (data) => {
    const published = data.split('T')[0].split('-');
    const [publishedYear, publishedMonth, publishedDay] = published;
    const today = new Date();
    if (today.getFullYear() !== Number(publishedYear)) {
      const year = today.getFullYear() - publishedYear;
      return year === 1 ? `${year} year` : `${year} years`;
    }
    if (today.getMonth() + 1 !== Number(publishedMonth)) {
      const month = today.getMonth() + 1 - publishedMonth;
      return month === 1 ? `${month} month` : `${month} months`;
    }
    if (today.getDate() !== Number(publishedDay)) {
      const day = today.getDate() - publishedDay;
      if (day >= 7) {
        const week = Math.floor(day / 7);
        return week === 1 ? `${week} week` : `${week} weeks`;
      } else {
        return day === 1 ? `${day} day` : `${day} days`;
      }
    }
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setChannel(res.items[0].snippet.thumbnails.default.url);
      });
  }, []);

  return (
    <StyledVideo>
      <Thumbnail
        src={video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <Wrapper>
        <ChannelThumbnail src={channel} alt="channel thumbnail" />
        <VideoMetadata>
          <p className="title">{video.snippet.title}</p>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <p className="published-at">
            {publishedAt(video.snippet.publishedAt)} ago
          </p>
        </VideoMetadata>
      </Wrapper>
    </StyledVideo>
  );
};

export default Video;