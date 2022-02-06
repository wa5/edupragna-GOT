// var a=1
// setInterval(()=>{
//     console.log(a++)
// },1000)
function stests() {
    var num;
    var inc = function (props) {
        num = props;
        console.log(num);
    };
    console.log(num);
    return [num, inc];
}
var _a = stests(), num = _a[0], inc = _a[1];
console.log(num);
console.log(inc(3));
console.log(num);
