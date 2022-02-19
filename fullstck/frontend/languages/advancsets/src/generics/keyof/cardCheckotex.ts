interface BaseEvent {
    time: number;
    user: string;
  }
  interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string };
    checkout: BaseEvent;
  }
  
  function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name]
  ): void {
    console.log([name, data]);
  }
  
  sendEvent("addToCart", {
    productID: "foo",
    user: "baz",
    quantity: 1,
    time: 10,
  });
  sendEvent("checkout", { time: 20, user: "bob" });