import React from 'react';
import { MdThumbUpAlt } from 'react-icons/md';
import { MdThumbDownAlt } from 'react-icons/md';

import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import * as S from './style';

const Comment = ({ comment }) => {
  const {
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  const handlePublishedAt = (data) => {
    const result = convertDataIntoAgo(data);
    if (result === 'now') {
      return 'now';
    } else {
      return `${result} ago`;
    }
  };

  return (
    <S.StyledComment>
      <S.UserProfileImg src={authorProfileImageUrl} alt="user profile image" />
      <S.Wrapper>
        <S.UsernameWrapper>
          <S.Username>{authorDisplayName}</S.Username>
          <S.PublishedAt>{handlePublishedAt(publishedAt)}</S.PublishedAt>
        </S.UsernameWrapper>
        <S.Text>{textOriginal}</S.Text>
        <S.Buttons>
          <MdThumbUpAlt size={16} />
          <span>{likeCount}</span>
          <MdThumbDownAlt size={16} />
          <button>REPLY</button>
        </S.Buttons>
      </S.Wrapper>
    </S.StyledComment>
  );
};

export default Comment;
