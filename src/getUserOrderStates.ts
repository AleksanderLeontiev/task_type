// eslint-disable-next-line @typescript-eslint/no-explicit-any
const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
  "az",
] as const;

type OrderState = typeof orderStates[number];

const getUserOrderStates = (orderStates: OrderState[]): OrderState[] => {
  const filteredStates = [] as OrderState[];
  orderStates.forEach((element) => {
    if (element !== "az" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
