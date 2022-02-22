import React, { useEffect, useState, createContext } from 'react';
import styled from 'styled-components';
import './App.css';
import DetailedSideNavbar from './components/DetailedSideNavbar';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import VideoList from './components/VideoList';
import WatchVideo from './components/WatchVideo';

export const GlobalContext = createContext(null);

const Main = styled.main`
  width: ${({ selectedVideo }) =>
    selectedVideo ? '100%' : 'calc(100% - 70px)'};
  background-color: var(--dark-black-color);
  color: var(--white-color);
  margin-left: ${({ selectedVideo }) => (selectedVideo ? '0' : '80px')};
  padding: ${({ selectedVideo }) => selectedVideo && '0 30px'};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .getMostPopularVideos()
      .then((data) => setVideos(data))
      .catch((error) => console.error('error', error));
  }, [youtube]);

  const searchVideos = (inputValue) => {
    youtube
      .getSearchVideos(inputValue)
      .then((data) => {
        setSearched(true);
        setVideos(data);
        setSelectedVideo(null);
      })
      .catch((error) => console.error('error', error));
  };

  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <GlobalContext.Provider value={{ searched, youtube }}>
      <Header setShow={setShow} searchVideos={searchVideos} />
      <SideNavbar selectedVideo={selectedVideo} />
      <DetailedSideNavbar show={show} setShow={setShow} />
      <Main selectedVideo={selectedVideo}>
        {selectedVideo ? (
          <Container>
            <WatchVideo video={selectedVideo} />
          </Container>
        ) : (
          <VideoList
            videos={videos}
            searched={searched}
            handleSelectedVideo={handleSelectedVideo}
          />
        )}
      </Main>
    </GlobalContext.Provider>
  );
};

export default App;
