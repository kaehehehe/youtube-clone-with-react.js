import styled from 'styled-components';

export const StyledComment = styled.li`
  display: flex;
  padding-bottom: 20px;
`;

export const UserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UsernameWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Username = styled.span`
  font-size: 13px;
  color: var(--white-color);
  margin-right: 5px;
`;

export const PublishedAt = styled.span`
  font-size: 12px;
  color: var(--gray-color);
`;

export const Text = styled.p`
  font-size: 14px;
  color: var(--white-color);
  margin-bottom: 10px;
  max-width: 800px;
`;

export const Buttons = styled.div`
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