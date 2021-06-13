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

export const filterOnlyInitialAndInWorkOrder = (
  order: Order
): Extract<Order, { state: "initial" | "inWork" }> | null => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};

const work: Order = {
  state: "inWork",
  sum: 1,
  workerId: 22,
};

