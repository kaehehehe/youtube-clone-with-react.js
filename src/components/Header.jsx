import React, { useRef } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import userIcon from '../images/userIcon.jpg';
import { MdMenu } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { MdMic } from 'react-icons/md';
import { MdVideoCall } from 'react-icons/md';
import { MdApps } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';

const StyledHeader = styled.header`
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

const Title = styled.a`
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

const HamburgerMenu = styled.div`
  color: var(--white-color);
  padding: 0 25px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  input {
    width: 100%;
    height: 40px;
    background-color: #121212;
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

const StyledIcon = styled.div`
  background-color: var(--dark-black-color);
  height: 40px;
  width: 55px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
`;

const Icons = styled.div`
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

const Header = ({ setShow, searchVideos }) => {
  const inputRef = useRef(null);

  const handleInput = (e) => {
    const value = inputRef.current.value;
    if (e.key === 'Enter') {
      if (value === '') return;
      searchVideos(value);
    }
  };

  const handleClick = () => {
    const value = inputRef.current.value;
    if (value === '') return;
    searchVideos(value);
  };

  return (
    <StyledHeader>
      <Title href="#">
        <HamburgerMenu>
          <MdMenu size={24} onClick={() => setShow(true)} />
        </HamburgerMenu>
        <img src={logo} alt="youtube logo" />
        <h1>YouTube</h1>
      </Title>
      <SearchBar>
        <input
          type="search"
          placeholder="Search"
          ref={inputRef}
          onKeyUp={handleInput}
        />
        <button type="submit" onClick={handleClick}>
          <MdSearch className="icon" />
        </button>
        <StyledIcon>
          <MdMic className="icon" />
        </StyledIcon>
      </SearchBar>
      <Icons>
        <MdVideoCall className="icon" />
        <MdApps className="icon" />
        <MdNotifications className="icon" />
        <img src={userIcon} alt="user icon" className="icon" />
      </Icons>
    </StyledHeader>
  );
};

export default Header;
