var mytext = ''; //mt string 
var notext = mytext || 'hello world';
console.log(notext);
var prevevingmt = mytext !== null && mytext !== void 0 ? mytext : 'hi peopele'; //--ony if undefined null
console.log(prevevingmt);
