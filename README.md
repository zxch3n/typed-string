# Typed String

> Use JSON.parse & JSON.stringify safely

## Usage

```typescript
import 'typed-string'

/**
 * Get special string type `StringifyFrom<T>` after JSON.stringify.
 */

// const a: StringifyFrom<{ a: number; }>
const a = JSON.stringify({a: 123}) 

/**
 *  Infer parsed object type
 */

// const b: {a: number}
const b = JSON.parse(a) 

/**
 *  It will fallback to any if no types are matched
 */

// const c: any
const c = JSON.parse('"normal string"'); 

// const d: {v: number}
const d = JSON.parse("{v: 123}" as StringifyFrom<{v: number}>); 
```

It exposes `StringifyFrom<T>` type to global. StringifyFrom<T> is just string type:

```typescript
type StringifyFrom<T> = string & {
    toString: () => StringifyFrom<T>;
};
```