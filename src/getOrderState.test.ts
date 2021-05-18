import { Order, getOrderState } from "./getOrderState";

describe("getOrderState is work", () => {
  it("getOrderState return correct value", () => {
    const initial: Order = {
      state: "initial",
      sum: 1,
    };

    const buyingSupplies: Order = {
      state: "buyingSupplies",
      sum: 1,
      workerId: 2,
      suppliesSum: 3,
    };

    expect(getOrderState(initial)).toBe("initial");
    expect(getOrderState(buyingSupplies)).toBe("buyingSupplies");
  });
});
