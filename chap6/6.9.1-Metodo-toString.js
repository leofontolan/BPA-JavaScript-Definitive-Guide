let s = { x: 1, y: 1 }.toString();
console.log(s);


const obj = { 
    x: 1, 
    y: 1,
    TotalSum() {
        return this.x + this.y;
    }
};

console.log(obj.toString());


const num = 1;
console.log(num.toString());
console.log(typeof(num.toString()));


const arr = [1, 2, 3];
console.log(arr.toString());


const func = function() {
    return 1;
};
console.log(func.toString());