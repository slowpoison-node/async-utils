declare module '@slowpoison/async-utils' {
  namespace AsyncUtils {
    export class AsyncUtils {
      static callbackToPromise(method, callback): Promise<any>
    }
  }
  namespace GeneratorUtils {
    export function first<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): T
    export function filter<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): Generator<T>
    export function map<T>(iterable: Iterable<T>, mapper: (value: T) => any): Generator<T>
  }
}
