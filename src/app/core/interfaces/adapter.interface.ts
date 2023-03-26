export interface Adapter<T,R> {
  adapt(element: T): R
}
