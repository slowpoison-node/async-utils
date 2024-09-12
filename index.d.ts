declare module '@slowpoison/async-utils' {
  namespace AsyncUtils {
    export class AsyncUtils {
      static callbackToPromise(method, callback): Promise<any>
    }
  }
  
  namespace GeneratorUtils {
    type AnyIterator<T, TRet, TNext> = AsyncIterator<T, TRet, TNext> | Iterator<T, TRet, TNext>
    export function first<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): T
    export function filter<T, TRet, TNext>(g: AnyIterator<T, TRet, TNext>, predicate: (value: T) => boolean): AsyncGenerator<T, TRet, TNext>
    export function map<T>(iterable: Iterable<T>, mapper: (value: T) => any): Generator<T>
  }
}
