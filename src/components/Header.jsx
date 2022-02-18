import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import userIcon from '../images/userIcon.jpg';
import { MdSearch } from 'react-icons/md';
import { MdMic } from 'react-icons/md';
import { MdVideoCall } from 'react-icons/md';
import { MdApps } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';

const StyledHeader = styled.header`
  width: calc(100vw - 70px);
  height: 56px;
  background-color: var(--back-color);
  color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-black-color);
  margin-left: 70px;
  position: fixed;
  top: 0;
  z-index: 90;
`;

const Title = styled.a`
  display: flex;
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

const Header = () => {
  return (
    <StyledHeader>
      <Title href="#">
        <img src={logo} alt="youtube logo" />
        <h1>YouTube</h1>
      </Title>
      <SearchBar>
        <input type="text" placeholder="Search" />
        <button type="button">
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
