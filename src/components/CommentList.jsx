import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const StyledCommentList = styled.ul`
  padding: 30px 10px;
  width: 100%;
`;

const Comments = ({ video }) => {
  const [comments, setComments] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getRequestOptions = { method: 'GET', redirect: 'follow' };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&maxResults=10&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setComments(res.items);
      });
  }, []);

  return (
    <StyledCommentList>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </StyledCommentList>
  );
};

export default Comments;
