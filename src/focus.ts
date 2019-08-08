export default class Focus {
    public heading: number;
    constructor(public x: number, public y: number) {
        this.heading = Math.random() * 2 * Math.PI;
    }

    public step() {
        this.x = this.x + Math.cos(this.heading);
        this.y = this.y + Math.sin(this.heading);

        if (this.x < 0 || this.x > window.innerWidth || this.y < 0 || this.y > window.innerHeight) {
            this.heading = Math.random() * 2 * Math.PI;
            this.x = Math.max(Math.min(this.x, window.innerWidth), 0);
            this.y = Math.max(Math.min(this.y, window.innerHeight), 0);
        }
    }
}
