export type Order =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };



export const getOrderState = (order: Order): "initial" | "inWork" | "buyingSupplies" | "producing" | "fullfilled" => order.state;

const getSum = (order: Order): number => order.sum;

console.log(
  getOrderState({
    state: "inWork",
    sum: 1,
    workerId: 1,
  })
);

console.log(
  getSum({
    state: "inWork",
    sum: 1,
    workerId: 1,
  })
);
