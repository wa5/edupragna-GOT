
//this is example for fs @types/node
import {writeFileSync} from 'fs'
//import {generate} from 'shortid'
import {a,M} from './modules/test'
//generate
var x = './modules/test';

import(x).then((a:M) => {
  // `a` is imported and can be used here
  console.log("h",a.add(10,4))
});


  (async()=>{
      const datau=await import(x)
      console.log("l",datau)
  })()
  
console.log(a)