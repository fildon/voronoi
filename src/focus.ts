export default class Focus {
    x: number;
    y: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.x = window.innerWidth * Math.random();
        this.y = window.innerHeight * Math.random();
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        this.ctx.fill();
    };
}
