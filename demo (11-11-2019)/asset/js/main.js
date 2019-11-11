let processor = {
    config: {
        f :{
            url: "./asset/img/f.jpg",
            map: [
                {
                    id: 'l',
                    px: 0.25,
                    py: 0.6,
                    initDy: -0.2,
                },
                {
                    id: 'r',
                    px: 0.72,
                    py: 0.6,
                    initDy: 0.5,
                },
                {
                    id: 'rm',
                    px: 0.51,
                    py: 0.52,
                    initDy: -0.4,
                },
                {
                    id: 'lt',
                    px: 0.41,
                    py: 0.48,
                    initDy: 0.4,
                },
                {
                    id: 'rt',
                    px: 0.51,
                    py: 0.48,
                    initDy: -0.4,
                },
                {
                    id: 'i1',
                    px: 0.472,
                    py: 0.48,
                    initDy: -0.3,
                },
            ],
            initDy: -0.35,
        },
        l: {
            url: "./asset/img/l.jpg",
            map: [
                {
                    id: 'f',
                    px: 0.7,
                    py: 0.65,
                    initDy: 0.4,
                },
                {
                    id:'r',
                    px: 0.7,
                    py: 0.55,
                    initDy: 0.42,
                },
                {
                    id: 'lt',
                    px: 0.42,
                    py: 0.5,
                    initDy: 0.4,
                },
                {
                    id: 'i1',
                    px: 0.49,
                    py: 0.52,
                    initDy: -0.3,
                },
            ]
        },
        r: {
            url: "./asset/img/r.jpg",
            map: [
                {
                    id: 'f',
                    px: 0.2,
                    py: 0.75,
                    initDy: -0.2,
                },
                {
                    id: 'l',
                    px: 0.2,
                    py: 0.6,
                    initDy: -0.15,
                },
                {
                    id: 'rm',
                    px: 0.42,
                    py: 0.55,
                    initDy: -0.3,
                },
                {
                    id: 'rt',
                    px: 0.42,
                    py: 0.5,
                    initDy: -0.33,
                },
                {
                    id: 'i1',
                    px: 0.37,
                    py: 0.5,
                    initDy: -0.3,
                },
            ]
        },
        lt: {
            url: "./asset/img/lt.jpg",
            map: [
                {
                    id: 'l',
                    px: 0.18,
                    py: 0.55,
                    initDy: 0.2,
                },
                {
                    id: 'rt',
                    px: -0.05,
                    py: 0.6,
                    initDy: -0.55,
                },
            ]
        },
        rm: {
            url: "./asset/img/rm.jpg",
            map: [
                {
                    id: 'rt',
                    px: -0.55,
                    py: 0.55,
                    initDy: -0.33,
                },
                {
                    id: 'f',
                    px: 0.02,
                    py: 0.52,
                    initDy: 0.1,
                },
                {
                    id: 'l',
                    px: 0.07,
                    py: 0.52,
                    initDy: 0.0,
                },
            ]
        },
        rt: {
            url: "./asset/img/rt.jpg",
            map: [
                {
                    id: 'rm',
                    px: -0.05,
                    py: 0.6,
                    initDy: 0.05,
                },
                {
                    id: 'lt',
                    px: 0.18,
                    py: 0.5,
                    initDy: 0.6,
                },
            ]
        },
        i1: {
            url: "./asset/img/i1.jpg",
            map: [
                {
                    id: 'i2',
                    px: 0.4,
                    py: 0.5,
                    initDy: 0.7,
                },
                {
                    id: 'r',
                    px: -0.15,
                    py: 0.53,
                    initDy: 0.3,
                },
            ]
        },
        i2: {
            url: "./asset/img/i2.jpg",
            map: [
                {
                    id: 'i1',
                    px: 0.9,
                    py: 0.7,
                    initDy: 0.18,
                },
                {
                    id: 'r',
                    px: 0.87,
                    py: 0.5,
                    initDy: -0.9,
                },
            ]
        },
    },

    initEvent: function() {
        this.image.addEventListener("load", function(){
            this.height = this.panorama.offsetHeight * 10.0 / 3.33;
            this.width = this.image.width / this.image.height * this.height;
            let backgroundPx = parseInt((this.panorama.offsetHeight - this.height)/2, 10);
            let dx = this.initDy * this.width;

            this.panorama.style.background = "url('" + this.image.src + "') repeat-x";
            this.panorama.style.backgroundSize = this.width + 'px' + ' ' + this.height + 'px';
            this.panorama.style.backgroundPosition = dx + "px " + backgroundPx + "px";

            this.initMoveIcon();
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

                this.updateMoveIcon(Math.round(newPx), Math.round(newPy));
                this.panorama.style.backgroundPositionX = newPx + "px";
                this.panorama.style.backgroundPositionY = newPy + "px";
            }
        }.bind(this), false);
    },

    removeLastEvent: function() {
        this.config[this.currentId].map.forEach(function(item){
            let e = this.eventControl[item.id];
            if (e.removeEventListener) {
                e.removeEventListener("click", () => {});
            } else if (e.detachEvent) {
                e.detachEvent("click", () => {});
            }
        }.bind(this), false);

        this.eventControl = [];
    },

    initMoveIcon: function() {
        this.control.innerHTML = '';
        this.config[this.currentId].map.forEach(function(item){
            let mx = parseInt(this.panorama.style.backgroundPositionX, 10);
            let my = parseInt(this.panorama.style.backgroundPositionY, 10);
            let dx = Math.round(item.px*this.width + mx)%this.width;
            let dy = Math.round(item.py*this.height + my)%this.height;

            if (dx <= this.panorama.offsetWidth - this.width) {
                dx += this.width;
            }

            this.control.innerHTML += "" +
                "<div class='move-icon' " +
                "id='" + item.id + "' " +
                "style='left: " + dx + "px; " +
                "top: " + dy + "px;'>" +
                "</div>";
        }.bind(this), false);

        this.config[this.currentId].map.forEach(function(item){
            this.eventControl[item.id] = document.getElementById(item.id);
        }.bind(this), false);

        this.config[this.currentId].map.forEach(function(item){
            let e = this.eventControl[item.id];
            e.addEventListener("click", function(){
                this.image.src = this.config[item.id].url;
                this.initDy = item.initDy;
                this.removeLastEvent();
                this.currentId = item.id;
            }.bind(this), false);
        }.bind(this), false);
    },

    updateMoveIcon: function(moveX, moveY) {
        this.config[this.currentId].map.forEach(function(item){
            let e = this.eventControl[item.id];
            let dx = (item.px*this.width) + moveX;
            let dy = (item.py*this.height) + moveY;

            dx = parseInt(dx, 10)%this.width;
            dy = parseInt(dy, 10)%this.height;

            if (dx <= this.panorama.offsetWidth - this.width) {
                dx += this.width;
            }

            dx = Math.round(dx);
            dy = Math.round(dy);
            e.style.left = dx.toString() + "px";
            e.style.top = dy.toString() + "px";
        }.bind(this));
    },

    doLoad: function() {
        this.panorama = document.getElementById("panorama");
        this.image = document.getElementById("image");
        this.content = document.getElementById("content");
        this.control = document.getElementById("control");
        this.currentId = 'f';
        this.eventControl = [];

        this.image.src = this.config[this.currentId].url;
        this.dragOn = false;
        this.xPos = 0;
        this.yPos = 0;
        this.height = 0;
        this.width = 0;
        this.initDy = 0;

        if (this.config[this.currentId].initDy) {
            this.initDy = this.config[this.currentId].initDy;
        }

        this.initEvent();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    processor.doLoad();
});