
import { omit } from "./omit";

describe("should return omit", () => {
    it("test omit return correct value", () => {
        const buyingSupplies = {
            state: "buyingSupplies",
            sum: 1,
            workerId: 2,
            suppliesSum: 3,
        };
        const result = omit(buyingSupplies, "sum");
        expect(result).toEqual({
            state: "buyingSupplies",
            suppliesSum: 3,
            workerId: 2,
        });
    });
});