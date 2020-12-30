/// <reference path="../dist/lib/lib.esnext.d.ts" />

import { expectType } from "tsd";

// String
"foobar".replaceAll(/foo/g, (substr, p1, p2) => {
  expectType<string>(substr);
  expectType<string | number>(p1);
  expectType<string | number>(p2);
  return "";
});
