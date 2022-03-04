import styled from 'styled-components';

export const StyledVideo = styled.li`
  display: flex;
  width: 70%;
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 650px) {
    padding: 0;
    margin: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const Thumbnail = styled.div`
  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;

export const VideoMetadata = styled.div`
  margin-left: 15px;

  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const PublishedAt = styled.p`
  font-size: 12px;
  color: var(--gray-color);
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  line-height: 25px;
`;

export const ChannelImg = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Channel = styled.p`
  font-size: 15px;
  color: var(--gray-color);
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: var(--gray-color);
`;
