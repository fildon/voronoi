import Point from "./point";

export default class Triangle {
    point1: Point;
    point2: Point;
    point3: Point;
    constructor(point1: Point, point2: Point, point3: Point) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
}
