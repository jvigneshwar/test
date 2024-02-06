import React from 'react'
import "./Section1.css"

const Section1 = ({ section }) => {
  return (
    <>
      <div className={section === 1 ? 'section-1 section-1-active' : 'section-1'}>
        <div className='section-1-l1'>
          <div className='section-1-l11'>
            <div className='container-head-1'>Experienced staffs</div>
            <div className='container-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
          </div>
          <div className='section-1-wu'>Why&nbsp;us?</div>
          <div className='section-1-l11'>
            <div className='container-head-2'>10+ years Of Experience</div>
            <div className='container-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
          </div>
        </div>
        <div className='section-1-l2'>
          <div className='section-1-l21'>
            <div className='container-head-3'>Scientifically chosen curriculum</div>
            <div className='container-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
          </div>
          <div className='section-1-l21'>
            <div className='container-head-4'>Kids friendly Environment</div>
            <div className='container-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1