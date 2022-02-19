import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import DetailedSideNavbar from './components/DetailedSideNavbar';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import VideoList from './components/VideoList';
import WatchVideo from './components/WatchVideo';

const Main = styled.main`
  width: calc(100% - 70px);
  background-color: var(--dark-black-color);
  color: var(--white-color);
  margin-left: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const searchVideos = (inputValue) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${inputValue}&type=video&key=${API_KEY}`,
      getRequestOptions
    )
      .then((res) => res.json())
      .then((res) =>
        res.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      )
      .then((items) => {
        setSearched(true);
        setVideos(items);
      })
      .catch((error) => console.error('error', error));
  };

  const handleSelectedVideo = (video) => {
    console.log('clicked');
    setSelectedVideo(video);
  };

  return (
    <>
      <Header setShow={setShow} searchVideos={searchVideos} />
      <SideNavbar selectedVideo={selectedVideo} />
      <DetailedSideNavbar show={show} setShow={setShow} />
      <Main>
        {selectedVideo ? (
          <Container>
            <WatchVideo selectedVideo={selectedVideo} />
          </Container>
        ) : (
          <VideoList
            videos={videos}
            searched={searched}
            handleSelectedVideo={handleSelectedVideo}
          />
        )}
      </Main>
    </>
  );
};

export default App;
