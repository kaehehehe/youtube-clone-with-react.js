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

  .hamburger-menu {
    margin-bottom: 15px;
    cursor: pointer;
  }

  .icon {
    font-size: 24px;
    margin-bottom: 5px;
  }
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
  font-size: 10px;
`;

const SideNavbar = () => {
  return (
    <Navbar>
      <MdMenu className="hamburger-menu icon" />
      <Menu>
        <MdHome className="icon" />
        <MenuName>Home</MenuName>
      </Menu>
      <Menu>
        <MdExplore className="icon" />
        <MenuName>Explore</MenuName>
      </Menu>
      <Menu>
        <MdSubscriptions className="icon" />
        <MenuName>Subscriptions</MenuName>
      </Menu>
      <Menu>
        <MdVideoLibrary className="icon" />
        <MenuName>Library</MenuName>
      </Menu>
    </Navbar>
  );
};

export default SideNavbar;
