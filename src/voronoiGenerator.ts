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
            this.ctx.fillStyle = this.colorOfPolygon(voronoi.cellPolygon(i));
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

    colorOfPolygon(poly) {
        let area = this.areaOfPolygon(poly);
        let normalisedArea = Math.min(area / 40000, 1);
        let hue = 230 - 230 * normalisedArea; // 230 is 'blue'
        let saturation = 200 * Math.abs(normalisedArea - 0.5) + "%";
        let lightness = 100 * Math.abs(normalisedArea - 0.5) + "%";
        return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
    }

    areaOfPolygon(poly) {
        // https://www.mathopenref.com/coordpolygonarea.html
        if (!poly.length) {
            return null;
        }
        let result = 0;
        for (let i = 0; i < poly.length - 1; i++) {
            result += ((poly[i][0] * poly[i+1][1])
                - (poly[i][1] * poly[i+1][0]));
        }
        result += ((poly[poly.length - 1][0] * poly[0][1])
            - (poly[poly.length - 1][1] * poly[0][0]));
        return Math.abs(result) / 2;
    }
}
