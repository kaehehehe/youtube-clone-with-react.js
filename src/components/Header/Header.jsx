import React, { useRef } from 'react';
import logo from '../../images/logo.png';
import userIcon from '../../images/userIcon.jpg';
import { MdMenu } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { MdMic } from 'react-icons/md';
import { MdVideoCall } from 'react-icons/md';
import { MdApps } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';

import * as S from './style';

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
    <S.StyledHeader>
      <S.Title href="#">
        <S.HamburgerMenu>
          <MdMenu size={24} onClick={() => setShow(true)} />
        </S.HamburgerMenu>
        <img src={logo} alt="youtube logo" />
        <h1>YouTube</h1>
      </S.Title>
      <S.SearchBar>
        <input
          type="search"
          placeholder="Search"
          ref={inputRef}
          onKeyUp={handleInput}
        />
        <button type="submit" onClick={handleClick}>
          <MdSearch className="icon" />
        </button>
        <S.StyledIcon>
          <MdMic className="icon" />
        </S.StyledIcon>
      </S.SearchBar>
      <S.Icons>
        <MdVideoCall className="icon" />
        <MdApps className="icon" />
        <MdNotifications className="icon" />
        <img src={userIcon} alt="user icon" className="icon" />
      </S.Icons>
    </S.StyledHeader>
  );
};

export default Header;
