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
  const [isCooldown, setCooldown] = useState(false);

  const handleKeyPress = (event) => {
    if (!isCooldown) {
      let f = 0;
      if (event.key === 'ArrowUp') {
        f = 1;
        setSection(pre => {
          if (pre > 0)
            return pre - 1
          else
            return pre
        })
      } else if (event.key === 'ArrowDown') {
        f = 1;
        setSection(pre => {
          if (pre < 6)
            return pre + 1
          else
            return pre
        })
      }
      if (f === 1) {
        setCooldown(true);
        setTimeout(() => {
          setCooldown(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    };
  }, [isCooldown])

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
        isCooldown={isCooldown}
        setCooldown={setCooldown}
      />
      <Nav
        section={section}
      />
    </>
  );
};

export default App;
