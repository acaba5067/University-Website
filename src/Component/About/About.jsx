import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'onClick={()=>{ setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About Uuiversity</h3>
            <h2>Nurturing Tomorrow Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque beatae unde facere eaque accusamus ad minima doloribus quia tempora commodi dolore incidunt suscipit consectetur, illum quam vel earum laboriosam?</p>
        </div>
    </div>
  )
}

export default About