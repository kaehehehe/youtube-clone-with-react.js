import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { MdMenu } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { MdRestore } from 'react-icons/md';
import { MdSlideshow } from 'react-icons/md';
import { MdSchedule } from 'react-icons/md';
import { MdThumbUpOffAlt } from 'react-icons/md';
import { MdSmartDisplay } from 'react-icons/md';
import { MdTheaters } from 'react-icons/md';
import { MdSportsEsports } from 'react-icons/md';
import { MdStream } from 'react-icons/md';
import { MdLightbulb } from 'react-icons/md';
import { MdEmojiEvents } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { MdFlag } from 'react-icons/md';
import { MdHelpOutline } from 'react-icons/md';
import { MdAnnouncement } from 'react-icons/md';

const Navbar = styled.nav`
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
    color: darkgray;
  }
`;

const Title = styled.div`
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

const Link = styled.a`
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

const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--back-color);
  overflow-y: scroll;
  margin-top: 10px;
`;

const Menu = styled.div`
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--light-black-color);
  margin: 0 13px 10px 0;
  padding-bottom: 10px;
`;

const Footer = styled(Section)`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: bold;
  color: darkgray;

  p {
    margin-left: 18px;
    margin-bottom: 10px;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: gray;
  padding-bottom: 70px;
`;

const DetailedSideNavbar = ({ show, setShow }) => {
  const handleHamburgerMenu = () => {
    setShow(false);
    document.body.style.overflow = 'visible';
  };
  return (
    <Navbar show={show}>
      <Title>
        <MdMenu
          className="hamburger-menu"
          size={24}
          onClick={handleHamburgerMenu}
        />
        <Link href="#">
          <img src={logo} alt="youtube logo" />
          <h1>YouTube</h1>
        </Link>
      </Title>
      <Wrapper>
        <Section>
          <Menu className="focused">
            <MdHome size={24} />
            <span className="menu-name">Home</span>
          </Menu>
          <Menu>
            <MdExplore size={24} />
            <span className="menu-name">Explore</span>
          </Menu>
          <Menu>
            <MdSubscriptions size={24} />
            <span className="menu-name">Subscriptions</span>
          </Menu>
        </Section>
        <Section>
          <Menu>
            <MdVideoLibrary size={24} />
            <span className="menu-name">Library</span>
          </Menu>
          <Menu>
            <MdRestore size={24} />
            <span className="menu-name">History</span>
          </Menu>
          <Menu>
            <MdSlideshow size={24} />
            <span className="menu-name">Your videos</span>
          </Menu>
          <Menu>
            <MdSchedule size={24} />
            <span className="menu-name">Watch later</span>
          </Menu>
          <Menu>
            <MdThumbUpOffAlt size={24} />
            <span className="menu-name">Liked&nbsp;videos</span>
          </Menu>
        </Section>
        <Section>
          <h5>MORE FROM YOUTUBE</h5>
          <Menu>
            <MdSmartDisplay size={24} />
            <span className="menu-name">YouTube&nbsp;Premium</span>
          </Menu>
          <Menu>
            <MdTheaters size={24} />
            <span className="menu-name">Movies</span>
          </Menu>
          <Menu>
            <MdSportsEsports size={24} />
            <span className="menu-name">Gaming</span>
          </Menu>
          <Menu>
            <MdStream size={24} />
            <span className="menu-name">Live</span>
          </Menu>
          <Menu>
            <MdLightbulb size={24} />
            <span className="menu-name">Learning</span>
          </Menu>
          <Menu>
            <MdEmojiEvents size={24} />
            <span className="menu-name">Sports</span>
          </Menu>
        </Section>
        <Section>
          <Menu>
            <MdSettings size={24} />
            <span className="menu-name">Settings</span>
          </Menu>
          <Menu>
            <MdFlag size={24} />
            <span className="menu-name">Report&nbsp;history</span>
          </Menu>
          <Menu>
            <MdHelpOutline size={24} />
            <span className="menu-name">Help</span>
          </Menu>
          <Menu>
            <MdAnnouncement size={24} />
            <span className="menu-name">Send&nbsp;feedback</span>
          </Menu>
        </Section>
        <Footer>
          <p>
            About Press Copyright
            <br />
            Contact us Creators
            <br />
            Advertise Deelopers
            <br />
          </p>
          <p>
            Terms Privacy Policy &amp; Safety
            <br />
            How YouTube works
            <br />
            Test new features
            <br />
          </p>
          <Copyright>
            ©2022 Google LLC
            <br />
            CEO:Sundar Pichai
            <br />
            Address: 1600 Amphitheatre
            <br />
            Parkway, Mountain View, CA 94043,
            <br />
            USA.
            <br />
            Phone: 080-822-1450(free)
          </Copyright>
        </Footer>
      </Wrapper>
    </Navbar>
  );
};

export default DetailedSideNavbar;
