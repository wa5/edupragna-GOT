var a = "apple";
var b = "boll";
var c = "cat";
var d = "dog";
var arr = ["apple1", "boll", "cat", "dog"];
var app = arr[0], boll = arr[1]; //destursing of arrays
console.log(a);
console.log(arr[0]);
arr[arr.length] = "eliphant";
console.log(arr);
var arrnum = new Array(1, 2, 4);
arrnum.push(12);
console.log(arrnum);
var arr1 = [{ a: 3, b: "boll" }, { a: 3, b: "cat" }, { a: 3, c: "dog" }, { a: 3 }];
var found = arr1.filter(function (data) { return data.b === "boll"; });
console.log(found);
var found2 = arr1.find(function (data) { return data.b === "boll"; });
console.log(found2);
var arrt = [1, 2, 3, 4, 5];
var reducer = (function (previous, current) { return previous + current; });
console.log(arrt.reduce(reducer));
