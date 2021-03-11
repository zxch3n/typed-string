import { StringifyFrom } from "../";
import { Expect, Equal, ExpectExtends } from "./utils";

{
  const a = JSON.stringify({ a: 123 } as const);
  type TestA = Expect<Equal<typeof a, StringifyFrom<{ readonly a: 123 }>>>;
}

{
  const a = JSON.stringify({ a: 123 } as const);
  const output = JSON.parse(a);
  type TestA = Expect<Equal<typeof output, { readonly a: 123 }>>;
  type TestB = Expect<ExpectExtends<typeof a, string>>;
}

{
  const a = JSON.parse("hahaha");
  type TestA = Expect<Equal<typeof a, any>>;
}

{
  const a = JSON.parse("123" as StringifyFrom<number>);
  type TestA = Expect<Equal<typeof a, number>>;
}
