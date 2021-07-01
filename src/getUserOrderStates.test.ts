import { getUserOrderStates } from "./getUserOrderStates";

describe("should return getUserOrderStates", () => {
  it("test getUserOrderStates retuen correct value", () => {
    const result = getUserOrderStates([
      "initial",
      "inWork",
      "buyingSupplies",
      "producing",
      "fullfilled",
    ]);
    expect(result).toEqual(["initial", "inWork", "fullfilled"]);
  });
});
