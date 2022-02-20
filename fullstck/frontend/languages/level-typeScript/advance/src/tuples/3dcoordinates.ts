type ThreeDCor=[x:number,y:number,z:number]

function add3DCoordinates(c1:ThreeDCor,c2:ThreeDCor):ThreeDCor{
    return [c1[0]+c2[0],c1[1]+c2[1],c1[2]+c2[2]]
}

console.log( add3DCoordinates([0,10,0],[10,20,30]))