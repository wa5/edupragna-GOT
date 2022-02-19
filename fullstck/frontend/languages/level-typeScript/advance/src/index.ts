import { M } from './modules/dynamic/math'
import { path, path1 } from './modules/dynamic/testmath'
import {data,data2,data3} from './modules/static/static'
// import {watchFile} from 'fs'
// import {genertor} from 'shortid'
// genertor
//console.log(data,data3,data2)

//calling dynamic values
console.log(path)
path1.then((data:M)=>{
    console.log(data.add(2,7))
     })