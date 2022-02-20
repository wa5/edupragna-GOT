interface Props {
    a?: number;
    b?: string;
  }
   
  const obj:Props={a:8}
   
  //const obj2: Required<Props> = { a: 5 };
  const obj2: Partial<Props> = { a: 5 };