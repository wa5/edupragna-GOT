interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  

  type RequiredDog = Required<Dog>;
