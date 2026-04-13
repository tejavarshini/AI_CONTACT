
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model ContactEmbedding
 * 
 */
export type ContactEmbedding = $Result.DefaultSelection<Prisma.$ContactEmbeddingPayload>
/**
 * Model ContactTimelineEvent
 * 
 */
export type ContactTimelineEvent = $Result.DefaultSelection<Prisma.$ContactTimelineEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contact.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactEmbedding`: Exposes CRUD operations for the **ContactEmbedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactEmbeddings
    * const contactEmbeddings = await prisma.contactEmbedding.findMany()
    * ```
    */
  get contactEmbedding(): Prisma.ContactEmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactTimelineEvent`: Exposes CRUD operations for the **ContactTimelineEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactTimelineEvents
    * const contactTimelineEvents = await prisma.contactTimelineEvent.findMany()
    * ```
    */
  get contactTimelineEvent(): Prisma.ContactTimelineEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contact: 'Contact',
    ContactEmbedding: 'ContactEmbedding',
    ContactTimelineEvent: 'ContactTimelineEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contact" | "contactEmbedding" | "contactTimelineEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      ContactEmbedding: {
        payload: Prisma.$ContactEmbeddingPayload<ExtArgs>
        fields: Prisma.ContactEmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactEmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactEmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>
          }
          findFirst: {
            args: Prisma.ContactEmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactEmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>
          }
          findMany: {
            args: Prisma.ContactEmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>[]
          }
          delete: {
            args: Prisma.ContactEmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>
          }
          update: {
            args: Prisma.ContactEmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.ContactEmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactEmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactEmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactEmbeddingPayload>[]
          }
          aggregate: {
            args: Prisma.ContactEmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactEmbedding>
          }
          groupBy: {
            args: Prisma.ContactEmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactEmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactEmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<ContactEmbeddingCountAggregateOutputType> | number
          }
        }
      }
      ContactTimelineEvent: {
        payload: Prisma.$ContactTimelineEventPayload<ExtArgs>
        fields: Prisma.ContactTimelineEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactTimelineEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactTimelineEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          findFirst: {
            args: Prisma.ContactTimelineEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactTimelineEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          findMany: {
            args: Prisma.ContactTimelineEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>[]
          }
          create: {
            args: Prisma.ContactTimelineEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          createMany: {
            args: Prisma.ContactTimelineEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactTimelineEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>[]
          }
          delete: {
            args: Prisma.ContactTimelineEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          update: {
            args: Prisma.ContactTimelineEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          deleteMany: {
            args: Prisma.ContactTimelineEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactTimelineEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactTimelineEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>[]
          }
          upsert: {
            args: Prisma.ContactTimelineEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTimelineEventPayload>
          }
          aggregate: {
            args: Prisma.ContactTimelineEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactTimelineEvent>
          }
          groupBy: {
            args: Prisma.ContactTimelineEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactTimelineEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactTimelineEventCountArgs<ExtArgs>
            result: $Utils.Optional<ContactTimelineEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contact?: ContactOmit
    contactEmbedding?: ContactEmbeddingOmit
    contactTimelineEvent?: ContactTimelineEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    timelineEvents: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timelineEvents?: boolean | ContactCountOutputTypeCountTimelineEventsArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountTimelineEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTimelineEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    importanceScore: number | null
  }

  export type ContactSumAggregateOutputType = {
    importanceScore: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    organization: string | null
    roleTitle: string | null
    sourceContext: string | null
    howCanHelp: string | null
    rawInput: string | null
    notes: string | null
    lastContacted: Date | null
    snoozedUntil: Date | null
    importanceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    organization: string | null
    roleTitle: string | null
    sourceContext: string | null
    howCanHelp: string | null
    rawInput: string | null
    notes: string | null
    lastContacted: Date | null
    snoozedUntil: Date | null
    importanceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    organization: number
    roleTitle: number
    sourceContext: number
    howCanHelp: number
    rawInput: number
    notes: number
    tags: number
    domains: number
    skills: number
    lastContacted: number
    snoozedUntil: number
    importanceScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    importanceScore?: true
  }

  export type ContactSumAggregateInputType = {
    importanceScore?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    organization?: true
    roleTitle?: true
    sourceContext?: true
    howCanHelp?: true
    rawInput?: true
    notes?: true
    lastContacted?: true
    snoozedUntil?: true
    importanceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    organization?: true
    roleTitle?: true
    sourceContext?: true
    howCanHelp?: true
    rawInput?: true
    notes?: true
    lastContacted?: true
    snoozedUntil?: true
    importanceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    organization?: true
    roleTitle?: true
    sourceContext?: true
    howCanHelp?: true
    rawInput?: true
    notes?: true
    tags?: true
    domains?: true
    skills?: true
    lastContacted?: true
    snoozedUntil?: true
    importanceScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    userId: string
    name: string
    organization: string | null
    roleTitle: string | null
    sourceContext: string | null
    howCanHelp: string | null
    rawInput: string
    notes: string | null
    tags: string[]
    domains: string[]
    skills: string[]
    lastContacted: Date | null
    snoozedUntil: Date | null
    importanceScore: number
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    organization?: boolean
    roleTitle?: boolean
    sourceContext?: boolean
    howCanHelp?: boolean
    rawInput?: boolean
    notes?: boolean
    tags?: boolean
    domains?: boolean
    skills?: boolean
    lastContacted?: boolean
    snoozedUntil?: boolean
    importanceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embeddings?: boolean | Contact$embeddingsArgs<ExtArgs>
    timelineEvents?: boolean | Contact$timelineEventsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    organization?: boolean
    roleTitle?: boolean
    sourceContext?: boolean
    howCanHelp?: boolean
    rawInput?: boolean
    notes?: boolean
    tags?: boolean
    domains?: boolean
    skills?: boolean
    lastContacted?: boolean
    snoozedUntil?: boolean
    importanceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    organization?: boolean
    roleTitle?: boolean
    sourceContext?: boolean
    howCanHelp?: boolean
    rawInput?: boolean
    notes?: boolean
    tags?: boolean
    domains?: boolean
    skills?: boolean
    lastContacted?: boolean
    snoozedUntil?: boolean
    importanceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    organization?: boolean
    roleTitle?: boolean
    sourceContext?: boolean
    howCanHelp?: boolean
    rawInput?: boolean
    notes?: boolean
    tags?: boolean
    domains?: boolean
    skills?: boolean
    lastContacted?: boolean
    snoozedUntil?: boolean
    importanceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "organization" | "roleTitle" | "sourceContext" | "howCanHelp" | "rawInput" | "notes" | "tags" | "domains" | "skills" | "lastContacted" | "snoozedUntil" | "importanceScore" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embeddings?: boolean | Contact$embeddingsArgs<ExtArgs>
    timelineEvents?: boolean | Contact$timelineEventsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      embeddings: Prisma.$ContactEmbeddingPayload<ExtArgs> | null
      timelineEvents: Prisma.$ContactTimelineEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      organization: string | null
      roleTitle: string | null
      sourceContext: string | null
      howCanHelp: string | null
      rawInput: string
      notes: string | null
      tags: string[]
      domains: string[]
      skills: string[]
      lastContacted: Date | null
      snoozedUntil: Date | null
      importanceScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    embeddings<T extends Contact$embeddingsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$embeddingsArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timelineEvents<T extends Contact$timelineEventsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$timelineEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly userId: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly organization: FieldRef<"Contact", 'String'>
    readonly roleTitle: FieldRef<"Contact", 'String'>
    readonly sourceContext: FieldRef<"Contact", 'String'>
    readonly howCanHelp: FieldRef<"Contact", 'String'>
    readonly rawInput: FieldRef<"Contact", 'String'>
    readonly notes: FieldRef<"Contact", 'String'>
    readonly tags: FieldRef<"Contact", 'String[]'>
    readonly domains: FieldRef<"Contact", 'String[]'>
    readonly skills: FieldRef<"Contact", 'String[]'>
    readonly lastContacted: FieldRef<"Contact", 'DateTime'>
    readonly snoozedUntil: FieldRef<"Contact", 'DateTime'>
    readonly importanceScore: FieldRef<"Contact", 'Int'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.embeddings
   */
  export type Contact$embeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    where?: ContactEmbeddingWhereInput
  }

  /**
   * Contact.timelineEvents
   */
  export type Contact$timelineEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    where?: ContactTimelineEventWhereInput
    orderBy?: ContactTimelineEventOrderByWithRelationInput | ContactTimelineEventOrderByWithRelationInput[]
    cursor?: ContactTimelineEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactTimelineEventScalarFieldEnum | ContactTimelineEventScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model ContactEmbedding
   */

  export type AggregateContactEmbedding = {
    _count: ContactEmbeddingCountAggregateOutputType | null
    _min: ContactEmbeddingMinAggregateOutputType | null
    _max: ContactEmbeddingMaxAggregateOutputType | null
  }

  export type ContactEmbeddingMinAggregateOutputType = {
    contactId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactEmbeddingMaxAggregateOutputType = {
    contactId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactEmbeddingCountAggregateOutputType = {
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactEmbeddingMinAggregateInputType = {
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactEmbeddingMaxAggregateInputType = {
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactEmbeddingCountAggregateInputType = {
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactEmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactEmbedding to aggregate.
     */
    where?: ContactEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmbeddings to fetch.
     */
    orderBy?: ContactEmbeddingOrderByWithRelationInput | ContactEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactEmbeddings
    **/
    _count?: true | ContactEmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactEmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactEmbeddingMaxAggregateInputType
  }

  export type GetContactEmbeddingAggregateType<T extends ContactEmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateContactEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactEmbedding[P]>
      : GetScalarType<T[P], AggregateContactEmbedding[P]>
  }




  export type ContactEmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactEmbeddingWhereInput
    orderBy?: ContactEmbeddingOrderByWithAggregationInput | ContactEmbeddingOrderByWithAggregationInput[]
    by: ContactEmbeddingScalarFieldEnum[] | ContactEmbeddingScalarFieldEnum
    having?: ContactEmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactEmbeddingCountAggregateInputType | true
    _min?: ContactEmbeddingMinAggregateInputType
    _max?: ContactEmbeddingMaxAggregateInputType
  }

  export type ContactEmbeddingGroupByOutputType = {
    contactId: string
    createdAt: Date
    updatedAt: Date
    _count: ContactEmbeddingCountAggregateOutputType | null
    _min: ContactEmbeddingMinAggregateOutputType | null
    _max: ContactEmbeddingMaxAggregateOutputType | null
  }

  type GetContactEmbeddingGroupByPayload<T extends ContactEmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactEmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactEmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactEmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], ContactEmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type ContactEmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactEmbedding"]>


  export type ContactEmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactEmbedding"]>

  export type ContactEmbeddingSelectScalar = {
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactEmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contactId" | "createdAt" | "updatedAt", ExtArgs["result"]["contactEmbedding"]>
  export type ContactEmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type ContactEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $ContactEmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactEmbedding"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contactId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactEmbedding"]>
    composites: {}
  }

  type ContactEmbeddingGetPayload<S extends boolean | null | undefined | ContactEmbeddingDefaultArgs> = $Result.GetResult<Prisma.$ContactEmbeddingPayload, S>

  type ContactEmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactEmbeddingCountAggregateInputType | true
    }

  export interface ContactEmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactEmbedding'], meta: { name: 'ContactEmbedding' } }
    /**
     * Find zero or one ContactEmbedding that matches the filter.
     * @param {ContactEmbeddingFindUniqueArgs} args - Arguments to find a ContactEmbedding
     * @example
     * // Get one ContactEmbedding
     * const contactEmbedding = await prisma.contactEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactEmbeddingFindUniqueArgs>(args: SelectSubset<T, ContactEmbeddingFindUniqueArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a ContactEmbedding
     * @example
     * // Get one ContactEmbedding
     * const contactEmbedding = await prisma.contactEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactEmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingFindFirstArgs} args - Arguments to find a ContactEmbedding
     * @example
     * // Get one ContactEmbedding
     * const contactEmbedding = await prisma.contactEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactEmbeddingFindFirstArgs>(args?: SelectSubset<T, ContactEmbeddingFindFirstArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingFindFirstOrThrowArgs} args - Arguments to find a ContactEmbedding
     * @example
     * // Get one ContactEmbedding
     * const contactEmbedding = await prisma.contactEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactEmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactEmbeddings
     * const contactEmbeddings = await prisma.contactEmbedding.findMany()
     * 
     * // Get first 10 ContactEmbeddings
     * const contactEmbeddings = await prisma.contactEmbedding.findMany({ take: 10 })
     * 
     * // Only select the `contactId`
     * const contactEmbeddingWithContactIdOnly = await prisma.contactEmbedding.findMany({ select: { contactId: true } })
     * 
     */
    findMany<T extends ContactEmbeddingFindManyArgs>(args?: SelectSubset<T, ContactEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a ContactEmbedding.
     * @param {ContactEmbeddingDeleteArgs} args - Arguments to delete one ContactEmbedding.
     * @example
     * // Delete one ContactEmbedding
     * const ContactEmbedding = await prisma.contactEmbedding.delete({
     *   where: {
     *     // ... filter to delete one ContactEmbedding
     *   }
     * })
     * 
     */
    delete<T extends ContactEmbeddingDeleteArgs>(args: SelectSubset<T, ContactEmbeddingDeleteArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactEmbedding.
     * @param {ContactEmbeddingUpdateArgs} args - Arguments to update one ContactEmbedding.
     * @example
     * // Update one ContactEmbedding
     * const contactEmbedding = await prisma.contactEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactEmbeddingUpdateArgs>(args: SelectSubset<T, ContactEmbeddingUpdateArgs<ExtArgs>>): Prisma__ContactEmbeddingClient<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactEmbeddings.
     * @param {ContactEmbeddingDeleteManyArgs} args - Arguments to filter ContactEmbeddings to delete.
     * @example
     * // Delete a few ContactEmbeddings
     * const { count } = await prisma.contactEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactEmbeddingDeleteManyArgs>(args?: SelectSubset<T, ContactEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactEmbeddings
     * const contactEmbedding = await prisma.contactEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactEmbeddingUpdateManyArgs>(args: SelectSubset<T, ContactEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactEmbeddings and returns the data updated in the database.
     * @param {ContactEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many ContactEmbeddings.
     * @example
     * // Update many ContactEmbeddings
     * const contactEmbedding = await prisma.contactEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactEmbeddings and only return the `contactId`
     * const contactEmbeddingWithContactIdOnly = await prisma.contactEmbedding.updateManyAndReturn({
     *   select: { contactId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactEmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of ContactEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingCountArgs} args - Arguments to filter ContactEmbeddings to count.
     * @example
     * // Count the number of ContactEmbeddings
     * const count = await prisma.contactEmbedding.count({
     *   where: {
     *     // ... the filter for the ContactEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends ContactEmbeddingCountArgs>(
      args?: Subset<T, ContactEmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactEmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactEmbeddingAggregateArgs>(args: Subset<T, ContactEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetContactEmbeddingAggregateType<T>>

    /**
     * Group by ContactEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactEmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactEmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: ContactEmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactEmbedding model
   */
  readonly fields: ContactEmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactEmbedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactEmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactEmbedding model
   */
  interface ContactEmbeddingFieldRefs {
    readonly contactId: FieldRef<"ContactEmbedding", 'String'>
    readonly createdAt: FieldRef<"ContactEmbedding", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactEmbedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactEmbedding findUnique
   */
  export type ContactEmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmbedding to fetch.
     */
    where: ContactEmbeddingWhereUniqueInput
  }

  /**
   * ContactEmbedding findUniqueOrThrow
   */
  export type ContactEmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmbedding to fetch.
     */
    where: ContactEmbeddingWhereUniqueInput
  }

  /**
   * ContactEmbedding findFirst
   */
  export type ContactEmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmbedding to fetch.
     */
    where?: ContactEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmbeddings to fetch.
     */
    orderBy?: ContactEmbeddingOrderByWithRelationInput | ContactEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactEmbeddings.
     */
    cursor?: ContactEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactEmbeddings.
     */
    distinct?: ContactEmbeddingScalarFieldEnum | ContactEmbeddingScalarFieldEnum[]
  }

  /**
   * ContactEmbedding findFirstOrThrow
   */
  export type ContactEmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmbedding to fetch.
     */
    where?: ContactEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmbeddings to fetch.
     */
    orderBy?: ContactEmbeddingOrderByWithRelationInput | ContactEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactEmbeddings.
     */
    cursor?: ContactEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactEmbeddings.
     */
    distinct?: ContactEmbeddingScalarFieldEnum | ContactEmbeddingScalarFieldEnum[]
  }

  /**
   * ContactEmbedding findMany
   */
  export type ContactEmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmbeddings to fetch.
     */
    where?: ContactEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmbeddings to fetch.
     */
    orderBy?: ContactEmbeddingOrderByWithRelationInput | ContactEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactEmbeddings.
     */
    cursor?: ContactEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmbeddings.
     */
    skip?: number
    distinct?: ContactEmbeddingScalarFieldEnum | ContactEmbeddingScalarFieldEnum[]
  }

  /**
   * ContactEmbedding update
   */
  export type ContactEmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactEmbedding.
     */
    data: XOR<ContactEmbeddingUpdateInput, ContactEmbeddingUncheckedUpdateInput>
    /**
     * Choose, which ContactEmbedding to update.
     */
    where: ContactEmbeddingWhereUniqueInput
  }

  /**
   * ContactEmbedding updateMany
   */
  export type ContactEmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactEmbeddings.
     */
    data: XOR<ContactEmbeddingUpdateManyMutationInput, ContactEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which ContactEmbeddings to update
     */
    where?: ContactEmbeddingWhereInput
    /**
     * Limit how many ContactEmbeddings to update.
     */
    limit?: number
  }

  /**
   * ContactEmbedding updateManyAndReturn
   */
  export type ContactEmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update ContactEmbeddings.
     */
    data: XOR<ContactEmbeddingUpdateManyMutationInput, ContactEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which ContactEmbeddings to update
     */
    where?: ContactEmbeddingWhereInput
    /**
     * Limit how many ContactEmbeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactEmbedding delete
   */
  export type ContactEmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
    /**
     * Filter which ContactEmbedding to delete.
     */
    where: ContactEmbeddingWhereUniqueInput
  }

  /**
   * ContactEmbedding deleteMany
   */
  export type ContactEmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactEmbeddings to delete
     */
    where?: ContactEmbeddingWhereInput
    /**
     * Limit how many ContactEmbeddings to delete.
     */
    limit?: number
  }

  /**
   * ContactEmbedding without action
   */
  export type ContactEmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmbedding
     */
    select?: ContactEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactEmbedding
     */
    omit?: ContactEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactEmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model ContactTimelineEvent
   */

  export type AggregateContactTimelineEvent = {
    _count: ContactTimelineEventCountAggregateOutputType | null
    _min: ContactTimelineEventMinAggregateOutputType | null
    _max: ContactTimelineEventMaxAggregateOutputType | null
  }

  export type ContactTimelineEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contactId: string | null
    type: string | null
    reason: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactTimelineEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contactId: string | null
    type: string | null
    reason: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactTimelineEventCountAggregateOutputType = {
    id: number
    userId: number
    contactId: number
    type: number
    reason: number
    message: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ContactTimelineEventMinAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
    type?: true
    reason?: true
    message?: true
    createdAt?: true
  }

  export type ContactTimelineEventMaxAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
    type?: true
    reason?: true
    message?: true
    createdAt?: true
  }

  export type ContactTimelineEventCountAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
    type?: true
    reason?: true
    message?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ContactTimelineEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTimelineEvent to aggregate.
     */
    where?: ContactTimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTimelineEvents to fetch.
     */
    orderBy?: ContactTimelineEventOrderByWithRelationInput | ContactTimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactTimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactTimelineEvents
    **/
    _count?: true | ContactTimelineEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactTimelineEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactTimelineEventMaxAggregateInputType
  }

  export type GetContactTimelineEventAggregateType<T extends ContactTimelineEventAggregateArgs> = {
        [P in keyof T & keyof AggregateContactTimelineEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactTimelineEvent[P]>
      : GetScalarType<T[P], AggregateContactTimelineEvent[P]>
  }




  export type ContactTimelineEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTimelineEventWhereInput
    orderBy?: ContactTimelineEventOrderByWithAggregationInput | ContactTimelineEventOrderByWithAggregationInput[]
    by: ContactTimelineEventScalarFieldEnum[] | ContactTimelineEventScalarFieldEnum
    having?: ContactTimelineEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactTimelineEventCountAggregateInputType | true
    _min?: ContactTimelineEventMinAggregateInputType
    _max?: ContactTimelineEventMaxAggregateInputType
  }

  export type ContactTimelineEventGroupByOutputType = {
    id: string
    userId: string
    contactId: string
    type: string
    reason: string | null
    message: string
    metadata: JsonValue | null
    createdAt: Date
    _count: ContactTimelineEventCountAggregateOutputType | null
    _min: ContactTimelineEventMinAggregateOutputType | null
    _max: ContactTimelineEventMaxAggregateOutputType | null
  }

  type GetContactTimelineEventGroupByPayload<T extends ContactTimelineEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactTimelineEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactTimelineEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactTimelineEventGroupByOutputType[P]>
            : GetScalarType<T[P], ContactTimelineEventGroupByOutputType[P]>
        }
      >
    >


  export type ContactTimelineEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    type?: boolean
    reason?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactTimelineEvent"]>

  export type ContactTimelineEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    type?: boolean
    reason?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactTimelineEvent"]>

  export type ContactTimelineEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    type?: boolean
    reason?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactTimelineEvent"]>

  export type ContactTimelineEventSelectScalar = {
    id?: boolean
    userId?: boolean
    contactId?: boolean
    type?: boolean
    reason?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ContactTimelineEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contactId" | "type" | "reason" | "message" | "metadata" | "createdAt", ExtArgs["result"]["contactTimelineEvent"]>
  export type ContactTimelineEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type ContactTimelineEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type ContactTimelineEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $ContactTimelineEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactTimelineEvent"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contactId: string
      type: string
      reason: string | null
      message: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["contactTimelineEvent"]>
    composites: {}
  }

  type ContactTimelineEventGetPayload<S extends boolean | null | undefined | ContactTimelineEventDefaultArgs> = $Result.GetResult<Prisma.$ContactTimelineEventPayload, S>

  type ContactTimelineEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactTimelineEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactTimelineEventCountAggregateInputType | true
    }

  export interface ContactTimelineEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactTimelineEvent'], meta: { name: 'ContactTimelineEvent' } }
    /**
     * Find zero or one ContactTimelineEvent that matches the filter.
     * @param {ContactTimelineEventFindUniqueArgs} args - Arguments to find a ContactTimelineEvent
     * @example
     * // Get one ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactTimelineEventFindUniqueArgs>(args: SelectSubset<T, ContactTimelineEventFindUniqueArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactTimelineEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactTimelineEventFindUniqueOrThrowArgs} args - Arguments to find a ContactTimelineEvent
     * @example
     * // Get one ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactTimelineEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactTimelineEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTimelineEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventFindFirstArgs} args - Arguments to find a ContactTimelineEvent
     * @example
     * // Get one ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactTimelineEventFindFirstArgs>(args?: SelectSubset<T, ContactTimelineEventFindFirstArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTimelineEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventFindFirstOrThrowArgs} args - Arguments to find a ContactTimelineEvent
     * @example
     * // Get one ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactTimelineEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactTimelineEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactTimelineEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactTimelineEvents
     * const contactTimelineEvents = await prisma.contactTimelineEvent.findMany()
     * 
     * // Get first 10 ContactTimelineEvents
     * const contactTimelineEvents = await prisma.contactTimelineEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactTimelineEventWithIdOnly = await prisma.contactTimelineEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactTimelineEventFindManyArgs>(args?: SelectSubset<T, ContactTimelineEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactTimelineEvent.
     * @param {ContactTimelineEventCreateArgs} args - Arguments to create a ContactTimelineEvent.
     * @example
     * // Create one ContactTimelineEvent
     * const ContactTimelineEvent = await prisma.contactTimelineEvent.create({
     *   data: {
     *     // ... data to create a ContactTimelineEvent
     *   }
     * })
     * 
     */
    create<T extends ContactTimelineEventCreateArgs>(args: SelectSubset<T, ContactTimelineEventCreateArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactTimelineEvents.
     * @param {ContactTimelineEventCreateManyArgs} args - Arguments to create many ContactTimelineEvents.
     * @example
     * // Create many ContactTimelineEvents
     * const contactTimelineEvent = await prisma.contactTimelineEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactTimelineEventCreateManyArgs>(args?: SelectSubset<T, ContactTimelineEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactTimelineEvents and returns the data saved in the database.
     * @param {ContactTimelineEventCreateManyAndReturnArgs} args - Arguments to create many ContactTimelineEvents.
     * @example
     * // Create many ContactTimelineEvents
     * const contactTimelineEvent = await prisma.contactTimelineEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactTimelineEvents and only return the `id`
     * const contactTimelineEventWithIdOnly = await prisma.contactTimelineEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactTimelineEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactTimelineEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactTimelineEvent.
     * @param {ContactTimelineEventDeleteArgs} args - Arguments to delete one ContactTimelineEvent.
     * @example
     * // Delete one ContactTimelineEvent
     * const ContactTimelineEvent = await prisma.contactTimelineEvent.delete({
     *   where: {
     *     // ... filter to delete one ContactTimelineEvent
     *   }
     * })
     * 
     */
    delete<T extends ContactTimelineEventDeleteArgs>(args: SelectSubset<T, ContactTimelineEventDeleteArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactTimelineEvent.
     * @param {ContactTimelineEventUpdateArgs} args - Arguments to update one ContactTimelineEvent.
     * @example
     * // Update one ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactTimelineEventUpdateArgs>(args: SelectSubset<T, ContactTimelineEventUpdateArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactTimelineEvents.
     * @param {ContactTimelineEventDeleteManyArgs} args - Arguments to filter ContactTimelineEvents to delete.
     * @example
     * // Delete a few ContactTimelineEvents
     * const { count } = await prisma.contactTimelineEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactTimelineEventDeleteManyArgs>(args?: SelectSubset<T, ContactTimelineEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactTimelineEvents
     * const contactTimelineEvent = await prisma.contactTimelineEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactTimelineEventUpdateManyArgs>(args: SelectSubset<T, ContactTimelineEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTimelineEvents and returns the data updated in the database.
     * @param {ContactTimelineEventUpdateManyAndReturnArgs} args - Arguments to update many ContactTimelineEvents.
     * @example
     * // Update many ContactTimelineEvents
     * const contactTimelineEvent = await prisma.contactTimelineEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactTimelineEvents and only return the `id`
     * const contactTimelineEventWithIdOnly = await prisma.contactTimelineEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactTimelineEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactTimelineEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactTimelineEvent.
     * @param {ContactTimelineEventUpsertArgs} args - Arguments to update or create a ContactTimelineEvent.
     * @example
     * // Update or create a ContactTimelineEvent
     * const contactTimelineEvent = await prisma.contactTimelineEvent.upsert({
     *   create: {
     *     // ... data to create a ContactTimelineEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactTimelineEvent we want to update
     *   }
     * })
     */
    upsert<T extends ContactTimelineEventUpsertArgs>(args: SelectSubset<T, ContactTimelineEventUpsertArgs<ExtArgs>>): Prisma__ContactTimelineEventClient<$Result.GetResult<Prisma.$ContactTimelineEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactTimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventCountArgs} args - Arguments to filter ContactTimelineEvents to count.
     * @example
     * // Count the number of ContactTimelineEvents
     * const count = await prisma.contactTimelineEvent.count({
     *   where: {
     *     // ... the filter for the ContactTimelineEvents we want to count
     *   }
     * })
    **/
    count<T extends ContactTimelineEventCountArgs>(
      args?: Subset<T, ContactTimelineEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactTimelineEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactTimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactTimelineEventAggregateArgs>(args: Subset<T, ContactTimelineEventAggregateArgs>): Prisma.PrismaPromise<GetContactTimelineEventAggregateType<T>>

    /**
     * Group by ContactTimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTimelineEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactTimelineEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactTimelineEventGroupByArgs['orderBy'] }
        : { orderBy?: ContactTimelineEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactTimelineEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactTimelineEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactTimelineEvent model
   */
  readonly fields: ContactTimelineEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactTimelineEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactTimelineEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactTimelineEvent model
   */
  interface ContactTimelineEventFieldRefs {
    readonly id: FieldRef<"ContactTimelineEvent", 'String'>
    readonly userId: FieldRef<"ContactTimelineEvent", 'String'>
    readonly contactId: FieldRef<"ContactTimelineEvent", 'String'>
    readonly type: FieldRef<"ContactTimelineEvent", 'String'>
    readonly reason: FieldRef<"ContactTimelineEvent", 'String'>
    readonly message: FieldRef<"ContactTimelineEvent", 'String'>
    readonly metadata: FieldRef<"ContactTimelineEvent", 'Json'>
    readonly createdAt: FieldRef<"ContactTimelineEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactTimelineEvent findUnique
   */
  export type ContactTimelineEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which ContactTimelineEvent to fetch.
     */
    where: ContactTimelineEventWhereUniqueInput
  }

  /**
   * ContactTimelineEvent findUniqueOrThrow
   */
  export type ContactTimelineEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which ContactTimelineEvent to fetch.
     */
    where: ContactTimelineEventWhereUniqueInput
  }

  /**
   * ContactTimelineEvent findFirst
   */
  export type ContactTimelineEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which ContactTimelineEvent to fetch.
     */
    where?: ContactTimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTimelineEvents to fetch.
     */
    orderBy?: ContactTimelineEventOrderByWithRelationInput | ContactTimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTimelineEvents.
     */
    cursor?: ContactTimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTimelineEvents.
     */
    distinct?: ContactTimelineEventScalarFieldEnum | ContactTimelineEventScalarFieldEnum[]
  }

  /**
   * ContactTimelineEvent findFirstOrThrow
   */
  export type ContactTimelineEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which ContactTimelineEvent to fetch.
     */
    where?: ContactTimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTimelineEvents to fetch.
     */
    orderBy?: ContactTimelineEventOrderByWithRelationInput | ContactTimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTimelineEvents.
     */
    cursor?: ContactTimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTimelineEvents.
     */
    distinct?: ContactTimelineEventScalarFieldEnum | ContactTimelineEventScalarFieldEnum[]
  }

  /**
   * ContactTimelineEvent findMany
   */
  export type ContactTimelineEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which ContactTimelineEvents to fetch.
     */
    where?: ContactTimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTimelineEvents to fetch.
     */
    orderBy?: ContactTimelineEventOrderByWithRelationInput | ContactTimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactTimelineEvents.
     */
    cursor?: ContactTimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTimelineEvents.
     */
    skip?: number
    distinct?: ContactTimelineEventScalarFieldEnum | ContactTimelineEventScalarFieldEnum[]
  }

  /**
   * ContactTimelineEvent create
   */
  export type ContactTimelineEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactTimelineEvent.
     */
    data: XOR<ContactTimelineEventCreateInput, ContactTimelineEventUncheckedCreateInput>
  }

  /**
   * ContactTimelineEvent createMany
   */
  export type ContactTimelineEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactTimelineEvents.
     */
    data: ContactTimelineEventCreateManyInput | ContactTimelineEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactTimelineEvent createManyAndReturn
   */
  export type ContactTimelineEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * The data used to create many ContactTimelineEvents.
     */
    data: ContactTimelineEventCreateManyInput | ContactTimelineEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactTimelineEvent update
   */
  export type ContactTimelineEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactTimelineEvent.
     */
    data: XOR<ContactTimelineEventUpdateInput, ContactTimelineEventUncheckedUpdateInput>
    /**
     * Choose, which ContactTimelineEvent to update.
     */
    where: ContactTimelineEventWhereUniqueInput
  }

  /**
   * ContactTimelineEvent updateMany
   */
  export type ContactTimelineEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactTimelineEvents.
     */
    data: XOR<ContactTimelineEventUpdateManyMutationInput, ContactTimelineEventUncheckedUpdateManyInput>
    /**
     * Filter which ContactTimelineEvents to update
     */
    where?: ContactTimelineEventWhereInput
    /**
     * Limit how many ContactTimelineEvents to update.
     */
    limit?: number
  }

  /**
   * ContactTimelineEvent updateManyAndReturn
   */
  export type ContactTimelineEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * The data used to update ContactTimelineEvents.
     */
    data: XOR<ContactTimelineEventUpdateManyMutationInput, ContactTimelineEventUncheckedUpdateManyInput>
    /**
     * Filter which ContactTimelineEvents to update
     */
    where?: ContactTimelineEventWhereInput
    /**
     * Limit how many ContactTimelineEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactTimelineEvent upsert
   */
  export type ContactTimelineEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactTimelineEvent to update in case it exists.
     */
    where: ContactTimelineEventWhereUniqueInput
    /**
     * In case the ContactTimelineEvent found by the `where` argument doesn't exist, create a new ContactTimelineEvent with this data.
     */
    create: XOR<ContactTimelineEventCreateInput, ContactTimelineEventUncheckedCreateInput>
    /**
     * In case the ContactTimelineEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactTimelineEventUpdateInput, ContactTimelineEventUncheckedUpdateInput>
  }

  /**
   * ContactTimelineEvent delete
   */
  export type ContactTimelineEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
    /**
     * Filter which ContactTimelineEvent to delete.
     */
    where: ContactTimelineEventWhereUniqueInput
  }

  /**
   * ContactTimelineEvent deleteMany
   */
  export type ContactTimelineEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTimelineEvents to delete
     */
    where?: ContactTimelineEventWhereInput
    /**
     * Limit how many ContactTimelineEvents to delete.
     */
    limit?: number
  }

  /**
   * ContactTimelineEvent without action
   */
  export type ContactTimelineEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTimelineEvent
     */
    select?: ContactTimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTimelineEvent
     */
    omit?: ContactTimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTimelineEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    organization: 'organization',
    roleTitle: 'roleTitle',
    sourceContext: 'sourceContext',
    howCanHelp: 'howCanHelp',
    rawInput: 'rawInput',
    notes: 'notes',
    tags: 'tags',
    domains: 'domains',
    skills: 'skills',
    lastContacted: 'lastContacted',
    snoozedUntil: 'snoozedUntil',
    importanceScore: 'importanceScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ContactEmbeddingScalarFieldEnum: {
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactEmbeddingScalarFieldEnum = (typeof ContactEmbeddingScalarFieldEnum)[keyof typeof ContactEmbeddingScalarFieldEnum]


  export const ContactTimelineEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contactId: 'contactId',
    type: 'type',
    reason: 'reason',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ContactTimelineEventScalarFieldEnum = (typeof ContactTimelineEventScalarFieldEnum)[keyof typeof ContactTimelineEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    userId?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    organization?: StringNullableFilter<"Contact"> | string | null
    roleTitle?: StringNullableFilter<"Contact"> | string | null
    sourceContext?: StringNullableFilter<"Contact"> | string | null
    howCanHelp?: StringNullableFilter<"Contact"> | string | null
    rawInput?: StringFilter<"Contact"> | string
    notes?: StringNullableFilter<"Contact"> | string | null
    tags?: StringNullableListFilter<"Contact">
    domains?: StringNullableListFilter<"Contact">
    skills?: StringNullableListFilter<"Contact">
    lastContacted?: DateTimeNullableFilter<"Contact"> | Date | string | null
    snoozedUntil?: DateTimeNullableFilter<"Contact"> | Date | string | null
    importanceScore?: IntFilter<"Contact"> | number
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    embeddings?: XOR<ContactEmbeddingNullableScalarRelationFilter, ContactEmbeddingWhereInput> | null
    timelineEvents?: ContactTimelineEventListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    organization?: SortOrderInput | SortOrder
    roleTitle?: SortOrderInput | SortOrder
    sourceContext?: SortOrderInput | SortOrder
    howCanHelp?: SortOrderInput | SortOrder
    rawInput?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    domains?: SortOrder
    skills?: SortOrder
    lastContacted?: SortOrderInput | SortOrder
    snoozedUntil?: SortOrderInput | SortOrder
    importanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embeddings?: ContactEmbeddingOrderByWithRelationInput
    timelineEvents?: ContactTimelineEventOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    userId?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    organization?: StringNullableFilter<"Contact"> | string | null
    roleTitle?: StringNullableFilter<"Contact"> | string | null
    sourceContext?: StringNullableFilter<"Contact"> | string | null
    howCanHelp?: StringNullableFilter<"Contact"> | string | null
    rawInput?: StringFilter<"Contact"> | string
    notes?: StringNullableFilter<"Contact"> | string | null
    tags?: StringNullableListFilter<"Contact">
    domains?: StringNullableListFilter<"Contact">
    skills?: StringNullableListFilter<"Contact">
    lastContacted?: DateTimeNullableFilter<"Contact"> | Date | string | null
    snoozedUntil?: DateTimeNullableFilter<"Contact"> | Date | string | null
    importanceScore?: IntFilter<"Contact"> | number
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    embeddings?: XOR<ContactEmbeddingNullableScalarRelationFilter, ContactEmbeddingWhereInput> | null
    timelineEvents?: ContactTimelineEventListRelationFilter
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    organization?: SortOrderInput | SortOrder
    roleTitle?: SortOrderInput | SortOrder
    sourceContext?: SortOrderInput | SortOrder
    howCanHelp?: SortOrderInput | SortOrder
    rawInput?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    domains?: SortOrder
    skills?: SortOrder
    lastContacted?: SortOrderInput | SortOrder
    snoozedUntil?: SortOrderInput | SortOrder
    importanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    userId?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    organization?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    roleTitle?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    sourceContext?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    howCanHelp?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    rawInput?: StringWithAggregatesFilter<"Contact"> | string
    notes?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    tags?: StringNullableListFilter<"Contact">
    domains?: StringNullableListFilter<"Contact">
    skills?: StringNullableListFilter<"Contact">
    lastContacted?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
    snoozedUntil?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
    importanceScore?: IntWithAggregatesFilter<"Contact"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type ContactEmbeddingWhereInput = {
    AND?: ContactEmbeddingWhereInput | ContactEmbeddingWhereInput[]
    OR?: ContactEmbeddingWhereInput[]
    NOT?: ContactEmbeddingWhereInput | ContactEmbeddingWhereInput[]
    contactId?: StringFilter<"ContactEmbedding"> | string
    createdAt?: DateTimeFilter<"ContactEmbedding"> | Date | string
    updatedAt?: DateTimeFilter<"ContactEmbedding"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type ContactEmbeddingOrderByWithRelationInput = {
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: ContactOrderByWithRelationInput
  }

  export type ContactEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    contactId?: string
    AND?: ContactEmbeddingWhereInput | ContactEmbeddingWhereInput[]
    OR?: ContactEmbeddingWhereInput[]
    NOT?: ContactEmbeddingWhereInput | ContactEmbeddingWhereInput[]
    createdAt?: DateTimeFilter<"ContactEmbedding"> | Date | string
    updatedAt?: DateTimeFilter<"ContactEmbedding"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "contactId">

  export type ContactEmbeddingOrderByWithAggregationInput = {
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactEmbeddingCountOrderByAggregateInput
    _max?: ContactEmbeddingMaxOrderByAggregateInput
    _min?: ContactEmbeddingMinOrderByAggregateInput
  }

  export type ContactEmbeddingScalarWhereWithAggregatesInput = {
    AND?: ContactEmbeddingScalarWhereWithAggregatesInput | ContactEmbeddingScalarWhereWithAggregatesInput[]
    OR?: ContactEmbeddingScalarWhereWithAggregatesInput[]
    NOT?: ContactEmbeddingScalarWhereWithAggregatesInput | ContactEmbeddingScalarWhereWithAggregatesInput[]
    contactId?: StringWithAggregatesFilter<"ContactEmbedding"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactEmbedding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactEmbedding"> | Date | string
  }

  export type ContactTimelineEventWhereInput = {
    AND?: ContactTimelineEventWhereInput | ContactTimelineEventWhereInput[]
    OR?: ContactTimelineEventWhereInput[]
    NOT?: ContactTimelineEventWhereInput | ContactTimelineEventWhereInput[]
    id?: StringFilter<"ContactTimelineEvent"> | string
    userId?: StringFilter<"ContactTimelineEvent"> | string
    contactId?: StringFilter<"ContactTimelineEvent"> | string
    type?: StringFilter<"ContactTimelineEvent"> | string
    reason?: StringNullableFilter<"ContactTimelineEvent"> | string | null
    message?: StringFilter<"ContactTimelineEvent"> | string
    metadata?: JsonNullableFilter<"ContactTimelineEvent">
    createdAt?: DateTimeFilter<"ContactTimelineEvent"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type ContactTimelineEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contact?: ContactOrderByWithRelationInput
  }

  export type ContactTimelineEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactTimelineEventWhereInput | ContactTimelineEventWhereInput[]
    OR?: ContactTimelineEventWhereInput[]
    NOT?: ContactTimelineEventWhereInput | ContactTimelineEventWhereInput[]
    userId?: StringFilter<"ContactTimelineEvent"> | string
    contactId?: StringFilter<"ContactTimelineEvent"> | string
    type?: StringFilter<"ContactTimelineEvent"> | string
    reason?: StringNullableFilter<"ContactTimelineEvent"> | string | null
    message?: StringFilter<"ContactTimelineEvent"> | string
    metadata?: JsonNullableFilter<"ContactTimelineEvent">
    createdAt?: DateTimeFilter<"ContactTimelineEvent"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "id">

  export type ContactTimelineEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactTimelineEventCountOrderByAggregateInput
    _max?: ContactTimelineEventMaxOrderByAggregateInput
    _min?: ContactTimelineEventMinOrderByAggregateInput
  }

  export type ContactTimelineEventScalarWhereWithAggregatesInput = {
    AND?: ContactTimelineEventScalarWhereWithAggregatesInput | ContactTimelineEventScalarWhereWithAggregatesInput[]
    OR?: ContactTimelineEventScalarWhereWithAggregatesInput[]
    NOT?: ContactTimelineEventScalarWhereWithAggregatesInput | ContactTimelineEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactTimelineEvent"> | string
    userId?: StringWithAggregatesFilter<"ContactTimelineEvent"> | string
    contactId?: StringWithAggregatesFilter<"ContactTimelineEvent"> | string
    type?: StringWithAggregatesFilter<"ContactTimelineEvent"> | string
    reason?: StringNullableWithAggregatesFilter<"ContactTimelineEvent"> | string | null
    message?: StringWithAggregatesFilter<"ContactTimelineEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ContactTimelineEvent">
    createdAt?: DateTimeWithAggregatesFilter<"ContactTimelineEvent"> | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: ContactEmbeddingCreateNestedOneWithoutContactInput
    timelineEvents?: ContactTimelineEventCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: ContactEmbeddingUncheckedCreateNestedOneWithoutContactInput
    timelineEvents?: ContactTimelineEventUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: ContactEmbeddingUpdateOneWithoutContactNestedInput
    timelineEvents?: ContactTimelineEventUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: ContactEmbeddingUncheckedUpdateOneWithoutContactNestedInput
    timelineEvents?: ContactTimelineEventUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactEmbeddingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutEmbeddingsNestedInput
  }

  export type ContactEmbeddingUncheckedUpdateInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactEmbeddingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactEmbeddingUncheckedUpdateManyInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventCreateInput = {
    id?: string
    userId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contact: ContactCreateNestedOneWithoutTimelineEventsInput
  }

  export type ContactTimelineEventUncheckedCreateInput = {
    id?: string
    userId: string
    contactId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContactTimelineEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutTimelineEventsNestedInput
  }

  export type ContactTimelineEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventCreateManyInput = {
    id?: string
    userId: string
    contactId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContactTimelineEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactEmbeddingNullableScalarRelationFilter = {
    is?: ContactEmbeddingWhereInput | null
    isNot?: ContactEmbeddingWhereInput | null
  }

  export type ContactTimelineEventListRelationFilter = {
    every?: ContactTimelineEventWhereInput
    some?: ContactTimelineEventWhereInput
    none?: ContactTimelineEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactTimelineEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    roleTitle?: SortOrder
    sourceContext?: SortOrder
    howCanHelp?: SortOrder
    rawInput?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    domains?: SortOrder
    skills?: SortOrder
    lastContacted?: SortOrder
    snoozedUntil?: SortOrder
    importanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    importanceScore?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    roleTitle?: SortOrder
    sourceContext?: SortOrder
    howCanHelp?: SortOrder
    rawInput?: SortOrder
    notes?: SortOrder
    lastContacted?: SortOrder
    snoozedUntil?: SortOrder
    importanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    roleTitle?: SortOrder
    sourceContext?: SortOrder
    howCanHelp?: SortOrder
    rawInput?: SortOrder
    notes?: SortOrder
    lastContacted?: SortOrder
    snoozedUntil?: SortOrder
    importanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    importanceScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type ContactEmbeddingCountOrderByAggregateInput = {
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactEmbeddingMaxOrderByAggregateInput = {
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactEmbeddingMinOrderByAggregateInput = {
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContactTimelineEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTimelineEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTimelineEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ContactCreatetagsInput = {
    set: string[]
  }

  export type ContactCreatedomainsInput = {
    set: string[]
  }

  export type ContactCreateskillsInput = {
    set: string[]
  }

  export type ContactEmbeddingCreateNestedOneWithoutContactInput = {
    connect?: ContactEmbeddingWhereUniqueInput
  }

  export type ContactTimelineEventCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput> | ContactTimelineEventCreateWithoutContactInput[] | ContactTimelineEventUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactTimelineEventCreateOrConnectWithoutContactInput | ContactTimelineEventCreateOrConnectWithoutContactInput[]
    createMany?: ContactTimelineEventCreateManyContactInputEnvelope
    connect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
  }

  export type ContactEmbeddingUncheckedCreateNestedOneWithoutContactInput = {
    connect?: ContactEmbeddingWhereUniqueInput
  }

  export type ContactTimelineEventUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput> | ContactTimelineEventCreateWithoutContactInput[] | ContactTimelineEventUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactTimelineEventCreateOrConnectWithoutContactInput | ContactTimelineEventCreateOrConnectWithoutContactInput[]
    createMany?: ContactTimelineEventCreateManyContactInputEnvelope
    connect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContactUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContactUpdatedomainsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContactUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactEmbeddingUpdateOneWithoutContactNestedInput = {
    disconnect?: ContactEmbeddingWhereInput | boolean
    delete?: ContactEmbeddingWhereInput | boolean
    connect?: ContactEmbeddingWhereUniqueInput
    update?: XOR<XOR<ContactEmbeddingUpdateToOneWithWhereWithoutContactInput, ContactEmbeddingUpdateWithoutContactInput>, ContactEmbeddingUncheckedUpdateWithoutContactInput>
  }

  export type ContactTimelineEventUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput> | ContactTimelineEventCreateWithoutContactInput[] | ContactTimelineEventUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactTimelineEventCreateOrConnectWithoutContactInput | ContactTimelineEventCreateOrConnectWithoutContactInput[]
    upsert?: ContactTimelineEventUpsertWithWhereUniqueWithoutContactInput | ContactTimelineEventUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactTimelineEventCreateManyContactInputEnvelope
    set?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    disconnect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    delete?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    connect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    update?: ContactTimelineEventUpdateWithWhereUniqueWithoutContactInput | ContactTimelineEventUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactTimelineEventUpdateManyWithWhereWithoutContactInput | ContactTimelineEventUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactTimelineEventScalarWhereInput | ContactTimelineEventScalarWhereInput[]
  }

  export type ContactEmbeddingUncheckedUpdateOneWithoutContactNestedInput = {
    disconnect?: ContactEmbeddingWhereInput | boolean
    delete?: ContactEmbeddingWhereInput | boolean
    connect?: ContactEmbeddingWhereUniqueInput
    update?: XOR<XOR<ContactEmbeddingUpdateToOneWithWhereWithoutContactInput, ContactEmbeddingUpdateWithoutContactInput>, ContactEmbeddingUncheckedUpdateWithoutContactInput>
  }

  export type ContactTimelineEventUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput> | ContactTimelineEventCreateWithoutContactInput[] | ContactTimelineEventUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactTimelineEventCreateOrConnectWithoutContactInput | ContactTimelineEventCreateOrConnectWithoutContactInput[]
    upsert?: ContactTimelineEventUpsertWithWhereUniqueWithoutContactInput | ContactTimelineEventUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactTimelineEventCreateManyContactInputEnvelope
    set?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    disconnect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    delete?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    connect?: ContactTimelineEventWhereUniqueInput | ContactTimelineEventWhereUniqueInput[]
    update?: ContactTimelineEventUpdateWithWhereUniqueWithoutContactInput | ContactTimelineEventUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactTimelineEventUpdateManyWithWhereWithoutContactInput | ContactTimelineEventUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactTimelineEventScalarWhereInput | ContactTimelineEventScalarWhereInput[]
  }

  export type ContactUpdateOneRequiredWithoutEmbeddingsNestedInput = {
    create?: XOR<ContactCreateWithoutEmbeddingsInput, ContactUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutEmbeddingsInput
    upsert?: ContactUpsertWithoutEmbeddingsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutEmbeddingsInput, ContactUpdateWithoutEmbeddingsInput>, ContactUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type ContactCreateNestedOneWithoutTimelineEventsInput = {
    create?: XOR<ContactCreateWithoutTimelineEventsInput, ContactUncheckedCreateWithoutTimelineEventsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTimelineEventsInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactUpdateOneRequiredWithoutTimelineEventsNestedInput = {
    create?: XOR<ContactCreateWithoutTimelineEventsInput, ContactUncheckedCreateWithoutTimelineEventsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTimelineEventsInput
    upsert?: ContactUpsertWithoutTimelineEventsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutTimelineEventsInput, ContactUpdateWithoutTimelineEventsInput>, ContactUncheckedUpdateWithoutTimelineEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContactTimelineEventCreateWithoutContactInput = {
    id?: string
    userId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContactTimelineEventUncheckedCreateWithoutContactInput = {
    id?: string
    userId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContactTimelineEventCreateOrConnectWithoutContactInput = {
    where: ContactTimelineEventWhereUniqueInput
    create: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput>
  }

  export type ContactTimelineEventCreateManyContactInputEnvelope = {
    data: ContactTimelineEventCreateManyContactInput | ContactTimelineEventCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type ContactEmbeddingUpdateToOneWithWhereWithoutContactInput = {
    where?: ContactEmbeddingWhereInput
    data: XOR<ContactEmbeddingUpdateWithoutContactInput, ContactEmbeddingUncheckedUpdateWithoutContactInput>
  }

  export type ContactEmbeddingUpdateWithoutContactInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactEmbeddingUncheckedUpdateWithoutContactInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventUpsertWithWhereUniqueWithoutContactInput = {
    where: ContactTimelineEventWhereUniqueInput
    update: XOR<ContactTimelineEventUpdateWithoutContactInput, ContactTimelineEventUncheckedUpdateWithoutContactInput>
    create: XOR<ContactTimelineEventCreateWithoutContactInput, ContactTimelineEventUncheckedCreateWithoutContactInput>
  }

  export type ContactTimelineEventUpdateWithWhereUniqueWithoutContactInput = {
    where: ContactTimelineEventWhereUniqueInput
    data: XOR<ContactTimelineEventUpdateWithoutContactInput, ContactTimelineEventUncheckedUpdateWithoutContactInput>
  }

  export type ContactTimelineEventUpdateManyWithWhereWithoutContactInput = {
    where: ContactTimelineEventScalarWhereInput
    data: XOR<ContactTimelineEventUpdateManyMutationInput, ContactTimelineEventUncheckedUpdateManyWithoutContactInput>
  }

  export type ContactTimelineEventScalarWhereInput = {
    AND?: ContactTimelineEventScalarWhereInput | ContactTimelineEventScalarWhereInput[]
    OR?: ContactTimelineEventScalarWhereInput[]
    NOT?: ContactTimelineEventScalarWhereInput | ContactTimelineEventScalarWhereInput[]
    id?: StringFilter<"ContactTimelineEvent"> | string
    userId?: StringFilter<"ContactTimelineEvent"> | string
    contactId?: StringFilter<"ContactTimelineEvent"> | string
    type?: StringFilter<"ContactTimelineEvent"> | string
    reason?: StringNullableFilter<"ContactTimelineEvent"> | string | null
    message?: StringFilter<"ContactTimelineEvent"> | string
    metadata?: JsonNullableFilter<"ContactTimelineEvent">
    createdAt?: DateTimeFilter<"ContactTimelineEvent"> | Date | string
  }

  export type ContactCreateWithoutEmbeddingsInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineEvents?: ContactTimelineEventCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutEmbeddingsInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineEvents?: ContactTimelineEventUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutEmbeddingsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutEmbeddingsInput, ContactUncheckedCreateWithoutEmbeddingsInput>
  }

  export type ContactUpsertWithoutEmbeddingsInput = {
    update: XOR<ContactUpdateWithoutEmbeddingsInput, ContactUncheckedUpdateWithoutEmbeddingsInput>
    create: XOR<ContactCreateWithoutEmbeddingsInput, ContactUncheckedCreateWithoutEmbeddingsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutEmbeddingsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutEmbeddingsInput, ContactUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type ContactUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineEvents?: ContactTimelineEventUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineEvents?: ContactTimelineEventUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateWithoutTimelineEventsInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: ContactEmbeddingCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutTimelineEventsInput = {
    id?: string
    userId: string
    name: string
    organization?: string | null
    roleTitle?: string | null
    sourceContext?: string | null
    howCanHelp?: string | null
    rawInput: string
    notes?: string | null
    tags?: ContactCreatetagsInput | string[]
    domains?: ContactCreatedomainsInput | string[]
    skills?: ContactCreateskillsInput | string[]
    lastContacted?: Date | string | null
    snoozedUntil?: Date | string | null
    importanceScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: ContactEmbeddingUncheckedCreateNestedOneWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutTimelineEventsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutTimelineEventsInput, ContactUncheckedCreateWithoutTimelineEventsInput>
  }

  export type ContactUpsertWithoutTimelineEventsInput = {
    update: XOR<ContactUpdateWithoutTimelineEventsInput, ContactUncheckedUpdateWithoutTimelineEventsInput>
    create: XOR<ContactCreateWithoutTimelineEventsInput, ContactUncheckedCreateWithoutTimelineEventsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutTimelineEventsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutTimelineEventsInput, ContactUncheckedUpdateWithoutTimelineEventsInput>
  }

  export type ContactUpdateWithoutTimelineEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: ContactEmbeddingUpdateOneWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutTimelineEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    roleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    sourceContext?: NullableStringFieldUpdateOperationsInput | string | null
    howCanHelp?: NullableStringFieldUpdateOperationsInput | string | null
    rawInput?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ContactUpdatetagsInput | string[]
    domains?: ContactUpdatedomainsInput | string[]
    skills?: ContactUpdateskillsInput | string[]
    lastContacted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    snoozedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: ContactEmbeddingUncheckedUpdateOneWithoutContactNestedInput
  }

  export type ContactTimelineEventCreateManyContactInput = {
    id?: string
    userId: string
    type: string
    reason?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContactTimelineEventUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTimelineEventUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}