import React, { useState } from 'react'
import Navbar from './Component/NavBar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/programs/programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/footer/Footer'
import VideoPlayer from './Component/VideoPlaayer/VideoPlayer'

const App = () => {
  const [playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='WHat we offer'/>
      <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='Testimonials' title='what students say'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in Touch'/>
       <Contact/>
       <Footer/>
      </div>
       <VideoPlayer playState ={playState} setPlaySate={setPlayState}/>
    </div>
  )
}

export default App