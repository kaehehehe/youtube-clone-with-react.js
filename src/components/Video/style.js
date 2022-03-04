import styled from 'styled-components';

export const StyledVideo = styled.li`
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  background-color: aliceblue;
`;

export const Duration = styled.div`
  font-size: 12px;
  color: var(--white-color);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  padding: 5px 8px;
  position: absolute;
  top: ${({ height }) => `${height - 25}px`};
  right: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 13px;
`;

export const VideoMetadata = styled.div`
  .title {
    font-size: 14px;
  }

  .channel-name,
  .published-at {
    font-size: 12px;
    color: var(--gray-color);
  }

  .channel-name {
    margin-top: 5px;
  }

  .published-at {
  }
`;

export const MetadataWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 3px;
  color: var(--gray-color);

  .published-at {
    margin-left: 3px;
  }
`;
