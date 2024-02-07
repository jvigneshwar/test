import React, { useState } from 'react';
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
import Nav1 from './components/Nav1/Nav1';
import SectionIndicator from './components/SectionIndicator/SectionIndicator';

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
      {window.screen.width > 1024 &&
        <Scrollable
          setSection={setSection}
        /> 
      }
      <Nav
        section={section}
      />
      <Nav1
        section={section}
      />
      <SectionIndicator
        section={section}
      />
      {window.screen.width <= 1024 &&
        <div className={`sections-nav-controls ${section===-1 && 'sections-nav-controls-none'}  ${section===0 && 'sections-nav-controls-white'}`}>
          <div className='section-nav-btn' onClick={() => setSection(pre => pre > 0 ? pre - 1 : pre)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m14 7l-5 5m0 0l5 5"/></svg></div>
          <div className='section-nav-btn section-nav-btn-right' onClick={() => setSection(pre => pre < 6 ? pre + 1 : pre)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg></div>
        </div>
      }
    </>
  );
};

export default App;
