function ran():void{
    var random:number=Math.floor(Math.random()*6+1)
    document.getElementById("root").innerHTML=random as any
}

var a1=10
function days(){
    var random:number=Math.floor(Math.random()*7+1)
   switch(random){
       case 1:
        document.getElementById("root2").innerHTML="monday"
        break;
        case 2:
        document.getElementById("root2").innerHTML="tusday"
        break;
        case 3:
        document.getElementById("root2").innerHTML="wednesday"
        break;
        case 4:
        document.getElementById("root2").innerHTML="thirday"
        break;
        case 5:
        document.getElementById("root2").innerHTML="friday"
        break;
        case 6:
        document.getElementById("root2").innerHTML="sat"
        break;
        case 7:
        document.getElementById("root2").innerHTML="sun"
        break;
   }
}

function headers(){
   var h2=document.createElement('h2')
   h2.innerHTML="hello im virtully attched"
   h2.style.backgroundColor="red"
   document.getElementById('root3').appendChild(h2)
}