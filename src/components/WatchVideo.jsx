import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { MdThumbUpAlt } from 'react-icons/md';
import { MdThumbDownAlt } from 'react-icons/md';
import { MdShare } from 'react-icons/md';
import { MdFileDownload } from 'react-icons/md';
import { MdBookmarkAdd } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';
import { convertDate } from '../logic/publishedAt';
import { convertNumber } from '../logic/convertNumber';
import { GlobalContext } from '../App';

const Video = styled.iframe`
  margin-top: 70px;
  width: 100%;
  height: 500px;
`;

const VideoTitle = styled.h2`
  font-size: 20px;
  margin-top: 15px;
  text-align: start;
  width: 100%;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid darkgray;
`;

const Metadata = styled.div`
  display: flex;

  span {
    font-size: 14px;
    color: var(--gray-color);
  }
`;

const Buttons = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.li`
  background-color: yallow;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    color: var(--blue-color);
  }
`;

const ButtonName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const VideoInfo = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const VideoInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChannelIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChannelIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const ChannelTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ChannelTitle = styled.h3`
  font-size: 14px;
`;

const Subscribers = styled.span`
  font-size: 12px;
  color: var(--gray-color);
  margin-top: 5px;
`;

const SubBtn = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 16px;
  background-color: var(--red-color);
  color: var(--white-color);
  border-radius: 3px;
`;

const VideoDescription = styled.p`
  font-size: 14px;
  padding: 15px 55px;
`;

const WatchVideo = ({ video }) => {
  const { searched } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [viewCount, setViewCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getRequestOptions = { method: 'GET', redirect: 'follow' };

  const handleLikeCount = () => {
    if (searched) {
      setLikeCount('LIKE');
    } else {
      const data = convertNumber(video.statistics.likeCount);
      setLikeCount(data);
    }
  };

  useEffect(() => {
    handleLikeCount();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setChannel(res.items[0].snippet.thumbnails.default.url);
        setSubscriberCount(res.items[0].statistics.subscriberCount);
        setViewCount(res.items[0].statistics.viewCount);
        // setLikeCount(res.items[0].statistics.likeCount ?? 'LIKE');
      });
  }, []);

  return (
    <>
      <Video
        type="text/html"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      ></Video>
      <VideoTitle>{video.snippet.title}</VideoTitle>
      <Actions>
        <Metadata>
          <span>{`${Number(viewCount).toLocaleString()} views`}</span>
          <VscDebugStackframeDot color="gray" />
          <span>{convertDate(video.snippet.publishedAt)}</span>
        </Metadata>
        <Buttons>
          <Button>
            <MdThumbUpAlt size={24} />
            <ButtonName>{likeCount}</ButtonName>
          </Button>
          <Button>
            <MdThumbDownAlt size={24} />
            <ButtonName>DISLIKE</ButtonName>
          </Button>
          <Button>
            <MdShare size={24} />
            <ButtonName>SHARE</ButtonName>
          </Button>
          <Button>
            <MdFileDownload size={24} />
            <ButtonName>DOWNLOAD</ButtonName>
          </Button>
          <Button>
            <MdBookmarkAdd size={24} />
            <ButtonName>SAVE</ButtonName>
          </Button>
          <Button>
            <MdMoreHoriz size={24} />
          </Button>
        </Buttons>
      </Actions>
      <VideoInfo>
        <VideoInfoWrapper>
          <ChannelIconWrapper>
            <ChannelIcon src={channel} alt="channel thumbnail" />
            <ChannelTitleWrapper>
              <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
              <Subscribers>{`${convertNumber(
                subscriberCount
              )} subscribers`}</Subscribers>
            </ChannelTitleWrapper>
          </ChannelIconWrapper>
          <SubBtn>subscribe</SubBtn>
        </VideoInfoWrapper>
        <VideoDescription>{video.snippet.description}</VideoDescription>
      </VideoInfo>
    </>
  );
};

export default WatchVideo;
