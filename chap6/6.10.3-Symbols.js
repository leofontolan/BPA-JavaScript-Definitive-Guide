const extension = Symbol("my extension symbol");

let obj = {
	 [extension]: { /* dados de extensão armazenados neste objeto */ }
};
obj[extension].x = 0;

console.log(extension);
console.log(obj[extension].x);