let user = {
    nam: "John",
    years: 30
};

let { nam, years: age, isAdmin = false } = user;

alert(nam); // John
alert(age); // 30
alert(isAdmin); // false