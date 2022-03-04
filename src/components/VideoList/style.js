import styled from 'styled-components';

export const StyledVideoList = styled.ul`
  background-color: var(--dark-black-color);
  text-align: start;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 30px;
  display: ${({ searched }) => (searched ? 'flex' : 'grid')};
  flex-direction: column;
  align-items: ${({ searched }) => searched && 'center'};
  justify-content: ${({ searched }) => searched && 'center'};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-bottom: 30px;
`;