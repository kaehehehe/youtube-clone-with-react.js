import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: var(--back-color);
  width: 240px;
  height: 100vh;
  color: var(--white-color);
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? '0px' : '-240px')};
  transition: all 150ms linear;
  z-index: 100;

  h5 {
    font-size: 14px;
    margin: 0 0 10px 20px;
    color: var(--gray-color);
  }
`;

export const Title = styled.div`
  position: sticky;
  top: 0;
  padding: 15px 0;
  background-color: var(--back-color);
  display: flex;
  align-items: center;
  width: 240px;

  .hamburger-menu {
    color: var(--white-color);
    font-size: 24px;
    margin: 0 20px;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  text-decoration: none;
  cursor: pointer;

  img {
    width: auto;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  h1 {
    font-size: 23px;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--back-color);
  overflow-y: scroll;
  margin-top: 10px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 20px;
  cursor: pointer;

  &.focused {
    background-color: var(--light-black-color);
  }

  .menu-name {
    font-size: 14px;
    padding-left: 20px;
  }

  &:hover {
    background-color: var(--light-black-color);
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--light-black-color);
  margin: 0 13px 10px 0;
  padding-bottom: 10px;
`;

export const Footer = styled(Section)`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: bold;
  color: var(--gray-color);

  p {
    margin-left: 18px;
    margin-bottom: 10px;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: var(--dark-gray-color);
  padding-bottom: 70px;
`;