let processor = {

    initEvent: function() {
        this.image.addEventListener("load", function(){
            this.height = this.panorama.offsetHeight * 10.0 / 8.0;
            this.width = this.image.width / this.image.height * this.height;

            this.panorama.style.backgroundSize = this.width + 'px' + ' ' + this.height + 'px';
        }.bind(this), false);

        this.panorama.addEventListener("mousedown", function(){
            this.dragOn = true;
            this.xPos = event.pageX;
            this.yPos = event.pageY;
        }.bind(this), false);

        this.panorama.addEventListener("mouseup", function(){
            this.dragOn = false;
            this.xPos = 0;
            this.yPos = 0;
        }.bind(this), false);

        this.panorama.addEventListener("mousemove", function(){
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