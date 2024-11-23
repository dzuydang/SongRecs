import React from 'react';
import './HomeBody.css';
import musicIcon from './img/undraw_Music_re_a2jk.png'

function HomeBody (){
    return(
        <div class="HomeBody">
            <div className='TuneDescription'>
                <h1>
                    Meet <span className='TuneLogo'>Tune</span>
                </h1>
                <p>
                Discover music that's truly you. 
                Tune analyzes your Spotify listening history to deliver personalized, 
                spot-on song recommendations that match your unique taste—because your music journey deserves more than just an algorithm. 
                </p>
            </div>
            <div className='HomeImage'>
                <img src={musicIcon} alt="Music Icon Homepage"/>
            </div>
            
        </div>
    )
}

export default HomeBody;