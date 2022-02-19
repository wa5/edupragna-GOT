interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  interface DogOptnal {
    name?: string;
    age?: number;
    breed?: string;
    dietary?: string;
  }

  const overi=(dog:Dog,dogOverriding:DogOptnal):Dog=>{
      return ({
        ...dog,
        ...dogOverriding
      }
       
      )
  }
  //hear if u r not using overiding give {}
  console.log(overi({name: "dogyy",
    age:4,
    breed: "hhh",
    dietary: "gfdf"},{}))
    console.log(overi({name: "dogyy",
    age:4,
    breed: "hhh",
    dietary: "gfdf"},{age:8}))