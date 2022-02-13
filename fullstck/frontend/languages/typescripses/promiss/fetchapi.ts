interface UserList{
    
login: string,
id: number,
node_id: string,
avatar_url: string,
// gravatar_id: string,
// url:string,
// html_url: string,
// followers_url: string,
// following_url: string,
// gists_url: string,
// starred_url: string,
// subscriptions_url:string,
// organizations_url:string,
// repos_url: string,
// events_url: string,
// received_events_url:string,
// type:string,
// site_admin: boolean
}[]


///third way
const getuserdata=async():Promise<UserList>=>{
    const listUser=await fetch('https://api.github.com/users')
    return  await listUser.json()
}
getuserdata().then((data)=>{
console.log(data)
})









//secnd way
// fetch('https://api.github.com/users')
// .then((data)=>{return data.json()})
// .then((data:UserList)=>{
   
//     var i;
//     for(i=0;i<19;i++){
//         var img=document.createElement('img')
//         img.src=data[i].avatar_url
//         document.getElementById("root").appendChild(img)
//     }
    
//     console.log(data[0].avatar_url)

// })





//first way
// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then((data)=>{return data.json()})
// .then((data)=>{console.log(data)})
