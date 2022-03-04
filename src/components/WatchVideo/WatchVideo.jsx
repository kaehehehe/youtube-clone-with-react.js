import React, { useEffect, useState, useContext } from 'react';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { MdThumbUpAlt } from 'react-icons/md';
import { MdThumbDownAlt } from 'react-icons/md';
import { MdShare } from 'react-icons/md';
import { MdFileDownload } from 'react-icons/md';
import { MdBookmarkAdd } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';

import { GlobalContext } from '../../App';
import CommentList from '../CommentList/CommentList';
import { convertDataIntoMonthDayYear } from '../../utils/convertDataIntoMonthDayYear';
import { convertDataIntoNumberUsingUnits } from '../../utils/convertDataIntoNumberUsingUnits';
import * as S from './style';

const WatchVideo = ({ video }) => {
  const { searched, youtube } = useContext(GlobalContext);
  const [channel, setChannel] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const [viewCount, setviewCount] = useState(null);

  useEffect(() => {
    if (searched) {
      setLikeCount('LIKE');
    } else {
      const data = convertDataIntoNumberUsingUnits(video.statistics.likeCount);
      setLikeCount(data);
    }
  }, [searched]);

  useEffect(() => {
    youtube
      .getChannelsData(video)
      .then((data) => {
        setChannel(data[0].snippet.thumbnails.default.url);
        setSubscriberCount(data[0].statistics.subscriberCount);
        setviewCount(data[0].statistics.viewCount);
      })
      .catch((error) => console.error('error', error));
  }, [video, youtube]);

  return (
    <S.Container>
      <S.Video
        type="text/html"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      ></S.Video>
      <S.VideoTitle>{video.snippet.title}</S.VideoTitle>
      <S.Actions>
        <S.Metadata>
          <span>{`${Number(viewCount).toLocaleString()} views`}</span>
          <VscDebugStackframeDot color="gray" />
          <span>{convertDataIntoMonthDayYear(video.snippet.publishedAt)}</span>
        </S.Metadata>
        <S.Buttons>
          <S.Button>
            <MdThumbUpAlt size={24} />
            <S.ButtonName>{likeCount}</S.ButtonName>
          </S.Button>
          <S.Button>
            <MdThumbDownAlt size={24} />
            <S.ButtonName>DISLIKE</S.ButtonName>
          </S.Button>
          <S.Button>
            <MdShare size={24} />
            <S.ButtonName>SHARE</S.ButtonName>
          </S.Button>
          <S.Button>
            <MdFileDownload size={24} />
            <S.ButtonName>DOWNLOAD</S.ButtonName>
          </S.Button>
          <S.Button>
            <MdBookmarkAdd size={24} />
            <S.ButtonName>SAVE</S.ButtonName>
          </S.Button>
          <S.Button>
            <MdMoreHoriz size={24} />
          </S.Button>
        </S.Buttons>
      </S.Actions>
      <S.VideoInfo>
        <S.VideoInfoWrapper>
          <S.ChannelIconWrapper>
            <S.ChannelIcon src={channel} alt="channel thumbnail" />
            <S.ChannelTitleWrapper>
              <S.ChannelTitle>{video.snippet.channelTitle}</S.ChannelTitle>
              <S.Subscribers>{`${convertDataIntoNumberUsingUnits(
                subscriberCount
              )} subscribers`}</S.Subscribers>
            </S.ChannelTitleWrapper>
          </S.ChannelIconWrapper>
          <S.SubBtn>subscribe</S.SubBtn>
        </S.VideoInfoWrapper>
        <S.VideoDescription>{video.snippet.description}</S.VideoDescription>
      </S.VideoInfo>
      <CommentList video={video} />
    </S.Container>
  );
};

export default WatchVideo;
