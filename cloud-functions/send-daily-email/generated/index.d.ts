
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
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model ConversationSituation
 * 
 */
export type ConversationSituation = $Result.DefaultSelection<Prisma.$ConversationSituationPayload>
/**
 * Model ConversationQuiz
 * 
 */
export type ConversationQuiz = $Result.DefaultSelection<Prisma.$ConversationQuizPayload>
/**
 * Model Dialog
 * 
 */
export type Dialog = $Result.DefaultSelection<Prisma.$DialogPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Conversations
 * const conversations = await prisma.conversation.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Conversations
   * const conversations = await prisma.conversation.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.conversationSituation`: Exposes CRUD operations for the **ConversationSituation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationSituations
    * const conversationSituations = await prisma.conversationSituation.findMany()
    * ```
    */
  get conversationSituation(): Prisma.ConversationSituationDelegate<ExtArgs>;

  /**
   * `prisma.conversationQuiz`: Exposes CRUD operations for the **ConversationQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationQuizs
    * const conversationQuizs = await prisma.conversationQuiz.findMany()
    * ```
    */
  get conversationQuiz(): Prisma.ConversationQuizDelegate<ExtArgs>;

  /**
   * `prisma.dialog`: Exposes CRUD operations for the **Dialog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dialogs
    * const dialogs = await prisma.dialog.findMany()
    * ```
    */
  get dialog(): Prisma.DialogDelegate<ExtArgs>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Conversation: 'Conversation',
    ConversationSituation: 'ConversationSituation',
    ConversationQuiz: 'ConversationQuiz',
    Dialog: 'Dialog',
    Word: 'Word',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'conversation' | 'conversationSituation' | 'conversationQuiz' | 'dialog' | 'word' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      ConversationSituation: {
        payload: Prisma.$ConversationSituationPayload<ExtArgs>
        fields: Prisma.ConversationSituationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationSituationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationSituationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          findFirst: {
            args: Prisma.ConversationSituationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationSituationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          findMany: {
            args: Prisma.ConversationSituationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>[]
          }
          create: {
            args: Prisma.ConversationSituationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          createMany: {
            args: Prisma.ConversationSituationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationSituationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          update: {
            args: Prisma.ConversationSituationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationSituationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationSituationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationSituationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationSituationPayload>
          }
          aggregate: {
            args: Prisma.ConversationSituationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversationSituation>
          }
          groupBy: {
            args: Prisma.ConversationSituationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationSituationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationSituationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationSituationCountAggregateOutputType> | number
          }
        }
      }
      ConversationQuiz: {
        payload: Prisma.$ConversationQuizPayload<ExtArgs>
        fields: Prisma.ConversationQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationQuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationQuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          findFirst: {
            args: Prisma.ConversationQuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationQuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          findMany: {
            args: Prisma.ConversationQuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>[]
          }
          create: {
            args: Prisma.ConversationQuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          createMany: {
            args: Prisma.ConversationQuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationQuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          update: {
            args: Prisma.ConversationQuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          deleteMany: {
            args: Prisma.ConversationQuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationQuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationQuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationQuizPayload>
          }
          aggregate: {
            args: Prisma.ConversationQuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversationQuiz>
          }
          groupBy: {
            args: Prisma.ConversationQuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationQuizCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationQuizCountAggregateOutputType> | number
          }
        }
      }
      Dialog: {
        payload: Prisma.$DialogPayload<ExtArgs>
        fields: Prisma.DialogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DialogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DialogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          findFirst: {
            args: Prisma.DialogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DialogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          findMany: {
            args: Prisma.DialogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>[]
          }
          create: {
            args: Prisma.DialogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          createMany: {
            args: Prisma.DialogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DialogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          update: {
            args: Prisma.DialogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          deleteMany: {
            args: Prisma.DialogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DialogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DialogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          aggregate: {
            args: Prisma.DialogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDialog>
          }
          groupBy: {
            args: Prisma.DialogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DialogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DialogCountArgs<ExtArgs>,
            result: $Utils.Optional<DialogCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>,
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    dialog: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialog?: boolean | ConversationCountOutputTypeCountDialogArgs
  }

  // Custom InputTypes

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountDialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DialogWhereInput
  }



  /**
   * Count Type DialogCountOutputType
   */

  export type DialogCountOutputType = {
    words: number
  }

  export type DialogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | DialogCountOutputTypeCountWordsArgs
  }

  // Custom InputTypes

  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DialogCountOutputType
     */
    select?: DialogCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }



  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    dialog: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialog?: boolean | WordCountOutputTypeCountDialogArgs
  }

  // Custom InputTypes

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountDialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DialogWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    date: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    date: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    published: number
    date: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    date?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    date?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    date?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    published: boolean
    date: Date | null
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    date?: boolean
    dialog?: boolean | Conversation$dialogArgs<ExtArgs>
    situation?: boolean | Conversation$situationArgs<ExtArgs>
    conversationQuiz?: boolean | Conversation$conversationQuizArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    date?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialog?: boolean | Conversation$dialogArgs<ExtArgs>
    situation?: boolean | Conversation$situationArgs<ExtArgs>
    conversationQuiz?: boolean | Conversation$conversationQuizArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      dialog: Prisma.$DialogPayload<ExtArgs>[]
      situation: Prisma.$ConversationSituationPayload<ExtArgs> | null
      conversationQuiz: Prisma.$ConversationQuizPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
      published: boolean
      date: Date | null
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }


  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Conversations.
     *     @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversation = await prisma.conversation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dialog<T extends Conversation$dialogArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$dialogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findMany'> | Null>;

    situation<T extends Conversation$situationArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$situationArgs<ExtArgs>>): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    conversationQuiz<T extends Conversation$conversationQuizArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$conversationQuizArgs<ExtArgs>>): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
    readonly published: FieldRef<"Conversation", 'Boolean'>
    readonly date: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }


  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }


  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation.dialog
   */
  export type Conversation$dialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    where?: DialogWhereInput
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    cursor?: DialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Conversation.situation
   */
  export type Conversation$situationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    where?: ConversationSituationWhereInput
  }


  /**
   * Conversation.conversationQuiz
   */
  export type Conversation$conversationQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    where?: ConversationQuizWhereInput
  }


  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
  }



  /**
   * Model ConversationSituation
   */

  export type AggregateConversationSituation = {
    _count: ConversationSituationCountAggregateOutputType | null
    _min: ConversationSituationMinAggregateOutputType | null
    _max: ConversationSituationMaxAggregateOutputType | null
  }

  export type ConversationSituationMinAggregateOutputType = {
    id: string | null
    text: string | null
    type: string | null
    conversationId: string | null
    imageSrc: string | null
  }

  export type ConversationSituationMaxAggregateOutputType = {
    id: string | null
    text: string | null
    type: string | null
    conversationId: string | null
    imageSrc: string | null
  }

  export type ConversationSituationCountAggregateOutputType = {
    id: number
    text: number
    type: number
    conversationId: number
    imageSrc: number
    _all: number
  }


  export type ConversationSituationMinAggregateInputType = {
    id?: true
    text?: true
    type?: true
    conversationId?: true
    imageSrc?: true
  }

  export type ConversationSituationMaxAggregateInputType = {
    id?: true
    text?: true
    type?: true
    conversationId?: true
    imageSrc?: true
  }

  export type ConversationSituationCountAggregateInputType = {
    id?: true
    text?: true
    type?: true
    conversationId?: true
    imageSrc?: true
    _all?: true
  }

  export type ConversationSituationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationSituation to aggregate.
     */
    where?: ConversationSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSituations to fetch.
     */
    orderBy?: ConversationSituationOrderByWithRelationInput | ConversationSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationSituations
    **/
    _count?: true | ConversationSituationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationSituationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationSituationMaxAggregateInputType
  }

  export type GetConversationSituationAggregateType<T extends ConversationSituationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationSituation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationSituation[P]>
      : GetScalarType<T[P], AggregateConversationSituation[P]>
  }




  export type ConversationSituationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationSituationWhereInput
    orderBy?: ConversationSituationOrderByWithAggregationInput | ConversationSituationOrderByWithAggregationInput[]
    by: ConversationSituationScalarFieldEnum[] | ConversationSituationScalarFieldEnum
    having?: ConversationSituationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationSituationCountAggregateInputType | true
    _min?: ConversationSituationMinAggregateInputType
    _max?: ConversationSituationMaxAggregateInputType
  }

  export type ConversationSituationGroupByOutputType = {
    id: string
    text: string
    type: string
    conversationId: string | null
    imageSrc: string | null
    _count: ConversationSituationCountAggregateOutputType | null
    _min: ConversationSituationMinAggregateOutputType | null
    _max: ConversationSituationMaxAggregateOutputType | null
  }

  type GetConversationSituationGroupByPayload<T extends ConversationSituationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationSituationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationSituationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationSituationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationSituationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSituationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    conversationId?: boolean
    imageSrc?: boolean
    conversation?: boolean | ConversationSituation$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["conversationSituation"]>

  export type ConversationSituationSelectScalar = {
    id?: boolean
    text?: boolean
    type?: boolean
    conversationId?: boolean
    imageSrc?: boolean
  }

  export type ConversationSituationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationSituation$conversationArgs<ExtArgs>
  }


  export type $ConversationSituationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationSituation"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      type: string
      conversationId: string | null
      imageSrc: string | null
    }, ExtArgs["result"]["conversationSituation"]>
    composites: {}
  }


  type ConversationSituationGetPayload<S extends boolean | null | undefined | ConversationSituationDefaultArgs> = $Result.GetResult<Prisma.$ConversationSituationPayload, S>

  type ConversationSituationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationSituationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationSituationCountAggregateInputType | true
    }

  export interface ConversationSituationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationSituation'], meta: { name: 'ConversationSituation' } }
    /**
     * Find zero or one ConversationSituation that matches the filter.
     * @param {ConversationSituationFindUniqueArgs} args - Arguments to find a ConversationSituation
     * @example
     * // Get one ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationSituationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConversationSituation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationSituationFindUniqueOrThrowArgs} args - Arguments to find a ConversationSituation
     * @example
     * // Get one ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationSituationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConversationSituation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationFindFirstArgs} args - Arguments to find a ConversationSituation
     * @example
     * // Get one ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationSituationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConversationSituation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationFindFirstOrThrowArgs} args - Arguments to find a ConversationSituation
     * @example
     * // Get one ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationSituationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConversationSituations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationSituations
     * const conversationSituations = await prisma.conversationSituation.findMany()
     * 
     * // Get first 10 ConversationSituations
     * const conversationSituations = await prisma.conversationSituation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationSituationWithIdOnly = await prisma.conversationSituation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationSituationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConversationSituation.
     * @param {ConversationSituationCreateArgs} args - Arguments to create a ConversationSituation.
     * @example
     * // Create one ConversationSituation
     * const ConversationSituation = await prisma.conversationSituation.create({
     *   data: {
     *     // ... data to create a ConversationSituation
     *   }
     * })
     * 
    **/
    create<T extends ConversationSituationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationCreateArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ConversationSituations.
     *     @param {ConversationSituationCreateManyArgs} args - Arguments to create many ConversationSituations.
     *     @example
     *     // Create many ConversationSituations
     *     const conversationSituation = await prisma.conversationSituation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationSituationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConversationSituation.
     * @param {ConversationSituationDeleteArgs} args - Arguments to delete one ConversationSituation.
     * @example
     * // Delete one ConversationSituation
     * const ConversationSituation = await prisma.conversationSituation.delete({
     *   where: {
     *     // ... filter to delete one ConversationSituation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationSituationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConversationSituation.
     * @param {ConversationSituationUpdateArgs} args - Arguments to update one ConversationSituation.
     * @example
     * // Update one ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationSituationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConversationSituations.
     * @param {ConversationSituationDeleteManyArgs} args - Arguments to filter ConversationSituations to delete.
     * @example
     * // Delete a few ConversationSituations
     * const { count } = await prisma.conversationSituation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationSituationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationSituationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationSituations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationSituations
     * const conversationSituation = await prisma.conversationSituation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationSituationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConversationSituation.
     * @param {ConversationSituationUpsertArgs} args - Arguments to update or create a ConversationSituation.
     * @example
     * // Update or create a ConversationSituation
     * const conversationSituation = await prisma.conversationSituation.upsert({
     *   create: {
     *     // ... data to create a ConversationSituation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationSituation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationSituationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationSituationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationSituationClient<$Result.GetResult<Prisma.$ConversationSituationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConversationSituations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationCountArgs} args - Arguments to filter ConversationSituations to count.
     * @example
     * // Count the number of ConversationSituations
     * const count = await prisma.conversationSituation.count({
     *   where: {
     *     // ... the filter for the ConversationSituations we want to count
     *   }
     * })
    **/
    count<T extends ConversationSituationCountArgs>(
      args?: Subset<T, ConversationSituationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationSituationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationSituation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationSituationAggregateArgs>(args: Subset<T, ConversationSituationAggregateArgs>): Prisma.PrismaPromise<GetConversationSituationAggregateType<T>>

    /**
     * Group by ConversationSituation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSituationGroupByArgs} args - Group by arguments.
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
      T extends ConversationSituationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationSituationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationSituationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationSituationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationSituationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationSituation model
   */
  readonly fields: ConversationSituationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationSituation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationSituationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversation<T extends ConversationSituation$conversationArgs<ExtArgs> = {}>(args?: Subset<T, ConversationSituation$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConversationSituation model
   */ 
  interface ConversationSituationFieldRefs {
    readonly id: FieldRef<"ConversationSituation", 'String'>
    readonly text: FieldRef<"ConversationSituation", 'String'>
    readonly type: FieldRef<"ConversationSituation", 'String'>
    readonly conversationId: FieldRef<"ConversationSituation", 'String'>
    readonly imageSrc: FieldRef<"ConversationSituation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ConversationSituation findUnique
   */
  export type ConversationSituationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSituation to fetch.
     */
    where: ConversationSituationWhereUniqueInput
  }


  /**
   * ConversationSituation findUniqueOrThrow
   */
  export type ConversationSituationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSituation to fetch.
     */
    where: ConversationSituationWhereUniqueInput
  }


  /**
   * ConversationSituation findFirst
   */
  export type ConversationSituationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSituation to fetch.
     */
    where?: ConversationSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSituations to fetch.
     */
    orderBy?: ConversationSituationOrderByWithRelationInput | ConversationSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationSituations.
     */
    cursor?: ConversationSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationSituations.
     */
    distinct?: ConversationSituationScalarFieldEnum | ConversationSituationScalarFieldEnum[]
  }


  /**
   * ConversationSituation findFirstOrThrow
   */
  export type ConversationSituationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSituation to fetch.
     */
    where?: ConversationSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSituations to fetch.
     */
    orderBy?: ConversationSituationOrderByWithRelationInput | ConversationSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationSituations.
     */
    cursor?: ConversationSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationSituations.
     */
    distinct?: ConversationSituationScalarFieldEnum | ConversationSituationScalarFieldEnum[]
  }


  /**
   * ConversationSituation findMany
   */
  export type ConversationSituationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSituations to fetch.
     */
    where?: ConversationSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSituations to fetch.
     */
    orderBy?: ConversationSituationOrderByWithRelationInput | ConversationSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationSituations.
     */
    cursor?: ConversationSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSituations.
     */
    skip?: number
    distinct?: ConversationSituationScalarFieldEnum | ConversationSituationScalarFieldEnum[]
  }


  /**
   * ConversationSituation create
   */
  export type ConversationSituationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationSituation.
     */
    data: XOR<ConversationSituationCreateInput, ConversationSituationUncheckedCreateInput>
  }


  /**
   * ConversationSituation createMany
   */
  export type ConversationSituationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationSituations.
     */
    data: ConversationSituationCreateManyInput | ConversationSituationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ConversationSituation update
   */
  export type ConversationSituationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationSituation.
     */
    data: XOR<ConversationSituationUpdateInput, ConversationSituationUncheckedUpdateInput>
    /**
     * Choose, which ConversationSituation to update.
     */
    where: ConversationSituationWhereUniqueInput
  }


  /**
   * ConversationSituation updateMany
   */
  export type ConversationSituationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationSituations.
     */
    data: XOR<ConversationSituationUpdateManyMutationInput, ConversationSituationUncheckedUpdateManyInput>
    /**
     * Filter which ConversationSituations to update
     */
    where?: ConversationSituationWhereInput
  }


  /**
   * ConversationSituation upsert
   */
  export type ConversationSituationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationSituation to update in case it exists.
     */
    where: ConversationSituationWhereUniqueInput
    /**
     * In case the ConversationSituation found by the `where` argument doesn't exist, create a new ConversationSituation with this data.
     */
    create: XOR<ConversationSituationCreateInput, ConversationSituationUncheckedCreateInput>
    /**
     * In case the ConversationSituation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationSituationUpdateInput, ConversationSituationUncheckedUpdateInput>
  }


  /**
   * ConversationSituation delete
   */
  export type ConversationSituationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
    /**
     * Filter which ConversationSituation to delete.
     */
    where: ConversationSituationWhereUniqueInput
  }


  /**
   * ConversationSituation deleteMany
   */
  export type ConversationSituationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationSituations to delete
     */
    where?: ConversationSituationWhereInput
  }


  /**
   * ConversationSituation.conversation
   */
  export type ConversationSituation$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
  }


  /**
   * ConversationSituation without action
   */
  export type ConversationSituationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSituation
     */
    select?: ConversationSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationSituationInclude<ExtArgs> | null
  }



  /**
   * Model ConversationQuiz
   */

  export type AggregateConversationQuiz = {
    _count: ConversationQuizCountAggregateOutputType | null
    _min: ConversationQuizMinAggregateOutputType | null
    _max: ConversationQuizMaxAggregateOutputType | null
  }

  export type ConversationQuizMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
  }

  export type ConversationQuizMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
  }

  export type ConversationQuizCountAggregateOutputType = {
    id: number
    conversationId: number
    comprehensionSection: number
    _all: number
  }


  export type ConversationQuizMinAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type ConversationQuizMaxAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type ConversationQuizCountAggregateInputType = {
    id?: true
    conversationId?: true
    comprehensionSection?: true
    _all?: true
  }

  export type ConversationQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationQuiz to aggregate.
     */
    where?: ConversationQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationQuizs to fetch.
     */
    orderBy?: ConversationQuizOrderByWithRelationInput | ConversationQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationQuizs
    **/
    _count?: true | ConversationQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationQuizMaxAggregateInputType
  }

  export type GetConversationQuizAggregateType<T extends ConversationQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationQuiz[P]>
      : GetScalarType<T[P], AggregateConversationQuiz[P]>
  }




  export type ConversationQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationQuizWhereInput
    orderBy?: ConversationQuizOrderByWithAggregationInput | ConversationQuizOrderByWithAggregationInput[]
    by: ConversationQuizScalarFieldEnum[] | ConversationQuizScalarFieldEnum
    having?: ConversationQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationQuizCountAggregateInputType | true
    _min?: ConversationQuizMinAggregateInputType
    _max?: ConversationQuizMaxAggregateInputType
  }

  export type ConversationQuizGroupByOutputType = {
    id: string
    conversationId: string
    comprehensionSection: JsonValue
    _count: ConversationQuizCountAggregateOutputType | null
    _min: ConversationQuizMinAggregateOutputType | null
    _max: ConversationQuizMaxAggregateOutputType | null
  }

  type GetConversationQuizGroupByPayload<T extends ConversationQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationQuizGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationQuizGroupByOutputType[P]>
        }
      >
    >


  export type ConversationQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    comprehensionSection?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationQuiz"]>

  export type ConversationQuizSelectScalar = {
    id?: boolean
    conversationId?: boolean
    comprehensionSection?: boolean
  }

  export type ConversationQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }


  export type $ConversationQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationQuiz"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      comprehensionSection: Prisma.JsonValue
    }, ExtArgs["result"]["conversationQuiz"]>
    composites: {}
  }


  type ConversationQuizGetPayload<S extends boolean | null | undefined | ConversationQuizDefaultArgs> = $Result.GetResult<Prisma.$ConversationQuizPayload, S>

  type ConversationQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationQuizFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationQuizCountAggregateInputType | true
    }

  export interface ConversationQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationQuiz'], meta: { name: 'ConversationQuiz' } }
    /**
     * Find zero or one ConversationQuiz that matches the filter.
     * @param {ConversationQuizFindUniqueArgs} args - Arguments to find a ConversationQuiz
     * @example
     * // Get one ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationQuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConversationQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationQuizFindUniqueOrThrowArgs} args - Arguments to find a ConversationQuiz
     * @example
     * // Get one ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationQuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConversationQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizFindFirstArgs} args - Arguments to find a ConversationQuiz
     * @example
     * // Get one ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationQuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConversationQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizFindFirstOrThrowArgs} args - Arguments to find a ConversationQuiz
     * @example
     * // Get one ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationQuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConversationQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationQuizs
     * const conversationQuizs = await prisma.conversationQuiz.findMany()
     * 
     * // Get first 10 ConversationQuizs
     * const conversationQuizs = await prisma.conversationQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationQuizWithIdOnly = await prisma.conversationQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationQuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConversationQuiz.
     * @param {ConversationQuizCreateArgs} args - Arguments to create a ConversationQuiz.
     * @example
     * // Create one ConversationQuiz
     * const ConversationQuiz = await prisma.conversationQuiz.create({
     *   data: {
     *     // ... data to create a ConversationQuiz
     *   }
     * })
     * 
    **/
    create<T extends ConversationQuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizCreateArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ConversationQuizs.
     *     @param {ConversationQuizCreateManyArgs} args - Arguments to create many ConversationQuizs.
     *     @example
     *     // Create many ConversationQuizs
     *     const conversationQuiz = await prisma.conversationQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationQuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConversationQuiz.
     * @param {ConversationQuizDeleteArgs} args - Arguments to delete one ConversationQuiz.
     * @example
     * // Delete one ConversationQuiz
     * const ConversationQuiz = await prisma.conversationQuiz.delete({
     *   where: {
     *     // ... filter to delete one ConversationQuiz
     *   }
     * })
     * 
    **/
    delete<T extends ConversationQuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizDeleteArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConversationQuiz.
     * @param {ConversationQuizUpdateArgs} args - Arguments to update one ConversationQuiz.
     * @example
     * // Update one ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationQuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizUpdateArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConversationQuizs.
     * @param {ConversationQuizDeleteManyArgs} args - Arguments to filter ConversationQuizs to delete.
     * @example
     * // Delete a few ConversationQuizs
     * const { count } = await prisma.conversationQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationQuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationQuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationQuizs
     * const conversationQuiz = await prisma.conversationQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationQuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConversationQuiz.
     * @param {ConversationQuizUpsertArgs} args - Arguments to update or create a ConversationQuiz.
     * @example
     * // Update or create a ConversationQuiz
     * const conversationQuiz = await prisma.conversationQuiz.upsert({
     *   create: {
     *     // ... data to create a ConversationQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationQuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationQuizUpsertArgs<ExtArgs>>
    ): Prisma__ConversationQuizClient<$Result.GetResult<Prisma.$ConversationQuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConversationQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizCountArgs} args - Arguments to filter ConversationQuizs to count.
     * @example
     * // Count the number of ConversationQuizs
     * const count = await prisma.conversationQuiz.count({
     *   where: {
     *     // ... the filter for the ConversationQuizs we want to count
     *   }
     * })
    **/
    count<T extends ConversationQuizCountArgs>(
      args?: Subset<T, ConversationQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationQuizAggregateArgs>(args: Subset<T, ConversationQuizAggregateArgs>): Prisma.PrismaPromise<GetConversationQuizAggregateType<T>>

    /**
     * Group by ConversationQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationQuizGroupByArgs} args - Group by arguments.
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
      T extends ConversationQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationQuizGroupByArgs['orderBy'] }
        : { orderBy?: ConversationQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationQuiz model
   */
  readonly fields: ConversationQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConversationQuiz model
   */ 
  interface ConversationQuizFieldRefs {
    readonly id: FieldRef<"ConversationQuiz", 'String'>
    readonly conversationId: FieldRef<"ConversationQuiz", 'String'>
    readonly comprehensionSection: FieldRef<"ConversationQuiz", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ConversationQuiz findUnique
   */
  export type ConversationQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter, which ConversationQuiz to fetch.
     */
    where: ConversationQuizWhereUniqueInput
  }


  /**
   * ConversationQuiz findUniqueOrThrow
   */
  export type ConversationQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter, which ConversationQuiz to fetch.
     */
    where: ConversationQuizWhereUniqueInput
  }


  /**
   * ConversationQuiz findFirst
   */
  export type ConversationQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter, which ConversationQuiz to fetch.
     */
    where?: ConversationQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationQuizs to fetch.
     */
    orderBy?: ConversationQuizOrderByWithRelationInput | ConversationQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationQuizs.
     */
    cursor?: ConversationQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationQuizs.
     */
    distinct?: ConversationQuizScalarFieldEnum | ConversationQuizScalarFieldEnum[]
  }


  /**
   * ConversationQuiz findFirstOrThrow
   */
  export type ConversationQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter, which ConversationQuiz to fetch.
     */
    where?: ConversationQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationQuizs to fetch.
     */
    orderBy?: ConversationQuizOrderByWithRelationInput | ConversationQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationQuizs.
     */
    cursor?: ConversationQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationQuizs.
     */
    distinct?: ConversationQuizScalarFieldEnum | ConversationQuizScalarFieldEnum[]
  }


  /**
   * ConversationQuiz findMany
   */
  export type ConversationQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter, which ConversationQuizs to fetch.
     */
    where?: ConversationQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationQuizs to fetch.
     */
    orderBy?: ConversationQuizOrderByWithRelationInput | ConversationQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationQuizs.
     */
    cursor?: ConversationQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationQuizs.
     */
    skip?: number
    distinct?: ConversationQuizScalarFieldEnum | ConversationQuizScalarFieldEnum[]
  }


  /**
   * ConversationQuiz create
   */
  export type ConversationQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationQuiz.
     */
    data: XOR<ConversationQuizCreateInput, ConversationQuizUncheckedCreateInput>
  }


  /**
   * ConversationQuiz createMany
   */
  export type ConversationQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationQuizs.
     */
    data: ConversationQuizCreateManyInput | ConversationQuizCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ConversationQuiz update
   */
  export type ConversationQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationQuiz.
     */
    data: XOR<ConversationQuizUpdateInput, ConversationQuizUncheckedUpdateInput>
    /**
     * Choose, which ConversationQuiz to update.
     */
    where: ConversationQuizWhereUniqueInput
  }


  /**
   * ConversationQuiz updateMany
   */
  export type ConversationQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationQuizs.
     */
    data: XOR<ConversationQuizUpdateManyMutationInput, ConversationQuizUncheckedUpdateManyInput>
    /**
     * Filter which ConversationQuizs to update
     */
    where?: ConversationQuizWhereInput
  }


  /**
   * ConversationQuiz upsert
   */
  export type ConversationQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationQuiz to update in case it exists.
     */
    where: ConversationQuizWhereUniqueInput
    /**
     * In case the ConversationQuiz found by the `where` argument doesn't exist, create a new ConversationQuiz with this data.
     */
    create: XOR<ConversationQuizCreateInput, ConversationQuizUncheckedCreateInput>
    /**
     * In case the ConversationQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationQuizUpdateInput, ConversationQuizUncheckedUpdateInput>
  }


  /**
   * ConversationQuiz delete
   */
  export type ConversationQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
    /**
     * Filter which ConversationQuiz to delete.
     */
    where: ConversationQuizWhereUniqueInput
  }


  /**
   * ConversationQuiz deleteMany
   */
  export type ConversationQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationQuizs to delete
     */
    where?: ConversationQuizWhereInput
  }


  /**
   * ConversationQuiz without action
   */
  export type ConversationQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationQuiz
     */
    select?: ConversationQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationQuizInclude<ExtArgs> | null
  }



  /**
   * Model Dialog
   */

  export type AggregateDialog = {
    _count: DialogCountAggregateOutputType | null
    _avg: DialogAvgAggregateOutputType | null
    _sum: DialogSumAggregateOutputType | null
    _min: DialogMinAggregateOutputType | null
    _max: DialogMaxAggregateOutputType | null
  }

  export type DialogAvgAggregateOutputType = {
    index: number | null
  }

  export type DialogSumAggregateOutputType = {
    index: number | null
  }

  export type DialogMinAggregateOutputType = {
    id: string | null
    index: number | null
    speaker: string | null
    scene: string | null
    vietnamese: string | null
    audioSrc: string | null
    conversationId: string | null
  }

  export type DialogMaxAggregateOutputType = {
    id: string | null
    index: number | null
    speaker: string | null
    scene: string | null
    vietnamese: string | null
    audioSrc: string | null
    conversationId: string | null
  }

  export type DialogCountAggregateOutputType = {
    id: number
    index: number
    speaker: number
    scene: number
    vietnamese: number
    audioSrc: number
    conversationId: number
    _all: number
  }


  export type DialogAvgAggregateInputType = {
    index?: true
  }

  export type DialogSumAggregateInputType = {
    index?: true
  }

  export type DialogMinAggregateInputType = {
    id?: true
    index?: true
    speaker?: true
    scene?: true
    vietnamese?: true
    audioSrc?: true
    conversationId?: true
  }

  export type DialogMaxAggregateInputType = {
    id?: true
    index?: true
    speaker?: true
    scene?: true
    vietnamese?: true
    audioSrc?: true
    conversationId?: true
  }

  export type DialogCountAggregateInputType = {
    id?: true
    index?: true
    speaker?: true
    scene?: true
    vietnamese?: true
    audioSrc?: true
    conversationId?: true
    _all?: true
  }

  export type DialogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialog to aggregate.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dialogs
    **/
    _count?: true | DialogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DialogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DialogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DialogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DialogMaxAggregateInputType
  }

  export type GetDialogAggregateType<T extends DialogAggregateArgs> = {
        [P in keyof T & keyof AggregateDialog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDialog[P]>
      : GetScalarType<T[P], AggregateDialog[P]>
  }




  export type DialogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DialogWhereInput
    orderBy?: DialogOrderByWithAggregationInput | DialogOrderByWithAggregationInput[]
    by: DialogScalarFieldEnum[] | DialogScalarFieldEnum
    having?: DialogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DialogCountAggregateInputType | true
    _avg?: DialogAvgAggregateInputType
    _sum?: DialogSumAggregateInputType
    _min?: DialogMinAggregateInputType
    _max?: DialogMaxAggregateInputType
  }

  export type DialogGroupByOutputType = {
    id: string
    index: number
    speaker: string
    scene: string | null
    vietnamese: string
    audioSrc: string | null
    conversationId: string
    _count: DialogCountAggregateOutputType | null
    _avg: DialogAvgAggregateOutputType | null
    _sum: DialogSumAggregateOutputType | null
    _min: DialogMinAggregateOutputType | null
    _max: DialogMaxAggregateOutputType | null
  }

  type GetDialogGroupByPayload<T extends DialogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DialogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DialogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DialogGroupByOutputType[P]>
            : GetScalarType<T[P], DialogGroupByOutputType[P]>
        }
      >
    >


  export type DialogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    speaker?: boolean
    scene?: boolean
    vietnamese?: boolean
    audioSrc?: boolean
    conversationId?: boolean
    words?: boolean | Dialog$wordsArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    _count?: boolean | DialogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dialog"]>

  export type DialogSelectScalar = {
    id?: boolean
    index?: boolean
    speaker?: boolean
    scene?: boolean
    vietnamese?: boolean
    audioSrc?: boolean
    conversationId?: boolean
  }

  export type DialogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | Dialog$wordsArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    _count?: boolean | DialogCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DialogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dialog"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      index: number
      speaker: string
      scene: string | null
      vietnamese: string
      audioSrc: string | null
      conversationId: string
    }, ExtArgs["result"]["dialog"]>
    composites: {}
  }


  type DialogGetPayload<S extends boolean | null | undefined | DialogDefaultArgs> = $Result.GetResult<Prisma.$DialogPayload, S>

  type DialogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DialogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DialogCountAggregateInputType | true
    }

  export interface DialogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dialog'], meta: { name: 'Dialog' } }
    /**
     * Find zero or one Dialog that matches the filter.
     * @param {DialogFindUniqueArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DialogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DialogFindUniqueArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dialog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DialogFindUniqueOrThrowArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DialogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dialog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindFirstArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DialogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindFirstArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dialog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindFirstOrThrowArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DialogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dialogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dialogs
     * const dialogs = await prisma.dialog.findMany()
     * 
     * // Get first 10 Dialogs
     * const dialogs = await prisma.dialog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dialogWithIdOnly = await prisma.dialog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DialogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dialog.
     * @param {DialogCreateArgs} args - Arguments to create a Dialog.
     * @example
     * // Create one Dialog
     * const Dialog = await prisma.dialog.create({
     *   data: {
     *     // ... data to create a Dialog
     *   }
     * })
     * 
    **/
    create<T extends DialogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DialogCreateArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dialogs.
     *     @param {DialogCreateManyArgs} args - Arguments to create many Dialogs.
     *     @example
     *     // Create many Dialogs
     *     const dialog = await prisma.dialog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DialogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dialog.
     * @param {DialogDeleteArgs} args - Arguments to delete one Dialog.
     * @example
     * // Delete one Dialog
     * const Dialog = await prisma.dialog.delete({
     *   where: {
     *     // ... filter to delete one Dialog
     *   }
     * })
     * 
    **/
    delete<T extends DialogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DialogDeleteArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dialog.
     * @param {DialogUpdateArgs} args - Arguments to update one Dialog.
     * @example
     * // Update one Dialog
     * const dialog = await prisma.dialog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DialogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpdateArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dialogs.
     * @param {DialogDeleteManyArgs} args - Arguments to filter Dialogs to delete.
     * @example
     * // Delete a few Dialogs
     * const { count } = await prisma.dialog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DialogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dialogs
     * const dialog = await prisma.dialog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DialogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dialog.
     * @param {DialogUpsertArgs} args - Arguments to update or create a Dialog.
     * @example
     * // Update or create a Dialog
     * const dialog = await prisma.dialog.upsert({
     *   create: {
     *     // ... data to create a Dialog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dialog we want to update
     *   }
     * })
    **/
    upsert<T extends DialogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpsertArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogCountArgs} args - Arguments to filter Dialogs to count.
     * @example
     * // Count the number of Dialogs
     * const count = await prisma.dialog.count({
     *   where: {
     *     // ... the filter for the Dialogs we want to count
     *   }
     * })
    **/
    count<T extends DialogCountArgs>(
      args?: Subset<T, DialogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DialogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DialogAggregateArgs>(args: Subset<T, DialogAggregateArgs>): Prisma.PrismaPromise<GetDialogAggregateType<T>>

    /**
     * Group by Dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogGroupByArgs} args - Group by arguments.
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
      T extends DialogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DialogGroupByArgs['orderBy'] }
        : { orderBy?: DialogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DialogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDialogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dialog model
   */
  readonly fields: DialogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dialog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DialogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    words<T extends Dialog$wordsArgs<ExtArgs> = {}>(args?: Subset<T, Dialog$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findMany'> | Null>;

    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dialog model
   */ 
  interface DialogFieldRefs {
    readonly id: FieldRef<"Dialog", 'String'>
    readonly index: FieldRef<"Dialog", 'Int'>
    readonly speaker: FieldRef<"Dialog", 'String'>
    readonly scene: FieldRef<"Dialog", 'String'>
    readonly vietnamese: FieldRef<"Dialog", 'String'>
    readonly audioSrc: FieldRef<"Dialog", 'String'>
    readonly conversationId: FieldRef<"Dialog", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dialog findUnique
   */
  export type DialogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog findUniqueOrThrow
   */
  export type DialogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog findFirst
   */
  export type DialogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialogs.
     */
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog findFirstOrThrow
   */
  export type DialogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialogs.
     */
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog findMany
   */
  export type DialogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialogs to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog create
   */
  export type DialogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The data needed to create a Dialog.
     */
    data: XOR<DialogCreateInput, DialogUncheckedCreateInput>
  }


  /**
   * Dialog createMany
   */
  export type DialogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dialogs.
     */
    data: DialogCreateManyInput | DialogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dialog update
   */
  export type DialogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The data needed to update a Dialog.
     */
    data: XOR<DialogUpdateInput, DialogUncheckedUpdateInput>
    /**
     * Choose, which Dialog to update.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog updateMany
   */
  export type DialogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dialogs.
     */
    data: XOR<DialogUpdateManyMutationInput, DialogUncheckedUpdateManyInput>
    /**
     * Filter which Dialogs to update
     */
    where?: DialogWhereInput
  }


  /**
   * Dialog upsert
   */
  export type DialogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The filter to search for the Dialog to update in case it exists.
     */
    where: DialogWhereUniqueInput
    /**
     * In case the Dialog found by the `where` argument doesn't exist, create a new Dialog with this data.
     */
    create: XOR<DialogCreateInput, DialogUncheckedCreateInput>
    /**
     * In case the Dialog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DialogUpdateInput, DialogUncheckedUpdateInput>
  }


  /**
   * Dialog delete
   */
  export type DialogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter which Dialog to delete.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog deleteMany
   */
  export type DialogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialogs to delete
     */
    where?: DialogWhereInput
  }


  /**
   * Dialog.words
   */
  export type Dialog$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Dialog without action
   */
  export type DialogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
  }



  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordMinAggregateOutputType = {
    vietnamese: string | null
    maleSrc: string | null
    femaleSrc: string | null
  }

  export type WordMaxAggregateOutputType = {
    vietnamese: string | null
    maleSrc: string | null
    femaleSrc: string | null
  }

  export type WordCountAggregateOutputType = {
    vietnamese: number
    maleSrc: number
    femaleSrc: number
    _all: number
  }


  export type WordMinAggregateInputType = {
    vietnamese?: true
    maleSrc?: true
    femaleSrc?: true
  }

  export type WordMaxAggregateInputType = {
    vietnamese?: true
    maleSrc?: true
    femaleSrc?: true
  }

  export type WordCountAggregateInputType = {
    vietnamese?: true
    maleSrc?: true
    femaleSrc?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    vietnamese: string
    maleSrc: string | null
    femaleSrc: string | null
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vietnamese?: boolean
    maleSrc?: boolean
    femaleSrc?: boolean
    dialog?: boolean | Word$dialogArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    vietnamese?: boolean
    maleSrc?: boolean
    femaleSrc?: boolean
  }

  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialog?: boolean | Word$dialogArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      dialog: Prisma.$DialogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vietnamese: string
      maleSrc: string | null
      femaleSrc: string | null
    }, ExtArgs["result"]["word"]>
    composites: {}
  }


  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Word that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `vietnamese`
     * const wordWithVietnameseOnly = await prisma.word.findMany({ select: { vietnamese: true } })
     * 
    **/
    findMany<T extends WordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
    **/
    create<T extends WordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WordCreateArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Words.
     *     @param {WordCreateManyArgs} args - Arguments to create many Words.
     *     @example
     *     // Create many Words
     *     const word = await prisma.word.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
    **/
    delete<T extends WordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WordDeleteArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpdateArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
    **/
    upsert<T extends WordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpsertArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dialog<T extends Word$dialogArgs<ExtArgs> = {}>(args?: Subset<T, Word$dialogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Word model
   */ 
  interface WordFieldRefs {
    readonly vietnamese: FieldRef<"Word", 'String'>
    readonly maleSrc: FieldRef<"Word", 'String'>
    readonly femaleSrc: FieldRef<"Word", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }


  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
  }


  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }


  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
  }


  /**
   * Word.dialog
   */
  export type Word$dialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    where?: DialogWhereInput
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    cursor?: DialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    published: 'published',
    date: 'date'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const ConversationSituationScalarFieldEnum: {
    id: 'id',
    text: 'text',
    type: 'type',
    conversationId: 'conversationId',
    imageSrc: 'imageSrc'
  };

  export type ConversationSituationScalarFieldEnum = (typeof ConversationSituationScalarFieldEnum)[keyof typeof ConversationSituationScalarFieldEnum]


  export const ConversationQuizScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    comprehensionSection: 'comprehensionSection'
  };

  export type ConversationQuizScalarFieldEnum = (typeof ConversationQuizScalarFieldEnum)[keyof typeof ConversationQuizScalarFieldEnum]


  export const DialogScalarFieldEnum: {
    id: 'id',
    index: 'index',
    speaker: 'speaker',
    scene: 'scene',
    vietnamese: 'vietnamese',
    audioSrc: 'audioSrc',
    conversationId: 'conversationId'
  };

  export type DialogScalarFieldEnum = (typeof DialogScalarFieldEnum)[keyof typeof DialogScalarFieldEnum]


  export const WordScalarFieldEnum: {
    vietnamese: 'vietnamese',
    maleSrc: 'maleSrc',
    femaleSrc: 'femaleSrc'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    published?: BoolFilter<"Conversation"> | boolean
    date?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    dialog?: DialogListRelationFilter
    situation?: XOR<ConversationSituationNullableRelationFilter, ConversationSituationWhereInput> | null
    conversationQuiz?: XOR<ConversationQuizNullableRelationFilter, ConversationQuizWhereInput> | null
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    date?: SortOrderInput | SortOrder
    dialog?: DialogOrderByRelationAggregateInput
    situation?: ConversationSituationOrderByWithRelationInput
    conversationQuiz?: ConversationQuizOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    title?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    published?: BoolFilter<"Conversation"> | boolean
    date?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    dialog?: DialogListRelationFilter
    situation?: XOR<ConversationSituationNullableRelationFilter, ConversationSituationWhereInput> | null
    conversationQuiz?: XOR<ConversationQuizNullableRelationFilter, ConversationQuizWhereInput> | null
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    date?: SortOrderInput | SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    title?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    published?: BoolWithAggregatesFilter<"Conversation"> | boolean
    date?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
  }

  export type ConversationSituationWhereInput = {
    AND?: ConversationSituationWhereInput | ConversationSituationWhereInput[]
    OR?: ConversationSituationWhereInput[]
    NOT?: ConversationSituationWhereInput | ConversationSituationWhereInput[]
    id?: StringFilter<"ConversationSituation"> | string
    text?: StringFilter<"ConversationSituation"> | string
    type?: StringFilter<"ConversationSituation"> | string
    conversationId?: StringNullableFilter<"ConversationSituation"> | string | null
    imageSrc?: StringNullableFilter<"ConversationSituation"> | string | null
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }

  export type ConversationSituationOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    imageSrc?: SortOrderInput | SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type ConversationSituationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    text?: string
    conversationId?: string
    AND?: ConversationSituationWhereInput | ConversationSituationWhereInput[]
    OR?: ConversationSituationWhereInput[]
    NOT?: ConversationSituationWhereInput | ConversationSituationWhereInput[]
    type?: StringFilter<"ConversationSituation"> | string
    imageSrc?: StringNullableFilter<"ConversationSituation"> | string | null
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }, "id" | "text" | "conversationId">

  export type ConversationSituationOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    imageSrc?: SortOrderInput | SortOrder
    _count?: ConversationSituationCountOrderByAggregateInput
    _max?: ConversationSituationMaxOrderByAggregateInput
    _min?: ConversationSituationMinOrderByAggregateInput
  }

  export type ConversationSituationScalarWhereWithAggregatesInput = {
    AND?: ConversationSituationScalarWhereWithAggregatesInput | ConversationSituationScalarWhereWithAggregatesInput[]
    OR?: ConversationSituationScalarWhereWithAggregatesInput[]
    NOT?: ConversationSituationScalarWhereWithAggregatesInput | ConversationSituationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationSituation"> | string
    text?: StringWithAggregatesFilter<"ConversationSituation"> | string
    type?: StringWithAggregatesFilter<"ConversationSituation"> | string
    conversationId?: StringNullableWithAggregatesFilter<"ConversationSituation"> | string | null
    imageSrc?: StringNullableWithAggregatesFilter<"ConversationSituation"> | string | null
  }

  export type ConversationQuizWhereInput = {
    AND?: ConversationQuizWhereInput | ConversationQuizWhereInput[]
    OR?: ConversationQuizWhereInput[]
    NOT?: ConversationQuizWhereInput | ConversationQuizWhereInput[]
    id?: StringFilter<"ConversationQuiz"> | string
    conversationId?: StringFilter<"ConversationQuiz"> | string
    comprehensionSection?: JsonFilter<"ConversationQuiz">
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }

  export type ConversationQuizOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    comprehensionSection?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type ConversationQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId?: string
    AND?: ConversationQuizWhereInput | ConversationQuizWhereInput[]
    OR?: ConversationQuizWhereInput[]
    NOT?: ConversationQuizWhereInput | ConversationQuizWhereInput[]
    comprehensionSection?: JsonFilter<"ConversationQuiz">
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }, "id" | "conversationId">

  export type ConversationQuizOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    comprehensionSection?: SortOrder
    _count?: ConversationQuizCountOrderByAggregateInput
    _max?: ConversationQuizMaxOrderByAggregateInput
    _min?: ConversationQuizMinOrderByAggregateInput
  }

  export type ConversationQuizScalarWhereWithAggregatesInput = {
    AND?: ConversationQuizScalarWhereWithAggregatesInput | ConversationQuizScalarWhereWithAggregatesInput[]
    OR?: ConversationQuizScalarWhereWithAggregatesInput[]
    NOT?: ConversationQuizScalarWhereWithAggregatesInput | ConversationQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationQuiz"> | string
    conversationId?: StringWithAggregatesFilter<"ConversationQuiz"> | string
    comprehensionSection?: JsonWithAggregatesFilter<"ConversationQuiz">
  }

  export type DialogWhereInput = {
    AND?: DialogWhereInput | DialogWhereInput[]
    OR?: DialogWhereInput[]
    NOT?: DialogWhereInput | DialogWhereInput[]
    id?: StringFilter<"Dialog"> | string
    index?: IntFilter<"Dialog"> | number
    speaker?: StringFilter<"Dialog"> | string
    scene?: StringNullableFilter<"Dialog"> | string | null
    vietnamese?: StringFilter<"Dialog"> | string
    audioSrc?: StringNullableFilter<"Dialog"> | string | null
    conversationId?: StringFilter<"Dialog"> | string
    words?: WordListRelationFilter
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }

  export type DialogOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    speaker?: SortOrder
    scene?: SortOrderInput | SortOrder
    vietnamese?: SortOrder
    audioSrc?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    words?: WordOrderByRelationAggregateInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type DialogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DialogWhereInput | DialogWhereInput[]
    OR?: DialogWhereInput[]
    NOT?: DialogWhereInput | DialogWhereInput[]
    index?: IntFilter<"Dialog"> | number
    speaker?: StringFilter<"Dialog"> | string
    scene?: StringNullableFilter<"Dialog"> | string | null
    vietnamese?: StringFilter<"Dialog"> | string
    audioSrc?: StringNullableFilter<"Dialog"> | string | null
    conversationId?: StringFilter<"Dialog"> | string
    words?: WordListRelationFilter
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }, "id">

  export type DialogOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    speaker?: SortOrder
    scene?: SortOrderInput | SortOrder
    vietnamese?: SortOrder
    audioSrc?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    _count?: DialogCountOrderByAggregateInput
    _avg?: DialogAvgOrderByAggregateInput
    _max?: DialogMaxOrderByAggregateInput
    _min?: DialogMinOrderByAggregateInput
    _sum?: DialogSumOrderByAggregateInput
  }

  export type DialogScalarWhereWithAggregatesInput = {
    AND?: DialogScalarWhereWithAggregatesInput | DialogScalarWhereWithAggregatesInput[]
    OR?: DialogScalarWhereWithAggregatesInput[]
    NOT?: DialogScalarWhereWithAggregatesInput | DialogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dialog"> | string
    index?: IntWithAggregatesFilter<"Dialog"> | number
    speaker?: StringWithAggregatesFilter<"Dialog"> | string
    scene?: StringNullableWithAggregatesFilter<"Dialog"> | string | null
    vietnamese?: StringWithAggregatesFilter<"Dialog"> | string
    audioSrc?: StringNullableWithAggregatesFilter<"Dialog"> | string | null
    conversationId?: StringWithAggregatesFilter<"Dialog"> | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    vietnamese?: StringFilter<"Word"> | string
    maleSrc?: StringNullableFilter<"Word"> | string | null
    femaleSrc?: StringNullableFilter<"Word"> | string | null
    dialog?: DialogListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    vietnamese?: SortOrder
    maleSrc?: SortOrderInput | SortOrder
    femaleSrc?: SortOrderInput | SortOrder
    dialog?: DialogOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    vietnamese?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    maleSrc?: StringNullableFilter<"Word"> | string | null
    femaleSrc?: StringNullableFilter<"Word"> | string | null
    dialog?: DialogListRelationFilter
  }, "vietnamese">

  export type WordOrderByWithAggregationInput = {
    vietnamese?: SortOrder
    maleSrc?: SortOrderInput | SortOrder
    femaleSrc?: SortOrderInput | SortOrder
    _count?: WordCountOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    vietnamese?: StringWithAggregatesFilter<"Word"> | string
    maleSrc?: StringNullableWithAggregatesFilter<"Word"> | string | null
    femaleSrc?: StringNullableWithAggregatesFilter<"Word"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ConversationCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogCreateNestedManyWithoutConversationInput
    situation?: ConversationSituationCreateNestedOneWithoutConversationInput
    conversationQuiz?: ConversationQuizCreateNestedOneWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogUncheckedCreateNestedManyWithoutConversationInput
    situation?: ConversationSituationUncheckedCreateNestedOneWithoutConversationInput
    conversationQuiz?: ConversationQuizUncheckedCreateNestedOneWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUpdateManyWithoutConversationNestedInput
    situation?: ConversationSituationUpdateOneWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUpdateOneWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUncheckedUpdateManyWithoutConversationNestedInput
    situation?: ConversationSituationUncheckedUpdateOneWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUncheckedUpdateOneWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationSituationCreateInput = {
    id?: string
    text: string
    type: string
    imageSrc?: string | null
    conversation?: ConversationCreateNestedOneWithoutSituationInput
  }

  export type ConversationSituationUncheckedCreateInput = {
    id?: string
    text: string
    type: string
    conversationId?: string | null
    imageSrc?: string | null
  }

  export type ConversationSituationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversation?: ConversationUpdateOneWithoutSituationNestedInput
  }

  export type ConversationSituationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationSituationCreateManyInput = {
    id?: string
    text: string
    type: string
    conversationId?: string | null
    imageSrc?: string | null
  }

  export type ConversationSituationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationSituationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationQuizCreateInput = {
    id?: string
    comprehensionSection: JsonNullValueInput | InputJsonValue
    conversation: ConversationCreateNestedOneWithoutConversationQuizInput
  }

  export type ConversationQuizUncheckedCreateInput = {
    id?: string
    conversationId: string
    comprehensionSection: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
    conversation?: ConversationUpdateOneRequiredWithoutConversationQuizNestedInput
  }

  export type ConversationQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizCreateManyInput = {
    id?: string
    conversationId: string
    comprehensionSection: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
  }

  export type DialogCreateInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    words?: WordCreateNestedManyWithoutDialogInput
    conversation: ConversationCreateNestedOneWithoutDialogInput
  }

  export type DialogUncheckedCreateInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    conversationId: string
    words?: WordUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUpdateManyWithoutDialogNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    words?: WordUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type DialogCreateManyInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    conversationId: string
  }

  export type DialogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DialogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type WordCreateInput = {
    vietnamese: string
    maleSrc?: string | null
    femaleSrc?: string | null
    dialog?: DialogCreateNestedManyWithoutWordsInput
  }

  export type WordUncheckedCreateInput = {
    vietnamese: string
    maleSrc?: string | null
    femaleSrc?: string | null
    dialog?: DialogUncheckedCreateNestedManyWithoutWordsInput
  }

  export type WordUpdateInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    dialog?: DialogUpdateManyWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    dialog?: DialogUncheckedUpdateManyWithoutWordsNestedInput
  }

  export type WordCreateManyInput = {
    vietnamese: string
    maleSrc?: string | null
    femaleSrc?: string | null
  }

  export type WordUpdateManyMutationInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUncheckedUpdateManyInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DialogListRelationFilter = {
    every?: DialogWhereInput
    some?: DialogWhereInput
    none?: DialogWhereInput
  }

  export type ConversationSituationNullableRelationFilter = {
    is?: ConversationSituationWhereInput | null
    isNot?: ConversationSituationWhereInput | null
  }

  export type ConversationQuizNullableRelationFilter = {
    is?: ConversationQuizWhereInput | null
    isNot?: ConversationQuizWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DialogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    date?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    date?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    date?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ConversationNullableRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type ConversationSituationCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    conversationId?: SortOrder
    imageSrc?: SortOrder
  }

  export type ConversationSituationMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    conversationId?: SortOrder
    imageSrc?: SortOrder
  }

  export type ConversationSituationMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    conversationId?: SortOrder
    imageSrc?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type ConversationQuizCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    comprehensionSection?: SortOrder
  }

  export type ConversationQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type ConversationQuizMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DialogCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    speaker?: SortOrder
    scene?: SortOrder
    vietnamese?: SortOrder
    audioSrc?: SortOrder
    conversationId?: SortOrder
  }

  export type DialogAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type DialogMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    speaker?: SortOrder
    scene?: SortOrder
    vietnamese?: SortOrder
    audioSrc?: SortOrder
    conversationId?: SortOrder
  }

  export type DialogMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    speaker?: SortOrder
    scene?: SortOrder
    vietnamese?: SortOrder
    audioSrc?: SortOrder
    conversationId?: SortOrder
  }

  export type DialogSumOrderByAggregateInput = {
    index?: SortOrder
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

  export type WordCountOrderByAggregateInput = {
    vietnamese?: SortOrder
    maleSrc?: SortOrder
    femaleSrc?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    vietnamese?: SortOrder
    maleSrc?: SortOrder
    femaleSrc?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    vietnamese?: SortOrder
    maleSrc?: SortOrder
    femaleSrc?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type DialogCreateNestedManyWithoutConversationInput = {
    create?: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput> | DialogCreateWithoutConversationInput[] | DialogUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutConversationInput | DialogCreateOrConnectWithoutConversationInput[]
    createMany?: DialogCreateManyConversationInputEnvelope
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
  }

  export type ConversationSituationCreateNestedOneWithoutConversationInput = {
    create?: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationSituationCreateOrConnectWithoutConversationInput
    connect?: ConversationSituationWhereUniqueInput
  }

  export type ConversationQuizCreateNestedOneWithoutConversationInput = {
    create?: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationQuizCreateOrConnectWithoutConversationInput
    connect?: ConversationQuizWhereUniqueInput
  }

  export type DialogUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput> | DialogCreateWithoutConversationInput[] | DialogUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutConversationInput | DialogCreateOrConnectWithoutConversationInput[]
    createMany?: DialogCreateManyConversationInputEnvelope
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
  }

  export type ConversationSituationUncheckedCreateNestedOneWithoutConversationInput = {
    create?: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationSituationCreateOrConnectWithoutConversationInput
    connect?: ConversationSituationWhereUniqueInput
  }

  export type ConversationQuizUncheckedCreateNestedOneWithoutConversationInput = {
    create?: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationQuizCreateOrConnectWithoutConversationInput
    connect?: ConversationQuizWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DialogUpdateManyWithoutConversationNestedInput = {
    create?: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput> | DialogCreateWithoutConversationInput[] | DialogUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutConversationInput | DialogCreateOrConnectWithoutConversationInput[]
    upsert?: DialogUpsertWithWhereUniqueWithoutConversationInput | DialogUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: DialogCreateManyConversationInputEnvelope
    set?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    disconnect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    delete?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    update?: DialogUpdateWithWhereUniqueWithoutConversationInput | DialogUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: DialogUpdateManyWithWhereWithoutConversationInput | DialogUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: DialogScalarWhereInput | DialogScalarWhereInput[]
  }

  export type ConversationSituationUpdateOneWithoutConversationNestedInput = {
    create?: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationSituationCreateOrConnectWithoutConversationInput
    upsert?: ConversationSituationUpsertWithoutConversationInput
    disconnect?: ConversationSituationWhereInput | boolean
    delete?: ConversationSituationWhereInput | boolean
    connect?: ConversationSituationWhereUniqueInput
    update?: XOR<XOR<ConversationSituationUpdateToOneWithWhereWithoutConversationInput, ConversationSituationUpdateWithoutConversationInput>, ConversationSituationUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationQuizUpdateOneWithoutConversationNestedInput = {
    create?: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationQuizCreateOrConnectWithoutConversationInput
    upsert?: ConversationQuizUpsertWithoutConversationInput
    disconnect?: ConversationQuizWhereInput | boolean
    delete?: ConversationQuizWhereInput | boolean
    connect?: ConversationQuizWhereUniqueInput
    update?: XOR<XOR<ConversationQuizUpdateToOneWithWhereWithoutConversationInput, ConversationQuizUpdateWithoutConversationInput>, ConversationQuizUncheckedUpdateWithoutConversationInput>
  }

  export type DialogUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput> | DialogCreateWithoutConversationInput[] | DialogUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutConversationInput | DialogCreateOrConnectWithoutConversationInput[]
    upsert?: DialogUpsertWithWhereUniqueWithoutConversationInput | DialogUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: DialogCreateManyConversationInputEnvelope
    set?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    disconnect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    delete?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    update?: DialogUpdateWithWhereUniqueWithoutConversationInput | DialogUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: DialogUpdateManyWithWhereWithoutConversationInput | DialogUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: DialogScalarWhereInput | DialogScalarWhereInput[]
  }

  export type ConversationSituationUncheckedUpdateOneWithoutConversationNestedInput = {
    create?: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationSituationCreateOrConnectWithoutConversationInput
    upsert?: ConversationSituationUpsertWithoutConversationInput
    disconnect?: ConversationSituationWhereInput | boolean
    delete?: ConversationSituationWhereInput | boolean
    connect?: ConversationSituationWhereUniqueInput
    update?: XOR<XOR<ConversationSituationUpdateToOneWithWhereWithoutConversationInput, ConversationSituationUpdateWithoutConversationInput>, ConversationSituationUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationQuizUncheckedUpdateOneWithoutConversationNestedInput = {
    create?: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
    connectOrCreate?: ConversationQuizCreateOrConnectWithoutConversationInput
    upsert?: ConversationQuizUpsertWithoutConversationInput
    disconnect?: ConversationQuizWhereInput | boolean
    delete?: ConversationQuizWhereInput | boolean
    connect?: ConversationQuizWhereUniqueInput
    update?: XOR<XOR<ConversationQuizUpdateToOneWithWhereWithoutConversationInput, ConversationQuizUpdateWithoutConversationInput>, ConversationQuizUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationCreateNestedOneWithoutSituationInput = {
    create?: XOR<ConversationCreateWithoutSituationInput, ConversationUncheckedCreateWithoutSituationInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSituationInput
    connect?: ConversationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConversationUpdateOneWithoutSituationNestedInput = {
    create?: XOR<ConversationCreateWithoutSituationInput, ConversationUncheckedCreateWithoutSituationInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSituationInput
    upsert?: ConversationUpsertWithoutSituationInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutSituationInput, ConversationUpdateWithoutSituationInput>, ConversationUncheckedUpdateWithoutSituationInput>
  }

  export type ConversationCreateNestedOneWithoutConversationQuizInput = {
    create?: XOR<ConversationCreateWithoutConversationQuizInput, ConversationUncheckedCreateWithoutConversationQuizInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutConversationQuizInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutConversationQuizNestedInput = {
    create?: XOR<ConversationCreateWithoutConversationQuizInput, ConversationUncheckedCreateWithoutConversationQuizInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutConversationQuizInput
    upsert?: ConversationUpsertWithoutConversationQuizInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutConversationQuizInput, ConversationUpdateWithoutConversationQuizInput>, ConversationUncheckedUpdateWithoutConversationQuizInput>
  }

  export type WordCreateNestedManyWithoutDialogInput = {
    create?: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput> | WordCreateWithoutDialogInput[] | WordUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: WordCreateOrConnectWithoutDialogInput | WordCreateOrConnectWithoutDialogInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type ConversationCreateNestedOneWithoutDialogInput = {
    create?: XOR<ConversationCreateWithoutDialogInput, ConversationUncheckedCreateWithoutDialogInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutDialogInput
    connect?: ConversationWhereUniqueInput
  }

  export type WordUncheckedCreateNestedManyWithoutDialogInput = {
    create?: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput> | WordCreateWithoutDialogInput[] | WordUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: WordCreateOrConnectWithoutDialogInput | WordCreateOrConnectWithoutDialogInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WordUpdateManyWithoutDialogNestedInput = {
    create?: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput> | WordCreateWithoutDialogInput[] | WordUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: WordCreateOrConnectWithoutDialogInput | WordCreateOrConnectWithoutDialogInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutDialogInput | WordUpsertWithWhereUniqueWithoutDialogInput[]
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutDialogInput | WordUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: WordUpdateManyWithWhereWithoutDialogInput | WordUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type ConversationUpdateOneRequiredWithoutDialogNestedInput = {
    create?: XOR<ConversationCreateWithoutDialogInput, ConversationUncheckedCreateWithoutDialogInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutDialogInput
    upsert?: ConversationUpsertWithoutDialogInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutDialogInput, ConversationUpdateWithoutDialogInput>, ConversationUncheckedUpdateWithoutDialogInput>
  }

  export type WordUncheckedUpdateManyWithoutDialogNestedInput = {
    create?: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput> | WordCreateWithoutDialogInput[] | WordUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: WordCreateOrConnectWithoutDialogInput | WordCreateOrConnectWithoutDialogInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutDialogInput | WordUpsertWithWhereUniqueWithoutDialogInput[]
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutDialogInput | WordUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: WordUpdateManyWithWhereWithoutDialogInput | WordUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type DialogCreateNestedManyWithoutWordsInput = {
    create?: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput> | DialogCreateWithoutWordsInput[] | DialogUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutWordsInput | DialogCreateOrConnectWithoutWordsInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
  }

  export type DialogUncheckedCreateNestedManyWithoutWordsInput = {
    create?: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput> | DialogCreateWithoutWordsInput[] | DialogUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutWordsInput | DialogCreateOrConnectWithoutWordsInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
  }

  export type DialogUpdateManyWithoutWordsNestedInput = {
    create?: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput> | DialogCreateWithoutWordsInput[] | DialogUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutWordsInput | DialogCreateOrConnectWithoutWordsInput[]
    upsert?: DialogUpsertWithWhereUniqueWithoutWordsInput | DialogUpsertWithWhereUniqueWithoutWordsInput[]
    set?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    disconnect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    delete?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    update?: DialogUpdateWithWhereUniqueWithoutWordsInput | DialogUpdateWithWhereUniqueWithoutWordsInput[]
    updateMany?: DialogUpdateManyWithWhereWithoutWordsInput | DialogUpdateManyWithWhereWithoutWordsInput[]
    deleteMany?: DialogScalarWhereInput | DialogScalarWhereInput[]
  }

  export type DialogUncheckedUpdateManyWithoutWordsNestedInput = {
    create?: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput> | DialogCreateWithoutWordsInput[] | DialogUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: DialogCreateOrConnectWithoutWordsInput | DialogCreateOrConnectWithoutWordsInput[]
    upsert?: DialogUpsertWithWhereUniqueWithoutWordsInput | DialogUpsertWithWhereUniqueWithoutWordsInput[]
    set?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    disconnect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    delete?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    connect?: DialogWhereUniqueInput | DialogWhereUniqueInput[]
    update?: DialogUpdateWithWhereUniqueWithoutWordsInput | DialogUpdateWithWhereUniqueWithoutWordsInput[]
    updateMany?: DialogUpdateManyWithWhereWithoutWordsInput | DialogUpdateManyWithWhereWithoutWordsInput[]
    deleteMany?: DialogScalarWhereInput | DialogScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type DialogCreateWithoutConversationInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    words?: WordCreateNestedManyWithoutDialogInput
  }

  export type DialogUncheckedCreateWithoutConversationInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    words?: WordUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogCreateOrConnectWithoutConversationInput = {
    where: DialogWhereUniqueInput
    create: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput>
  }

  export type DialogCreateManyConversationInputEnvelope = {
    data: DialogCreateManyConversationInput | DialogCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ConversationSituationCreateWithoutConversationInput = {
    id?: string
    text: string
    type: string
    imageSrc?: string | null
  }

  export type ConversationSituationUncheckedCreateWithoutConversationInput = {
    id?: string
    text: string
    type: string
    imageSrc?: string | null
  }

  export type ConversationSituationCreateOrConnectWithoutConversationInput = {
    where: ConversationSituationWhereUniqueInput
    create: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
  }

  export type ConversationQuizCreateWithoutConversationInput = {
    id?: string
    comprehensionSection: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizUncheckedCreateWithoutConversationInput = {
    id?: string
    comprehensionSection: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizCreateOrConnectWithoutConversationInput = {
    where: ConversationQuizWhereUniqueInput
    create: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
  }

  export type DialogUpsertWithWhereUniqueWithoutConversationInput = {
    where: DialogWhereUniqueInput
    update: XOR<DialogUpdateWithoutConversationInput, DialogUncheckedUpdateWithoutConversationInput>
    create: XOR<DialogCreateWithoutConversationInput, DialogUncheckedCreateWithoutConversationInput>
  }

  export type DialogUpdateWithWhereUniqueWithoutConversationInput = {
    where: DialogWhereUniqueInput
    data: XOR<DialogUpdateWithoutConversationInput, DialogUncheckedUpdateWithoutConversationInput>
  }

  export type DialogUpdateManyWithWhereWithoutConversationInput = {
    where: DialogScalarWhereInput
    data: XOR<DialogUpdateManyMutationInput, DialogUncheckedUpdateManyWithoutConversationInput>
  }

  export type DialogScalarWhereInput = {
    AND?: DialogScalarWhereInput | DialogScalarWhereInput[]
    OR?: DialogScalarWhereInput[]
    NOT?: DialogScalarWhereInput | DialogScalarWhereInput[]
    id?: StringFilter<"Dialog"> | string
    index?: IntFilter<"Dialog"> | number
    speaker?: StringFilter<"Dialog"> | string
    scene?: StringNullableFilter<"Dialog"> | string | null
    vietnamese?: StringFilter<"Dialog"> | string
    audioSrc?: StringNullableFilter<"Dialog"> | string | null
    conversationId?: StringFilter<"Dialog"> | string
  }

  export type ConversationSituationUpsertWithoutConversationInput = {
    update: XOR<ConversationSituationUpdateWithoutConversationInput, ConversationSituationUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationSituationCreateWithoutConversationInput, ConversationSituationUncheckedCreateWithoutConversationInput>
    where?: ConversationSituationWhereInput
  }

  export type ConversationSituationUpdateToOneWithWhereWithoutConversationInput = {
    where?: ConversationSituationWhereInput
    data: XOR<ConversationSituationUpdateWithoutConversationInput, ConversationSituationUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationSituationUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationSituationUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationQuizUpsertWithoutConversationInput = {
    update: XOR<ConversationQuizUpdateWithoutConversationInput, ConversationQuizUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationQuizCreateWithoutConversationInput, ConversationQuizUncheckedCreateWithoutConversationInput>
    where?: ConversationQuizWhereInput
  }

  export type ConversationQuizUpdateToOneWithWhereWithoutConversationInput = {
    where?: ConversationQuizWhereInput
    data: XOR<ConversationQuizUpdateWithoutConversationInput, ConversationQuizUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationQuizUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
  }

  export type ConversationQuizUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comprehensionSection?: JsonNullValueInput | InputJsonValue
  }

  export type ConversationCreateWithoutSituationInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogCreateNestedManyWithoutConversationInput
    conversationQuiz?: ConversationQuizCreateNestedOneWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutSituationInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogUncheckedCreateNestedManyWithoutConversationInput
    conversationQuiz?: ConversationQuizUncheckedCreateNestedOneWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutSituationInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutSituationInput, ConversationUncheckedCreateWithoutSituationInput>
  }

  export type ConversationUpsertWithoutSituationInput = {
    update: XOR<ConversationUpdateWithoutSituationInput, ConversationUncheckedUpdateWithoutSituationInput>
    create: XOR<ConversationCreateWithoutSituationInput, ConversationUncheckedCreateWithoutSituationInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutSituationInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutSituationInput, ConversationUncheckedUpdateWithoutSituationInput>
  }

  export type ConversationUpdateWithoutSituationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUpdateManyWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUpdateOneWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutSituationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUncheckedUpdateManyWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUncheckedUpdateOneWithoutConversationNestedInput
  }

  export type ConversationCreateWithoutConversationQuizInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogCreateNestedManyWithoutConversationInput
    situation?: ConversationSituationCreateNestedOneWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutConversationQuizInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    dialog?: DialogUncheckedCreateNestedManyWithoutConversationInput
    situation?: ConversationSituationUncheckedCreateNestedOneWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutConversationQuizInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutConversationQuizInput, ConversationUncheckedCreateWithoutConversationQuizInput>
  }

  export type ConversationUpsertWithoutConversationQuizInput = {
    update: XOR<ConversationUpdateWithoutConversationQuizInput, ConversationUncheckedUpdateWithoutConversationQuizInput>
    create: XOR<ConversationCreateWithoutConversationQuizInput, ConversationUncheckedCreateWithoutConversationQuizInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutConversationQuizInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutConversationQuizInput, ConversationUncheckedUpdateWithoutConversationQuizInput>
  }

  export type ConversationUpdateWithoutConversationQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUpdateManyWithoutConversationNestedInput
    situation?: ConversationSituationUpdateOneWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutConversationQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dialog?: DialogUncheckedUpdateManyWithoutConversationNestedInput
    situation?: ConversationSituationUncheckedUpdateOneWithoutConversationNestedInput
  }

  export type WordCreateWithoutDialogInput = {
    vietnamese: string
    maleSrc?: string | null
    femaleSrc?: string | null
  }

  export type WordUncheckedCreateWithoutDialogInput = {
    vietnamese: string
    maleSrc?: string | null
    femaleSrc?: string | null
  }

  export type WordCreateOrConnectWithoutDialogInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput>
  }

  export type ConversationCreateWithoutDialogInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    situation?: ConversationSituationCreateNestedOneWithoutConversationInput
    conversationQuiz?: ConversationQuizCreateNestedOneWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutDialogInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    date?: Date | string | null
    situation?: ConversationSituationUncheckedCreateNestedOneWithoutConversationInput
    conversationQuiz?: ConversationQuizUncheckedCreateNestedOneWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutDialogInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutDialogInput, ConversationUncheckedCreateWithoutDialogInput>
  }

  export type WordUpsertWithWhereUniqueWithoutDialogInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutDialogInput, WordUncheckedUpdateWithoutDialogInput>
    create: XOR<WordCreateWithoutDialogInput, WordUncheckedCreateWithoutDialogInput>
  }

  export type WordUpdateWithWhereUniqueWithoutDialogInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutDialogInput, WordUncheckedUpdateWithoutDialogInput>
  }

  export type WordUpdateManyWithWhereWithoutDialogInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutDialogInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    vietnamese?: StringFilter<"Word"> | string
    maleSrc?: StringNullableFilter<"Word"> | string | null
    femaleSrc?: StringNullableFilter<"Word"> | string | null
  }

  export type ConversationUpsertWithoutDialogInput = {
    update: XOR<ConversationUpdateWithoutDialogInput, ConversationUncheckedUpdateWithoutDialogInput>
    create: XOR<ConversationCreateWithoutDialogInput, ConversationUncheckedCreateWithoutDialogInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutDialogInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutDialogInput, ConversationUncheckedUpdateWithoutDialogInput>
  }

  export type ConversationUpdateWithoutDialogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situation?: ConversationSituationUpdateOneWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUpdateOneWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutDialogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situation?: ConversationSituationUncheckedUpdateOneWithoutConversationNestedInput
    conversationQuiz?: ConversationQuizUncheckedUpdateOneWithoutConversationNestedInput
  }

  export type DialogCreateWithoutWordsInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    conversation: ConversationCreateNestedOneWithoutDialogInput
  }

  export type DialogUncheckedCreateWithoutWordsInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
    conversationId: string
  }

  export type DialogCreateOrConnectWithoutWordsInput = {
    where: DialogWhereUniqueInput
    create: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput>
  }

  export type DialogUpsertWithWhereUniqueWithoutWordsInput = {
    where: DialogWhereUniqueInput
    update: XOR<DialogUpdateWithoutWordsInput, DialogUncheckedUpdateWithoutWordsInput>
    create: XOR<DialogCreateWithoutWordsInput, DialogUncheckedCreateWithoutWordsInput>
  }

  export type DialogUpdateWithWhereUniqueWithoutWordsInput = {
    where: DialogWhereUniqueInput
    data: XOR<DialogUpdateWithoutWordsInput, DialogUncheckedUpdateWithoutWordsInput>
  }

  export type DialogUpdateManyWithWhereWithoutWordsInput = {
    where: DialogScalarWhereInput
    data: XOR<DialogUpdateManyMutationInput, DialogUncheckedUpdateManyWithoutWordsInput>
  }

  export type DialogCreateManyConversationInput = {
    id?: string
    index: number
    speaker: string
    scene?: string | null
    vietnamese: string
    audioSrc?: string | null
  }

  export type DialogUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUpdateWithoutDialogInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUncheckedUpdateWithoutDialogInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordUncheckedUpdateManyWithoutDialogInput = {
    vietnamese?: StringFieldUpdateOperationsInput | string
    maleSrc?: NullableStringFieldUpdateOperationsInput | string | null
    femaleSrc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DialogUpdateWithoutWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversation?: ConversationUpdateOneRequiredWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateWithoutWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type DialogUncheckedUpdateManyWithoutWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    speaker?: StringFieldUpdateOperationsInput | string
    scene?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: StringFieldUpdateOperationsInput | string
    audioSrc?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
     */
    export type ConversationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DialogCountOutputTypeDefaultArgs instead
     */
    export type DialogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DialogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WordCountOutputTypeDefaultArgs instead
     */
    export type WordCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WordCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationSituationDefaultArgs instead
     */
    export type ConversationSituationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationSituationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationQuizDefaultArgs instead
     */
    export type ConversationQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationQuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DialogDefaultArgs instead
     */
    export type DialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DialogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WordDefaultArgs instead
     */
    export type WordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

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