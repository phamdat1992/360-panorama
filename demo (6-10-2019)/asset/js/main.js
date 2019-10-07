let processor = {
    timerCallback: function() {
        if(this.video.readyState === 4) {
            this.video.currentTime += 1 / this.fps * this.videoSpeed;
        } else {
            this.video.currentTime = 0;
        }

        if (this.video.duration <= this.video.currentTime) {
            this.video.currentTime = this.video.duration;
        }

        if (this.video.currentTime <= 0) {
            this.video.currentTime = 0;
        }

        if (!(this.video.ended || this.video.currentTime === 0)) {
            this.computeFrame();
        }

        setTimeout(function() {
            this.timerCallback();
        }.bind(this), 1000/this.fps);
    },

    initVideoEvent: function() {
        this.rightButton.addEventListener("click", function() {
            this.videoSpeed = this.defaultSpeed;
        }.bind(this), false);

        this.leftButton.addEventListener("click", function() {
            this.videoSpeed = -this.defaultSpeed;
        }.bind(this), false);
    },

    doLoad: function() {
        this.leftButton = document.getElementById("left");
        this.rightButton = document.getElementById("right")
        this.video = document.getElementById("video");
        this.canvas = document.getElementById("myCanvas");
        this.loading = document.getElementById("loading");
        this.ctx = this.canvas.getContext("2d");
        this.fps = 24;
        this.defaultSpeed = 3;
        this.videoSpeed = 0;

        const mediaSource = new MediaSource();
        this.video.src = URL.createObjectURL(mediaSource);
        mediaSource.addEventListener('sourceopen', function(){
            URL.revokeObjectURL(this.video.src);
            const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="vp09.00.10.08"');

            // If video is preloaded already, fetch will return immediately a response
            // from the browser cache (memory cache). Otherwise, it will perform a
            // regular network fetch.
            fetch('./asset/video/clip.mp4', { mode: "no-cors" })
                .then(response => response.arrayBuffer())
                .then(data => {
                    // Append the data into the new sourceBuffer.
                    sourceBuffer.appendBuffer(data);
                    this.video.addEventListener("canplaythrough", function(){
                        this.timerCallback();
                        this.initVideoEvent();
                        this.loading.classList.add("hidden-loading");
                    }.bind(this), { once: true });
                })
                .catch(error => {
                    // TODO: Show "Video is not available" message to user.
                });
        }.bind(this), { once: true });
    },

    computeFrame: function() {
        let videoWidth = this.video.videoWidth;
        let videoHeight = this.video.videoHeight;
        let viewHeight = this.canvas.height;
        let viewWidth = this.canvas.width;

        let ratio = videoWidth / videoHeight;

        let targetWidth, targetHeight;
        let yOfVideo = 0;
        let xOfVideo = 0;

        if ( videoWidth > videoHeight ){
            targetWidth = viewWidth;
            targetHeight = viewWidth / ratio;
            yOfVideo = (viewHeight - targetHeight) / 2 ;
        }else{
            targetWidth = viewHeight;
            targetHeight = viewHeight * ratio;

            xOfVideo = (viewWidth - targetWidth) / 2 ;
        }

        this.ctx.drawImage(this.video, xOfVideo, yOfVideo, targetWidth, targetHeight);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    processor.doLoad();
});