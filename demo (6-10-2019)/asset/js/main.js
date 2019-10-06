let processor = {
    timerCallback: function() {
        this.video.currentTime += 1/this.fps*this.videoSpeed;

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

        this.video.oncanplaythrough = function () {
            this.timerCallback();
            this.initVideoEvent();
            this.loading.classList.add("hidden-loading");
        }.bind(this);
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