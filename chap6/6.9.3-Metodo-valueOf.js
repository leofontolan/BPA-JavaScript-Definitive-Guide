let point = {
    x: 3,
    y: 4,
    valueOf: function() { return Math.hypot(this.x, this.y); }
};

Number(point) // => 5: valueOf() é usado para conversões em números

console.log(point > 4);
console.log(point > 5);
console.log(point < 6);