let processor = {

    config: {
        1 :{
            url: "./asset/img/1.jpg",
            map: {
                left: {
                    id :2,
                    px: 0,
                },
            }
        },
        2: {
            url: "./asset/img/2.jpg",
            map: {
                right: {
                    id:1,
                    px: 0,
                },
                left: {
                    id:'a3',
                    px: 0,
                },
                up: {
                    id: 'b3',
                    px: 0,
                },
            }
        },
        a3: {
            url: "./asset/img/3a.jpg",
            map: {
                right: {
                    id: 2,
                    px: 0,
                },
                down: {
                    id: 'a4',
                    px: 0,
                },
            }
        },
        a4: {
            url: "./asset/img/4a.jpg",
            map: {
                up: {
                    id: 'a3',
                    px: 0,
                },
                down: {
                    id: 'a5',
                    px: 0,
                },
            }
        },
        a5: {
            url: "./asset/img/5a.jpg",
            map: {
                up: {
                    id: 'a4',
                    px: 0,
                }
            }
        },
        b3: {
            url: "./asset/img/3b.jpg",
            map: {
                up: {
                    id: 'b4',
                    px: 0,
                },
                down: {
                    id: '2',
                    px: 0,
                },
            }
        },
        b4: {
            url: "./asset/img/4b.jpg",
            map: {
                right: {
                    id: 'b5',
                    px: 0,
                },
                down: {
                    id: 'b3',
                    px: 0,
                },
            }
        },
        b5: {
            url: "./asset/img/5b.jpg",
            map: {
                left: {
                    id: 'b4',
                    px: 0,
                },
                right: {
                    id: 'b6',
                    px: 0,
                },
            }
        },
        b6: {
            url: "./asset/img/6b.jpg",
            map: {
                left: {
                    id: 'b5',
                    px: 0,
                },
                right: {
                    id: 'b7',
                    px: 0,
                },
            }
        },
        b7: {
            url: "./asset/img/7b.jpg",
            map: {
                left: {
                    id: 'b6',
                    px: 0,
                },
            }
        },
    },

    initEvent: function() {
        this.image.addEventListener("load", function(){
            this.height = this.panorama.offsetHeight * 10.0 / 8.0;
            this.width = this.image.width / this.image.height * this.height;
            let backgroundPx = parseInt((this.panorama.offsetHeight - this.height)/2, 10);

            this.panorama.style.backgroundSize = this.width + 'px' + ' ' + this.height + 'px';
            this.panorama.style.backgroundPosition = '0px' + ' ' + backgroundPx + 'px';
        }.bind(this), false);

        this.content.addEventListener("mousedown", function(){
            this.dragOn = true;
            this.xPos = event.pageX;
            this.yPos = event.pageY;
        }.bind(this), false);

        this.content.addEventListener("mouseup", function(){
            this.dragOn = false;
            this.xPos = 0;
            this.yPos = 0;
        }.bind(this), false);

        this.content.addEventListener("mousemove", function(){
            if(this.dragOn){
                let moveX = (this.xPos - event.pageX);
                let moveY = (this.yPos - event.pageY);
                this.xPos = event.pageX;
                this.yPos = event.pageY;

                let dx = parseInt(this.panorama.style.backgroundPositionX, 10);
                let dy = parseInt(this.panorama.style.backgroundPositionY, 10);
                if (isNaN(dx)) {
                    dx = 0;
                }
                if (isNaN(dy)) {
                    dy = 0;
                }
                let movex = dx - moveX;
                let movey = dy - moveY;
                let newPx = parseInt(movex, 10) % this.width;
                let newPy = parseInt(movey, 10);

                if (newPy > 0) {
                    newPy = 0;
                }
                if (newPy < this.panorama.offsetHeight - this.height) {
                    newPy = this.panorama.offsetHeight - this.height;
                }
                this.panorama.style.backgroundPositionX = newPx + "px";
                this.panorama.style.backgroundPositionY = newPy + "px";
            }
        }.bind(this), false);
    },

    doLoad: function() {
        this.panorama = document.getElementById("panorama");
        this.image = document.getElementById("image");
        this.content = document.getElementById("content");

        this.dragOn = false;
        this.xPos = 0;
        this.yPos = 0;
        this.height = 0;
        this.width = 0;

        this.initEvent();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    processor.doLoad();
});