import React from 'react';
import logo from '../../images/logo.png';
import {
  MdMenu,
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdRestore,
  MdSlideshow,
  MdSchedule,
  MdThumbUpOffAlt,
  MdSmartDisplay,
  MdTheaters,
  MdSportsEsports,
  MdLightbulb,
  MdEmojiEvents,
  MdSettings,
  MdFlag,
  MdHelpOutline,
  MdAnnouncement,
  MdStream,
} from 'react-icons/md';

import * as S from './style';

const DetailedSideNavbar = ({ show, setShow }) => {
  const handleHamburgerMenu = () => {
    setShow(false);
    document.body.style.overflow = 'visible';
  };
  return (
    <S.Navbar show={show}>
      <S.Title>
        <MdMenu
          className="hamburger-menu"
          size={24}
          onClick={handleHamburgerMenu}
        />
        <S.Link href="#">
          <img src={logo} alt="youtube logo" />
          <h1>YouTube</h1>
        </S.Link>
      </S.Title>
      <S.Wrapper>
        <S.Section>
          <S.Menu className="focused">
            <MdHome size={24} />
            <span className="menu-name">Home</span>
          </S.Menu>
          <S.Menu>
            <MdExplore size={24} />
            <span className="menu-name">Explore</span>
          </S.Menu>
          <S.Menu>
            <MdSubscriptions size={24} />
            <span className="menu-name">Subscriptions</span>
          </S.Menu>
        </S.Section>
        <S.Section>
          <S.Menu>
            <MdVideoLibrary size={24} />
            <span className="menu-name">Library</span>
          </S.Menu>
          <S.Menu>
            <MdRestore size={24} />
            <span className="menu-name">History</span>
          </S.Menu>
          <S.Menu>
            <MdSlideshow size={24} />
            <span className="menu-name">Your videos</span>
          </S.Menu>
          <S.Menu>
            <MdSchedule size={24} />
            <span className="menu-name">Watch later</span>
          </S.Menu>
          <S.Menu>
            <MdThumbUpOffAlt size={24} />
            <span className="menu-name">Liked&nbsp;videos</span>
          </S.Menu>
        </S.Section>
        <S.Section>
          <h5>MORE FROM YOUTUBE</h5>
          <S.Menu>
            <MdSmartDisplay size={24} />
            <span className="menu-name">YouTube&nbsp;Premium</span>
          </S.Menu>
          <S.Menu>
            <MdTheaters size={24} />
            <span className="menu-name">Movies</span>
          </S.Menu>
          <S.Menu>
            <MdSportsEsports size={24} />
            <span className="menu-name">Gaming</span>
          </S.Menu>
          <S.Menu>
            <MdStream size={24} />
            <span className="menu-name">Live</span>
          </S.Menu>
          <S.Menu>
            <MdLightbulb size={24} />
            <span className="menu-name">Learning</span>
          </S.Menu>
          <S.Menu>
            <MdEmojiEvents size={24} />
            <span className="menu-name">Sports</span>
          </S.Menu>
        </S.Section>
        <S.Section>
          <S.Menu>
            <MdSettings size={24} />
            <span className="menu-name">Settings</span>
          </S.Menu>
          <S.Menu>
            <MdFlag size={24} />
            <span className="menu-name">Report&nbsp;history</span>
          </S.Menu>
          <S.Menu>
            <MdHelpOutline size={24} />
            <span className="menu-name">Help</span>
          </S.Menu>
          <S.Menu>
            <MdAnnouncement size={24} />
            <span className="menu-name">Send&nbsp;feedback</span>
          </S.Menu>
        </S.Section>
        <S.Footer>
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
          <S.Copyright>
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
          </S.Copyright>
        </S.Footer>
      </S.Wrapper>
    </S.Navbar>
  );
};

export default DetailedSideNavbar;
