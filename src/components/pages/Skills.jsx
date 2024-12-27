import React from 'react';

import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    
  <section className='skills'>
    <div id='about'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Frontend development skills focus on building the user-facing part of a website or application. It involves expertise in HTML, CSS, and JavaScript to create interactive and responsive designs. Developers often use frameworks like React, process and manage complex UI components efficiently. </span>
        <div className='skillBars'>
          <div className='skillBar'>
              <img src={UIDesign} alt='' className='skillBarimg' />
              <div className='skillBarText'>
                  <h2>UI/UX Design</h2>
                  <p>UI design is about creating clean and user-friendly interfaces that look good and are easy to use.</p>
              </div>
          </div>
      

          <div className='skillBar'>
            <img src={WebDesign} alt='' className='skillBarimg' />
            <div className='skillBarText'>
                <h2> WebDesign</h2>
                <p>A website is a place where people find information, services, or connect with a brand online.</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={AppDesign} alt='' className='skillBarimg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>App design is about creating intuitive and visually appealing interfaces for a seamless user experience on mobile or desktop applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Skills
