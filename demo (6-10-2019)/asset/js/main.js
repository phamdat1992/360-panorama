let processor = {
    config: {
        1 :{
            id: 1,
            url: "./asset/video/inside_01.mp4",
            playLeftToRight: false,
            map: {
                forward: 2,
                behind: 3,
            }
        },
        2: {
            id: 2,
            url: "./asset/video/inside_02.mp4",
            playLeftToRight: true,
            map: {
                behind: 1,
            }
        },
        3: {
            id: 3,
            url: "./asset/video/door.mp4",
            playLeftToRight: false,
            map: {
                forward: 1,
                behind: 6,
                left: 7,
                right: 10,
            }
        },
        4: {
            id: 4,
            url: "./asset/video/front_right.mp4",
            playLeftToRight: true,
            map: {
                left: 6,
                right: 10,
                forward: 3,
            }
        },
        5: {
            id: 5,
            url: "./asset/video/front_left.mp4",
            playLeftToRight: true,
            map: {
                left: 7,
                right: 6,
                forward: 3,
            }
        },
        6: {
            id: 6,
            url: "./asset/video/front.mp4",
            playLeftToRight: true,
            map: {
                left: 5,
                right: 4,
                forward: 3,
            }
        },
        7: {
            id: 7,
            url: "./asset/video/side_left.mp4",
            playLeftToRight: true,
            map: {
                left: 8,
                right: 5,
            }
        },
        8: {
            id: 8,
            url: "./asset/video/side_left_corner.mp4",
            playLeftToRight: true,
            map: {
                left: 9,
                right: 7,
            }
        },
        9: {
            id: 9,
            url: "./asset/video/side_right_corner.mp4",
            playLeftToRight: false,
            map: {
                left: 10,
                right: 8,
            }
        },
        10: {
            id: 10,
            url: "./asset/video/side_right.mp4",
            playLeftToRight: false,
            map: {
                left: 4,
                right: 9,
            }
        },
    },

    timerCallback: function() {
        if (this.video.readyState === 4) {
            if (this.residual !== undefined) {
                if (this.residual > 0) {
                    this.residual = (this.residual > 16) ? this.residual - 16 : 0;
                } else {
                    this.residual = (this.residual < -16) ? this.residual + 16 : 0;
                }
            }
            if (this.resetView === true) {
                this.video.currentTime = this.video.duration/2.0;
                this.resetView = false;
                this.videoSpeed = 0;
            } else if (this.residual === 0 || this.residual === undefined) {
                this.videoSpeed = 0;
            } else {
                if (this.videoSpeed !== 0) {
                    this.video.currentTime += 1 / this.fps * this.video.duration / 90 *this.videoSpeed;
                }
            }

            let angle = this.video.currentTime*90/this.video.duration;
            if (this.state.playLeftToRight === false) {
                angle = 90 - angle;
            }
            if (angle < 30) {
                if (this.state.map.left !== undefined) {
                    this.moveLeft.classList.remove("hidden-move-button");
                } else {
                    this.moveLeft.classList.add("hidden-move-button");
                }

                this.moveForward.classList.add("hidden-move-button");
                this.moveBack.classList.add("hidden-move-button");
                this.moveRight.classList.add("hidden-move-button");
            } else if (angle < 60) {
                if (this.state.map.forward !== undefined) {
                    this.moveForward.classList.remove("hidden-move-button");
                } else {
                    this.moveForward.classList.add("hidden-move-button");
                }
                if (this.state.map.behind !== undefined) {
                    this.moveBack.classList.remove("hidden-move-button");
                } else {
                    this.moveBack.classList.add("hidden-move-button");
                }

                this.moveLeft.classList.add("hidden-move-button");
                this.moveRight.classList.add("hidden-move-button");
            } else {
                if (this.state.map.right !== undefined) {
                    this.moveRight.classList.remove("hidden-move-button");
                } else {
                    this.moveRight.classList.add("hidden-move-button");
                }

                this.moveForward.classList.add("hidden-move-button");
                this.moveBack.classList.add("hidden-move-button");
                this.moveLeft.classList.add("hidden-move-button");
            }
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

    initEvent: function() {
        this.content.addEventListener("mousemove", function(e) {
            if (this.lastPoint !== undefined) {
                this.residual += (e.clientX - this.lastPoint);
                this.lastPoint = e.clientX;

                if (this.residual < 0) {
                    if (this.state.playLeftToRight === true) {
                        this.videoSpeed = this.defaultSpeed;
                    } else {
                        this.videoSpeed = -this.defaultSpeed;
                    }
                } else {
                    if (this.state.playLeftToRight === true) {
                        this.videoSpeed = -this.defaultSpeed;
                    } else {
                        this.videoSpeed = this.defaultSpeed;
                    }
                }
            }
        }.bind(this), false);
        this.content.addEventListener("mousedown", function(e) {
            if (this.lastPoint === undefined) {
                this.lastPoint = e.clientX;
                this.residual = 0;
            }
        }.bind(this), false);

        this.content.addEventListener("mouseup", function() {
            this.videoSpeed = 0.0;
            this.lastPoint = undefined;
        }.bind(this), false);

        this.moveLeft.addEventListener("click", function() {
            this.state = this.config[this.state.map.left];
            this.initView();
        }.bind(this), false);

        this.moveRight.addEventListener("click", function() {
            this.state = this.config[this.state.map.right];
            this.initView();
        }.bind(this), false);

        this.moveForward.addEventListener("click", function() {
            this.state = this.config[this.state.map.forward];
            this.initView();
        }.bind(this), false);

        this.moveBack.addEventListener("click", function() {
            this.state = this.config[this.state.map.behind];
            this.initView();
        }.bind(this), false);
    },

    initView: function() {
        this.video.src = this.state.url;
        this.video.pause();
        this.resetView = true;
    },

    doLoad: function() {
        this.content = document.getElementById("content");

        this.moveLeft = document.getElementById("move-left");
        this.moveRight = document.getElementById("move-right");
        this.moveForward = document.getElementById("move-forward");
        this.moveBack = document.getElementById("move-back");

        this.video = document.getElementById("video");
        this.canvas = document.getElementById("canvas");
        this.loading = document.getElementById("loading");
        this.ctx = this.canvas.getContext("2d");
        this.fps = 24;
        this.defaultSpeed = 45;
        this.videoSpeed = 0;
        this.state = this.config[6];
        this.lastPoint = undefined;

        this.initView();
        this.initEvent();
        this.timerCallback();
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
            targetWidth = viewWidth;
            targetHeight = viewHeight;

            xOfVideo = (viewWidth - targetWidth) / 2 ;
        }

        this.ctx.drawImage(this.video, xOfVideo, yOfVideo, targetWidth, targetHeight);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    processor.doLoad();
});