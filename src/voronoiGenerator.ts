import Focus from './focus';

export default class VoronoiGenerator {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    foci: Focus[];
    constructor() {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.foci = [];
    }

    start() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.generateFoci();
        this.drawFoci();
    };

    generateFoci() {
        const area = this.canvas.height * this.canvas.width;
        const pointCount = Math.floor(area / 100000);
        for (let i = 0; i < pointCount; i++) {
            this.generateFocus();
        }
    };

    generateFocus() {
        this.foci.push(new Focus(this.canvas));
    };

    drawFoci() {
        this.clearCanvas();
        this.foci.forEach(focus => {
            focus.draw();
        });
    };

    clearCanvas() {
        // TODO
    };
}
