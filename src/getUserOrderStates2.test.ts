import { getUserOrderStates } from "./getUserOrderStates2";

describe("should return getUserOrderStates2", () => {
  it("test getUserOrderStates2 return correct", () => {
    expect(
      getUserOrderStates([
        "initial",
        "inWork",
        "buyingSupplies",
        "producing",
        "fullfilled",
      ])
    ).toEqual(["initial", "inWork", "fullfilled"]);
  });
});
