export const replacement = new Map([
  [
    "lib.es5.d.ts",
    new Set([
      "eval",
      "ObjectConstructor",
      "CallableFunction",
      "IArguments",
      "JSON",
      "ArrayConstructor",
    ]),
  ],
  [
    "lib.es2015.collection.d.ts",
    new Set([
      "Map",
      "MapConstructor",
      "WeakMap",
      "WeakMapConstructor",
      "ReadonlyMap",
      "Set",
      "SetConstructor",
      "ReadonlySet",
    ]),
  ],
  [
    "lib.es2015.core.d.ts",
    new Set(["NumberConstructor", "ObjectConstructor", "String"]),
  ],
  ["lib.es2015.generator.d.ts", new Set(["Generator"])],
  [
    "lib.es2015.iterable.d.ts",
    new Set([
      "Iterator",
      "IterableIterator",
      "IArguments",
      "PromiseConstructor",
    ]),
  ],
  ["lib.es2015.promise.d.ts", new Set(["PromiseConstructor"])],
  ["lib.es2015.proxy.d.ts", new Set(["ProxyHandler"])],
  ["lib.es2015.reflect.d.ts", new Set(["Reflect"])],
  ["lib.es2017.object.d.ts", new Set(["ObjectConstructor"])],
  ["lib.es2018.asyncgenerator.d.ts", new Set(["AsyncGenerator"])],
  ["lib.es2018.asynciterable.d.ts", new Set(["AsyncIterator"])],
  ["lib.es2019.object.d.ts", new Set(["ObjectConstructor"])],
  ["lib.esnext.promise.d.ts", new Set(["AggregateError"])],
  ["lib.esnext.string.d.ts", new Set(["String"])],
]);
