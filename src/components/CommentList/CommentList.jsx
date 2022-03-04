import React, { useEffect, useState, useContext } from 'react';

import Comment from '../Comment/Comment';
import { GlobalContext } from '../../App';
import * as S from './style';

const CommentList = ({ video }) => {
  const { youtube } = useContext(GlobalContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    youtube
      .getCommentsData(video)
      .then((data) => setComments(data))
      .catch((error) => console.error('error', error));
  }, [video, youtube]);

  return (
    <S.Comments>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </S.Comments>
  );
};

export default CommentList;
