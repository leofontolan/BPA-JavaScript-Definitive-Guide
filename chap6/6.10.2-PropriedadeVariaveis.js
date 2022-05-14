let obj = {};
const PROPERTY_NAME = "p1";
obj[PROPERTY_NAME] = 1;
console.log(obj[PROPERTY_NAME]);


function computePropertyName() { return "p" + 2; }
obj[computePropertyName()] = 2;
console.log(obj["p2"]);


const PROPERTY = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
	 [PROPERTY]: 1,
	 [computePropertyName()]: 2
};
console.log(p.p1 + p.p2);