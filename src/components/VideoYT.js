import React from 'react'
import YouTube from 'react-youtube'

const VideoYT=(parms)=>{
      const opts = {
        // height: '390',
        // width: '640',
        // playerVars: { // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1
        // }
      };
      console.log('vidId',parms)
      return (
        <YouTube
          videoId={parms.vId}
          opts={opts}
          onReady={_onReady}
        />
      );


    const _onReady=(event) =>{
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
}

export default VideoYT
