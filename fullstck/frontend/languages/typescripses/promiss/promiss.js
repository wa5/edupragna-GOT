console.log(1);
var mypromiss = new Promise(function (res, notresl) {
    var pro = false;
    if (!pro) {
        setTimeout(function () {
            res(3);
        }, 2000);
    }
    else {
        notresl("not resolved");
    }
});
var resolved = mypromiss
    .then(function (data) {
    console.log(data);
    return data;
})["catch"](function (data) {
    console.log(data);
    return data;
});
console.log(resolved);
console.log(resolved);
