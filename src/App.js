import React, { useEffect, useState } from 'react';
import './App.css';
import Section0 from './components/Section0/Section0';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section6 from './components/Section6/Section6';
import Section5 from './components/Section5/Section5';
import Scrollable from './components/Scrollable/Scrollable';
import Nav from './components/Nav/Nav';

const App = () => {

  const [videoLoaded, setVideoLoaded] = useState({})
  const [loadingVideo, setLoadingVideo] = useState(true)
  const [section, setSection] = useState(-1);

  return (
    <>
      <Section0
        loadingVideo={loadingVideo}
        setLoadingVideo={setLoadingVideo}
        section={section}
        setSection={setSection}
        videoLoaded={videoLoaded}
        setVideoLoaded={setVideoLoaded}
      />
      <Section1
        section={section}
      />
      <Section2
        section={section}
      />
      <Section3
        section={section}
      />
      <Section4
        section={section}
        setVideoLoaded={setVideoLoaded}
      />
      <Section5
        section={section}
        setVideoLoaded={setVideoLoaded}
      />
      <Section6
        section={section}
        setVideoLoaded={setVideoLoaded}
      />
      <Scrollable
        setSection={setSection}
      />
      <Nav
        section={section}
      />
    </>
  );
};

export default App;
