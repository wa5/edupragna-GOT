
// import fetch from 'node-fetch'
// fetch('./data/data.json')
// .then((a)=>{return a.json()})
// .then((b)=>{console.log(b)})
import { RequestInfo, RequestInit } from "node-fetch";

const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => fetch(url, init));
fetch('./data/data.json')
.then((a)=>{return a.json()})
 .then((b)=>{console.log(b)})