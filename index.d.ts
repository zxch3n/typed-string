type StringifyFrom<T> = string & {
  toString: () => StringifyFrom<T>;
};

export { StringifyFrom };

declare global {
  interface JSON {
    stringify<T = any>(
      value: T,
      replacer?: (this: any, key: string, value: T) => any,
      space?: string | number
    ): StringifyFrom<T>;

    parse<T = any>(
      text: StringifyFrom<T>,
      reviver?: (this: any, key: string, value: T) => any
    ): T;
  }
}
