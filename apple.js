class Apple {
    constructor() {
        this.weight = 10;
        this.status = true;
    }
    getWeightapple() {
        return this.weight;
    }

    decreaseWeight() {
        if (this.status) {
            this.weight--;
        }
    }
    getIsempty() {
        if (this.weight === 0) {
            return !this.weight;
        }
    }
}