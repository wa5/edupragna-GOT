interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  
 
  type ReadonlyDog = Readonly<Dog>;