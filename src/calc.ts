type Equals<A, B> = A extends B ? (B extends A ? 'success' : never) : never;

type BuildTuple<L extends number, T extends any[] = []> = T extends {length: L;}
    ? T
    : BuildTuple<L, [...T, any]>;
//у массивов есть Length и поэтому мы используем infer
type Length<T extends any[]> = T extends { length: infer L } ? L : never;
// строим два кортежа
type Add<A extends number, B extends number> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>;

// берем  длину остаточных параметров от кортежа длиной А объединенного с кортежем B
// создавая большой кортеж длины A
type Subtract<A extends number, B extends number> = BuildTuple<A> extends [
        ...infer U,
        ...BuildTuple<B>
    ]
    ? Length<U>
    : never;

export type Plus = Equals<Add<1, 1>, 2>;
export type Minus = Equals<Subtract<2, 1>, 1>;
