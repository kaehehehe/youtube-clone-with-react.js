import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
  height: 56px;
  background-color: var(--back-color);
  color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-black-color);
  position: fixed;
  top: 0;
  z-index: 90;
`;

export const Title = styled.a`
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    width: auto;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  h1 {
    font-size: 23px;
    color: var(--white-color);
  }
`;

export const HamburgerMenu = styled.div`
  color: var(--white-color);
  padding: 0 25px;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  input {
    width: 100%;
    height: 40px;
    background-color: var(--input-black-color);
    color: var(--white-color);
    border: 1px solid var(--light-black-color);
    padding-left: 10px;
    font-size: 16px;
  }

  button {
    width: 85px;
    height: 40px;
    background-color: var(--light-black-color);
    color: var(--white-color);
    margin-right: 10px;
  }

  .icon {
    font-size: 24px;
  }
`;

export const StyledIcon = styled.div`
  background-color: var(--dark-black-color);
  height: 40px;
  width: 55px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 24px;
    margin-right: 30px;
  }

  img {
    border-radius: 50%;
    width: auto;
    height: 35px;
  }
`;