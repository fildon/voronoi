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
        this.foci.generateRandomFociWithinWindow();
        this.tick();
    };

    draw() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        const delaunay = Delaunay.from(
            this.foci.toPrimitiveArray()
        );
        const voronoi = delaunay.voronoi(
            [0, 0, window.innerWidth, window.innerHeight]
        );

        for (let i = 0; i < this.foci.collection.length; i++) {
            this.ctx.beginPath();
            voronoi.renderCell(i, this.ctx);
            this.ctx.fillStyle = this.foci.collection[i].color;
            this.ctx.fill();
            this.ctx.stroke();
        }

        this.ctx.beginPath();
        delaunay.renderPoints(this.ctx);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    }

    tick() {
        setTimeout(() => this.tick(), 20);
        this.draw();
        this.foci.step();
    }
}
