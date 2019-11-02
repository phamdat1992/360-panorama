let processor = {
    config: {
        1 :{
            url: "./asset/img/1.jpg",
            map: [
                {
                    id: 2,
                    px: 0.0,
                    py: 0.8,
                    initDy: 0.17,
                },
                {
                    id: 'a3',
                    px: 0.0,
                    py: 0.67,
                    initDy: 0.1,
                },
                {
                    id: 'b3',
                    px: 0.128,
                    py: 0.8,
                    initDy: -0.2,
                },
                {
                    id: 'b4',
                    px: 0.19,
                    py: 0.68,
                    initDy: -0.1,
                },
            ],
            initDy: -0.17,
        },
        2: {
            url: "./asset/img/2.jpg",
            map: [
                {
                    id: 1,
                    px: 0.43,
                    py: 0.8,
                    initDy: -0.3,
                },
                {
                    id:'a3',
                    px: -0.05,
                    py: 0.74,
                    initDy: 0.1,
                },
                {
                    id: 'b3',
                    px: 0.2,
                    py: 0.76,
                    initDy: -0.3,
                },
                {
                    id: 'a4',
                    px: -0.2,
                    py: 0.74,
                    initDy: 0.5,
                },
                {
                    id: 'b4',
                    px: 0.2,
                    py: 0.67,
                    initDy: -0.1,
                },
            ]
        },
        a3: {
            url: "./asset/img/3a.jpg",
            map: [
                {
                    id: 2,
                    px: 0.56,
                    py: 0.85,
                    initDy: -0.3,
                },
                {
                    id: 'a4',
                    px: -0.2,
                    py: 0.74,
                    initDy: 0.5,
                },
                {
                    id: 1,
                    px: 0.56,
                    py: 0.67,
                    initDy: -0.3,
                },
                {
                    id: 'a5',
                    px: -0.2,
                    py: 0.64,
                    initDy: 0.3,
                },
            ]
        },
        a4: {
            url: "./asset/img/4a.jpg",
            map: [
                {
                    id: 'a3',
                    px: 0.162,
                    py: 0.8,
                    initDy: -0.15,
                },
                {
                    id: 'a5',
                    px: -0.33,
                    py: 0.74,
                    initDy: 0.3,
                },
                {
                    id: 2,
                    px: 0.3,
                    py: 0.77,
                    initDy: -0.15,
                },
                {
                    id: 'b3',
                    px: 0.265,
                    py: 0.65,
                    initDy: -0.4,
                },
            ]
        },
        a5: {
            url: "./asset/img/5a.jpg",
            map: [
                {
                    id: 'a4',
                    px: -0.65,
                    py: 0.77,
                    initDy: 0,
                },
                {
                    id: 'a3',
                    px: -0.65,
                    py: 0.67,
                    initDy: -0.15,
                },
            ]
        },
        b3: {
            url: "./asset/img/3b.jpg",
            map: [
                {
                    id: 'b4',
                    px: -0.6,
                    py: 0.8,
                    initDy: -0.1,
                },
                {
                    id: '2',
                    px: -0.1,
                    py: 0.8,
                    initDy: 0.48,
                },
                {
                    id: 'b5',
                    px: 0.58,
                    py: 0.68,
                    initDy: 0.7,
                },
                {
                    id: 1,
                    px: -0.2,
                    py: 0.75,
                    initDy: -0.5,
                },
                {
                    id: 'a4',
                    px: -0.01,
                    py: 0.65,
                    initDy: 0.3,
                },
                {
                    id: 'a5',
                    px: -0.03,
                    py: 0.6,
                    initDy: 0.1,
                },
            ]
        },
        b4: {
            url: "./asset/img/4b.jpg",
            map: [
                {
                    id: 'b5',
                    px: 0.5,
                    py: 0.74,
                    initDy: 0.57,
                },
                {
                    id: 'b3',
                    px: -0.22,
                    py: 0.78,
                    initDy: 0.2,
                },
                {
                    id: 'b7',
                    px: 0.5,
                    py: 0.58,
                    initDy: -0.2,
                },
                {
                    id: 'b6',
                    px: 0.5,
                    py: 0.66,
                    initDy: 0.4,
                },
                {
                    id: 2,
                    px: -0.22,
                    py: 0.68,
                    initDy: 0.48,
                },
            ]
        },
        b5: {
            url: "./asset/img/5b.jpg",
            map: [
                {
                    id: 'b4',
                    px: 0.02,
                    py: 0.8,
                    initDy: 0.1,
                },
                {
                    id: 'b6',
                    px: -0.45,
                    py: 0.74,
                    initDy: 0.4,
                },
                {
                    id: 'b7',
                    px: -0.48,
                    py: 0.62,
                    initDy: -0.2,
                },
            ]
        },
        b6: {
            url: "./asset/img/6b.jpg",
            map: [
                {
                    id: 'b5',
                    px: 0.2,
                    py: 0.76,
                    initDy: 0.18,
                },
                {
                    id: 'b7',
                    px: -0.3,
                    py: 0.74,
                    initDy: -0.2,
                },
                {
                    id: 'b4',
                    px: 0.2,
                    py: 0.67,
                    initDy: 0.1,
                },
            ]
        },
        b7: {
            url: "./asset/img/7b.jpg",
            map: [
                {
                    id: 'b6',
                    px: -0.1,
                    py: 0.8,
                    initDy: -0.02,
                },
                {
                    id: 'b5',
                    px: -0.1,
                    py: 0.71,
                    initDy: 0.18,
                },
                {
                    id: 'b4',
                    px: -0.1,
                    py: 0.62,
                    initDy: 0.1,
                },
            ]
        },
    },

    initEvent: function() {
        this.image.addEventListener("load", function(){
            this.height = this.panorama.offsetHeight * 10.0 / 8.0;
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
        this.currentId = 1;
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