import React, {useState, useRef} from 'react';
import Player from 'react-player';
import './styles.css';

const VideoPlayer = ({ videoSrc }) => {
    const playerRef = useRef(null); // Ref to store the player instance

    // Function to handle getting the internal player instance
    const handleGetInternalPlayer = () => {
        // Call getInternalPlayer() on the player reference to get the underlying video player instance
        const internalPlayer = playerRef.current.getInternalPlayer();

        // Log the internal player instance to the console
        console.log('Internal Player:', internalPlayer);
    };

    // Function to handle toggling fullscreen
    const handleToggleFullscreen = () => {
        // Call getInternalPlayer() on the player reference to get the underlying video player instance
        const internalPlayer = playerRef.current.getInternalPlayer();

        if (internalPlayer) {
            // Check if fullscreen is supported by the internal player
            if (internalPlayer.requestFullscreen) {
                // Toggle fullscreen mode
                if (!document.fullscreenElement) {
                    internalPlayer.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            } else {
                // Fullscreen is not supported
                console.log('Fullscreen is not supported by this player.');
            }
        }
    };


    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // const handleVideoPlay = () => {
    //     setIsPlaying(true);
    // };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };
    const handleFullscreenChange = (state) => {
        console.log(state);
        setIsFullscreen(state);
    };

    return (
        <div className="video-container">
            <Player ref={playerRef} // Assign the ref to the ReactPlayer component
                    url={videoSrc}
                    controls={true}
                    playing={true}
                    muted={true}
                    // width={1280}
                    // height={720}
                width='100%'
                height='100%'
                    config={{
                        file: {
                            attributes: {
                                controlsList: 'nodownload' // Disable download button
                            }
                        },
                        fullscreen: false, // Disable fullscreen
                    }}

                // onFullscreenChange={handleFullscreenChange}
                // onPlay={handlePlay}
            />
            {/*<button onClick={handleToggleFullscreen}>Toggle Fullscreen</button>*/}
        </div>
    );
};

export default VideoPlayer;
