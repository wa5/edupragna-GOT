import { M } from "./test";

var x = './test';

import(x).then((a:M) => {
  // `a` is imported and can be used here
  console.log("h",a.add(10,4))
});

export var f=(async()=>{
    const datau=await import(x)
    console.log(datau)
})()
