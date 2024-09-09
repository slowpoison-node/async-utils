declare module '@slowpoison/async-utils' {
  export function first(iterable: Iterable<T>, predicate: (value: T) => boolean): T
  export function *filter(iterable: Iterable<T>, predicate: (value: T) => boolean): IterableIterator<T>
  export function *map(iterable: Iterable<T>, mapper: (value: T) => any): IterableIterator<T>
}
