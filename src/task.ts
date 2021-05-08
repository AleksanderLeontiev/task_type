// eslint-disable-next-line @typescript-eslint/no-explicit-any

const orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fullfilled",
    "ass"
] as const;

type OrderState = typeof orderStates[number];

const getUserOrderStates = (orderStates: OrderState[]): OrderState[] => {
    const filteredStates = [] as OrderState[];
    orderStates.forEach((element) => {
        if (element !== "ass" && element !== "producing") {
            filteredStates.push(element);
        }
    });
    return filteredStates;
};


type Order =
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

const getOrderState = (order: Order): OrderState => order.state;

const getSum = (order: Order): number => order.sum;

console.log(getOrderState({
    state: "inWork",
    sum: 1,
    workerId: 1
}));

console.log(getSum({
    state: "inWork",
    sum: 1,
    workerId: 1
}));

const omit = <T extends Record<any, any>, K extends keyof T>(
    obj: T,
    keyToOmit: K
): Record<any, any> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [keyToOmit]: _, ...withoutKey } = obj;
    return withoutKey;
};

interface ObjectRecord extends Record<number, number> {
    1: number,
    2: number
}

const objectRecord: ObjectRecord = {
    1: 1,
    2: 2
};

console.log(objectRecord);
console.log(omit(objectRecord, 1));