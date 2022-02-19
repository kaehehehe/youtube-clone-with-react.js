import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import VideoList from './components/VideoList';

const Main = styled.main`
  width: calc(100% - 70px);
  background-color: var(--dark-black-color);
  color: var(--white-color);
  margin-left: 80px;
`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getRequestOptions = { method: 'GET', redirect: 'follow' };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=KR&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      })
      .catch((error) => console.error('error', error));
  }, []);

  return (
    <>
      <Header />
      <SideNavbar />
      <Main>
        <VideoList videos={videos} />
      </Main>
    </>
  );
};

export default App;
