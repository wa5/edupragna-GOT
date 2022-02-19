interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  
  
  
  type NoStrings = Exclude<string | number | undefined, string>;
  type JustStrings = Extract<string | number | undefined, string>;
  type NoNull = NonNullable<string | Dog | undefined>;
  
  