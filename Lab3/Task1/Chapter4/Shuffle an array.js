function shuffle(array) {
    array.sort(() => Math.random() - 0.5); //not always random
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);