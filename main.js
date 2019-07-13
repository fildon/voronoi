const Voronoi = function () {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.foci = [];

    this.start = () => {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.generateFoci();
        this.drawFoci();
    }

    this.generateFoci = () => {
        const area = this.canvas.height * this.canvas.width;
        const pointCount = Math.floor(area / 100000);
        for (let i = 0; i < pointCount; i++){
            this.generateFocus();
        }
    }

    this.generateFocus = () => {
        this.foci.push(new Focus());
    }

    this.drawFoci = () => {
        this.clearCanvas();
        this.foci.forEach(focus => {
            focus.draw();
        });
    }

    this.clearCanvas = () => {
        // TODO
    }
};

const Focus = function() {
    this.x = window.innerWidth * Math.random();
    this.y = window.innerHeight * Math.random();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.draw = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Voronoi().start();
}, false)
