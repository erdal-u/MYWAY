import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoplay loop muted></video>
        <h1>NU BÖRJAR ÄVENTYRET</h1>
        <p> Vad väntar du på lets goo</p>
        <div className='hero-btns'>
            <Button 
             className="btns"
             buttonStyle="btn--outline" 
             buttonSize=" btn--large"> 
            LETS GOO
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primaary'
                buttonSize='btn--large'>
                    titta på trailer <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection