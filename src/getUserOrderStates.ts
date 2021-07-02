// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
  "az",
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (
  orderStates1: OrderState[]
): Exclude<OrderState, "az" | "producing">[] => {
  const filteredStates = [] as Exclude<OrderState, "az" | "producing">[];
  orderStates1.forEach((element) => {
    if (element !== "az" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
