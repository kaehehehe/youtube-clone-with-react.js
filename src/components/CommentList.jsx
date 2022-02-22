import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { GlobalContext } from '../App';

const StyledCommentList = styled.ul`
  padding: 30px 10px;
  width: 100%;
`;

const Comments = ({ video }) => {
  const { youtube } = useContext(GlobalContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    youtube
      .getCommentsData(video)
      .then((data) => setComments(data))
      .catch((error) => console.error('error', error));
  }, [video, youtube]);

  return (
    <StyledCommentList>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </StyledCommentList>
  );
};

export default Comments;
