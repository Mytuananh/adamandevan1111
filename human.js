class Human {
    constructor(_name, _gender,  _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    getNamehuman() {
        return this.name;
    }
    setNamehuman(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setNamesay(say) {
         console.log(say)
    }
    checkApple(apple) {
        return apple.getWeightapple();
    }
    getEatapple(apple) {
        apple.decreaseWeight();
        this.weight++;
    }

}