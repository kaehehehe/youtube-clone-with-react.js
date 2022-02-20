import React from 'react';
import styled from 'styled-components';
import { convertDataIntoAgo } from '../logic/publishedAt';
import { MdThumbUpAlt } from 'react-icons/md';
import { MdThumbDownAlt } from 'react-icons/md';

const StyledComment = styled.li`
  display: flex;
  padding-bottom: 20px;
`;

const UserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UsernameWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Username = styled.span`
  font-size: 13px;
  color: var(--white-color);
  margin-right: 5px;
`;

const PublishedAt = styled.span`
  font-size: 12px;
  color: var(--gray-color);
`;

const Text = styled.p`
  font-size: 14px;
  color: var(--white-color);
  margin-bottom: 10px;
  max-width: 800px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  color: var(--gray-color);
  font-size: 12px;

  button {
    background-color: transparent;
    color: var(--gray-color);
  }
`;

const Comment = ({ comment }) => {
  const {
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  return (
    <StyledComment>
      <UserProfileImg src={authorProfileImageUrl} alt="user profile image" />
      <Wrapper>
        <UsernameWrapper>
          <Username>{authorDisplayName}</Username>
          <PublishedAt>{`${convertDataIntoAgo(publishedAt)} ago`}</PublishedAt>
        </UsernameWrapper>
        <Text>{textOriginal}</Text>
        <Buttons>
          <MdThumbUpAlt size={16} />
          <span>{likeCount}</span>
          <MdThumbDownAlt size={16} />
          <button>REPLY</button>
        </Buttons>
      </Wrapper>
    </StyledComment>
  );
};

export default Comment;
