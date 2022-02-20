interface Dog{
    name:string,
    age:number,
    bread:string,
    diet?:string

}
type NameAndAge=Pick<Dog,'name'|'age'>
type NameAndAge1=Omit<Dog,'name'|'age'>