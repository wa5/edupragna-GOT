interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  

  type NameAndAge = Pick<Dog, "name" | "age">;