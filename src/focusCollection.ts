import Focus from './focus';

export default class FocusCollection {
    collection: Focus[];
    constructor() {
        this.collection = [];
    }

    generateRandomFociWithinWindow() {
        const area = window.innerWidth * window.innerHeight;
        const pointCount = Math.floor(area / 100000);
        for (let i = 0; i < pointCount; i++) {
            this.collection.push(new Focus(
                window.innerWidth * Math.random(),
                window.innerHeight * Math.random()
            ));
        }
    }

    toPrimitiveArray() {
        return this.collection.map(focus => [focus.x, focus.y]);
    }
}
