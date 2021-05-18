const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): Record<any, any> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};

interface ObjectRecord extends Record<number, number> {
  1: number;
  2: number;
}

const objectRecord: ObjectRecord = {
  1: 1,
  2: 2,
};
