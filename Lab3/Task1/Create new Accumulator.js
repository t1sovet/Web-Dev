function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('How much to add?', 0);
    };

}
let accumulator = new Accumulator(1);