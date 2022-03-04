import React from 'react';
import { MdMenu } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';

import * as S from './style';

const SideNavbar = ({ setShow, selectedVideo }) => {
  return (
    <S.Navbar selectedVideo={selectedVideo}>
      <S.HamburgerMenu>
        <MdMenu size={24} onClick={() => setShow(true)} />
      </S.HamburgerMenu>
      <S.Menu>
        <MdHome size={24} />
        <S.MenuName>Home</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdExplore size={24} />
        <S.MenuName>Explore</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdSubscriptions size={24} />
        <S.MenuName>Subscriptions</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdVideoLibrary size={24} />
        <S.MenuName>Library</S.MenuName>
      </S.Menu>
    </S.Navbar>
  );
};

export default SideNavbar;
