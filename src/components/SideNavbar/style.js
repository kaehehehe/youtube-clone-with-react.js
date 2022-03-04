import styled from 'styled-components';

export const Navbar = styled.nav`
  display: ${({ selectedVideo }) => (selectedVideo ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 72px;
  height: 100%;
  background-color: var(--back-color);
  color: var(--white-color);
  text-align: center;
  padding-top: 15px;
  position: fixed;
  top: 0;

  .icon {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const HamburgerMenu = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--light-black-color);
  }
`;

export const MenuName = styled.span`
  margin-top: 5px;
  font-size: 10px;
`;