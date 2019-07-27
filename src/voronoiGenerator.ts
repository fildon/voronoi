import FocusCollection from './focusCollection';
import {Delaunay} from "d3-delaunay";

export default class VoronoiGenerator {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    foci: FocusCollection;
    constructor() {
        this.canvas =
            document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.foci = new FocusCollection();
    }

    start() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.foci.generateRandomFociWithinWindow();
        const delaunay = Delaunay.from(
            this.foci.toPrimitiveArray()
        );

        const voronoi = delaunay.voronoi(
            [0, 0, window.innerWidth, window.innerHeight]
        );

        for (let i = 0; i < this.foci.collection.length; i++) {
            this.ctx.beginPath();
            voronoi.renderCell(i, this.ctx);
            this.ctx.fillStyle = "hsl(" + (360 * Math.random()) + ", 100%, 50%)";
            this.ctx.fill();
            this.ctx.stroke();
        }

        this.ctx.beginPath();
        delaunay.renderPoints(this.ctx);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    };
}
