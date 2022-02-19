interface Dog {
    name: string;
    age: number;
    breed: string;
    dietary?: string;
  }
  

  type NoAge = Omit<Dog, "age">;
  function groupByID<T, K extends keyof T>(
    items: T[],
    key: K
  ): Record<string, Omit<T, K>> {
    return items.reduce((a, item) => {
      const newObj = { ...item };
      delete newObj[key];
      return {
        ...a,
        [(item[key] as unknown) as string]: newObj,
      };
    }, {});
  }
  
  console.log(
    groupByID(
      [
        { id: 1, foo: 1 },
        { id: 2, foo: 2 },
      ],
      "id"
    )
  );