import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';

const Navbar = styled.nav`
  display: flex;
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

const HamburgerMenu = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

const Menu = styled.div`
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

const MenuName = styled.span`
  margin-top: 5px;
  font-size: 10px;
`;

const SideNavbar = ({ setShow }) => {
  return (
    <Navbar>
      <HamburgerMenu>
      <MdMenu size={24} onClick={() => setShow(true)} />
      </HamburgerMenu>
      <Menu>
        <MdHome size={24} />
        <MenuName>Home</MenuName>
      </Menu>
      <Menu>
        <MdExplore size={24} />
        <MenuName>Explore</MenuName>
      </Menu>
      <Menu>
        <MdSubscriptions size={24} />
        <MenuName>Subscriptions</MenuName>
      </Menu>
      <Menu>
        <MdVideoLibrary size={24} />
        <MenuName>Library</MenuName>
      </Menu>
    </Navbar>
  );
};

export default SideNavbar;
