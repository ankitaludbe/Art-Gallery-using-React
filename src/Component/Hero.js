import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const VideoPlayer = () => {
    return (
        <div className='Hero'>
            <video width="100%" height="100%" controls={false} autoPlay muted loop>
                <source src="/HeroVideo.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;