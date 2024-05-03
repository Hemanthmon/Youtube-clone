// YT object

// video-display
console.log(YT);

function onPlayerReady(e) {
    e.target.playVideo();
    // console.log(YT);
}

window.addEventListener('load', () => {
    let videoId = 'o7X82vwBAbw';
    if (YT) {
        new YT.Player('video-display', {
            height: "500",
            width: "1000",
            videoId,
            events: {
                onReady: onPlayerReady,
            }
        })
    }
}

)
