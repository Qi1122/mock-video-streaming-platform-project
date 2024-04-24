// import React, { useState, useEffect } from 'react';
import Ranking from './Ranking';
import VideoPlayer from './VideoPlayer';
import './styles.css';
import Chat from "./Chat"; // Import CSS file for styling

const App = () => {

    return (
        <div className="app-container">
            <div>
                <VideoPlayer
                    // videoSrc={"video.mp4"}
                    videoSrc={"16mac_photobooth.mov"}
                    // videoSrc={"1610_1920x1200.mov"}
                    // videoSrc={"1691080p.mov"}
                />
                <div className="chat-container">
                    <Chat/>{}
                </div>
                <div className="input-box">
                    {/*<p>message or tip</p>*/}
                </div>
                <div className="ranking-floating-container">
                    <Ranking/> {/* Ensure that Ranking component is rendered here */}
                </div>
            </div>
            {/*<div className="bio-container">*/}
            {/*    <picture>*/}
            {/*        <img src="bio.jpg" alt="" />*/}
            {/*    </picture>*/}
            {/*</div>*/}
            <button className="send-button">
                Send
            </button>
            <button className="private-button">
                Start Private
            </button>
            <button className="send-tip-button">
                Send Tip
            </button>
        </div>
    );
};

export default App;


