function plunk<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "mimi", age: 12 },
  { name: "lg", age: 13 },
];
console.log(plunk(dogs, "age"));
console.log(plunk(dogs, "name"));
