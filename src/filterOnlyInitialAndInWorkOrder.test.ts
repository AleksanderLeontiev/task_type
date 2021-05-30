import {
    Order,
    filterOnlyInitialAndInWorkOrder,
} from "./filterOnlyInitialAndInWorkOrder";

describe("should return filterOnlyInitialAndInWorkOrder", () => {
    it("test filterOnlyInitialAndInWorkOrder return correct value", () => {
        const initial: Order = {
            state: "initial",
            sum: 2,
        };

        expect(filterOnlyInitialAndInWorkOrder(initial)).toEqual(initial);

        const buyingSupplies: Order = {
            state: "buyingSupplies",
            sum: 3,
            workerId: 4,
            suppliesSum: 5,
        };
        expect(filterOnlyInitialAndInWorkOrder(buyingSupplies)).toEqual(null);
    });
});
