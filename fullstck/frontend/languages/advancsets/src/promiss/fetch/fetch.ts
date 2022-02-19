import fetch from 'node-fetch'

fetch('./data/data.json')
.then((a)=>{return a.json()})
.then((b)=>{console.log(b)})