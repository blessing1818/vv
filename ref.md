========================
CODE SNIPPETS
========================
TITLE: Run Node.js Firestore Quickstart Sample
DESCRIPTION: Command to execute the 'quickstart' sample script, providing a basic demonstration of how to interact with Google Cloud Firestore using the Node.js SDK.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/samples/README.md#_snippet_2

LANGUAGE: Shell
CODE:

```
node samples/quickstart.js
```

---

TITLE: Install Node.js project dependencies
DESCRIPTION: Installs all required Node.js packages for the project using npm, ensuring all necessary libraries are available for development and testing.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/CONTRIBUTING.md#_snippet_0

LANGUAGE: Shell
CODE:

```
npm install
```

---

TITLE: Install Node.js Firestore Sample Dependencies
DESCRIPTION: Commands to navigate into the samples directory and install the necessary Node.js packages using npm before running any samples. This ensures all dependencies are met for the sample applications.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/samples/README.md#_snippet_0

LANGUAGE: Shell
CODE:

```
cd samples
npm install
cd ..
```

---

TITLE: Perform Basic CRUD Operations with Node.js Cloud Firestore
DESCRIPTION: This quickstart example demonstrates how to initialize the Cloud Firestore client and execute fundamental document operations. It covers creating a new document, updating an existing one, reading its contents, and finally deleting the document, showcasing a complete CRUD flow.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/README.md#_snippet_1

LANGUAGE: javascript
CODE:

```
const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore');

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World'
  });
  console.log('Entered new data into the document');

  // Update an existing document.
  await document.update({
    body: 'My first Firestore app'
  });
  console.log('Updated an existing document');

  // Read the document.
  const doc = await document.get();
  console.log('Read the document');

  // Delete the document.
  await document.delete();
  console.log('Deleted the document');
}
quickstart();
```

---

TITLE: Install Node.js Cloud Firestore Client Library via npm
DESCRIPTION: Provides instructions for installing the Google Cloud Firestore Node.js client library. This command uses npm, the package manager for JavaScript, to add the @google-cloud/firestore package to your project dependencies.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/README.md#_snippet_0

LANGUAGE: bash
CODE:

```
npm install @google-cloud/firestore
```

---

TITLE: Run Node.js project sample integration tests
DESCRIPTION: Executes the sample integration tests for the Node.js project, validating interactions between different parts of the system using example scenarios.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/CONTRIBUTING.md#_snippet_2

LANGUAGE: Shell
CODE:

```
npm run samples-test
```

---

TITLE: Firestore Query API: Start Query At Document/Values
DESCRIPTION: Defines the starting point for a query, inclusive of the provided values or document snapshot. This method returns a new `Query` instance that begins at or after the specified data.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_122

LANGUAGE: TypeScript
CODE:

```
startAt(...fieldValuesOrDocumentSnapshot: Array<unknown>): Query<AppModelType, DbModelType>;
```

---

TITLE: Firestore Query API: Start Query After Document/Values
DESCRIPTION: Defines the starting point for a query, exclusive of the provided values or document snapshot. This method returns a new `Query` instance that begins after the specified data.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_121

LANGUAGE: TypeScript
CODE:

```
startAfter(...fieldValuesOrDocumentSnapshot: Array<unknown>): Query<AppModelType, DbModelType>;
```

---

TITLE: Get Firestore Instance
DESCRIPTION: Retrieves the Firestore instance associated with this query. Provides access to the underlying Firestore database.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_101

LANGUAGE: TypeScript
CODE:

```
get firestore(): Firestore;
```

---

TITLE: Initialize Firestore Client If Needed (Firestore Node.js, Internal)
DESCRIPTION: Internal method to initialize the Firestore client if it hasn't been initialized yet. This ensures the client is ready for operations and manages internal setup processes.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_71

LANGUAGE: APIDOC
CODE:

```
initializeIfNeeded(requestTag: string)
  requestTag: string - A tag associated with the request.
Returns: Promise<void>
```

---

TITLE: Execute Firestore Query and Get Snapshot
DESCRIPTION: Executes the current query and returns a Promise that resolves to a QuerySnapshot containing the matching documents.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_103

LANGUAGE: TypeScript
CODE:

```
get(): Promise<QuerySnapshot<AppModelType, DbModelType>>;
```

---

TITLE: Firestore Query: Get Response
DESCRIPTION: Retrieves a query response from Firestore. It can optionally take a transaction or read time, and explain options. The method returns a Promise that resolves to a QueryResponse containing a QuerySnapshot.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_105

LANGUAGE: APIDOC
CODE:

```
_getResponse(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions, explainOptions?: firestore.ExplainOptions): Promise<QueryResponse<QuerySnapshot<AppModelType, DbModelType>>>;
```

---

TITLE: Get Formatted Name of DocumentReference
DESCRIPTION: Retrieves the formatted name (path) of the document.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_33

LANGUAGE: APIDOC
CODE:

```
get formattedName(): string

Returns:
  string - The formatted name of the document.
```

---

TITLE: Get Specific Field Value (get)
DESCRIPTION: Retrieves the value of a specific field from the document. The field can be identified by a string path (e.g., 'user.name') or a `FieldPath` object. Returns the field's value or `undefined` if the field does not exist.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_46

LANGUAGE: APIDOC
CODE:

```
get(field: string | FieldPath): any;
```

---

TITLE: Get Document Creation Timestamp (createTime)
DESCRIPTION: Retrieves the server-side creation timestamp of the document. This property returns a `Timestamp` object if the document exists, otherwise `undefined`.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_40

LANGUAGE: APIDOC
CODE:

```
get createTime(): Timestamp | undefined;
```

---

TITLE: Get Buffered Operations Count (Internal)
DESCRIPTION: Retrieves the number of operations currently buffered by the BulkWriter. This is an internal method.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_12

LANGUAGE: APIDOC
CODE:

```
_getBufferedOperationsCount(): number;
```

---

TITLE: Get Multiple Documents (Firestore Node.js)
DESCRIPTION: Retrieves multiple `DocumentSnapshot` objects for the given document references or read options. This method allows fetching several documents in a single call, optimizing network requests.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_69

LANGUAGE: APIDOC
CODE:

```
getAll<AppModelType, DbModelType extends firestore.DocumentData>(...documentRefsOrReadOptions: Array<firestore.DocumentReference<AppModelType, DbModelType> | firestore.ReadOptions>)
  documentRefsOrReadOptions: Array<firestore.DocumentReference<AppModelType, DbModelType> | firestore.ReadOptions> - An array of document references or read options.
Returns: Promise<Array<DocumentSnapshot<AppModelType, DbModelType>>> - A promise that resolves with an array of document snapshots.
```

---

TITLE: Get Formatted Name (Firestore Node.js, Internal)
DESCRIPTION: Internal method to retrieve the formatted name of the Firestore instance. This is primarily for internal use within the client library.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_68

LANGUAGE: APIDOC
CODE:

```
get formattedName()
Returns: string
```

---

TITLE: Get Database ID (Firestore Node.js)
DESCRIPTION: Retrieves the ID of the Firestore database instance. This property provides access to the unique identifier for the database being used.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_65

LANGUAGE: APIDOC
CODE:

```
get databaseId()
Returns: string - The ID of the Firestore database.
```

---

TITLE: Get Document Reference (Firestore Node.js)
DESCRIPTION: Retrieves a `DocumentReference` for the specified document path. This method allows you to interact with a specific Firestore document, enabling operations like setting, updating, or deleting data.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_67

LANGUAGE: APIDOC
CODE:

```
doc(documentPath: string)
  documentPath: string - The path to the document.
Returns: DocumentReference
```

---

TITLE: Get Collection Reference (Firestore Node.js)
DESCRIPTION: Retrieves a `CollectionReference` for the specified collection path. This method allows you to interact with a specific Firestore collection, enabling operations like adding documents or querying subcollections.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_63

LANGUAGE: APIDOC
CODE:

```
collection(collectionPath: string)
  collectionPath: string - The path to the collection.
Returns: CollectionReference
```

---

TITLE: Get Collection Group Reference (Firestore Node.js)
DESCRIPTION: Retrieves a `CollectionGroup` for the specified collection ID. A collection group queries across all collections with the same ID, regardless of their parent documents, allowing for broader data retrieval.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_64

LANGUAGE: APIDOC
CODE:

```
collectionGroup(collectionId: string)
  collectionId: string - The ID of the collection group.
Returns: CollectionGroup
```

---

TITLE: Run Node.js Firestore Solution-counters Sample
DESCRIPTION: Command to execute the 'solution-counters' sample script, which likely demonstrates a common pattern for implementing distributed counters in Google Cloud Firestore.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/samples/README.md#_snippet_3

LANGUAGE: Shell
CODE:

```
node samples/solution-counters.js
```

---

TITLE: Run all Node.js project system tests
DESCRIPTION: Executes all system tests for the Node.js project, providing comprehensive validation of the entire application's functionality.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/CONTRIBUTING.md#_snippet_3

LANGUAGE: Shell
CODE:

```
npm run system-test
```

---

TITLE: Run Node.js project unit tests
DESCRIPTION: Executes the unit tests defined for the Node.js project to verify individual components are functioning correctly.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/CONTRIBUTING.md#_snippet_1

LANGUAGE: Shell
CODE:

```
npm test
```

---

TITLE: Initialize Firestore Client
DESCRIPTION: Initializes a new instance of the Firestore client. This constructor allows for optional configuration settings to be applied during client creation, such as project ID or credentials.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_59

LANGUAGE: APIDOC
CODE:

```
constructor(settings?: firestore.Settings);
```

---

TITLE: Get Document ID from DocumentReference
DESCRIPTION: Retrieves the ID of the document referred to by this DocumentReference.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_35

LANGUAGE: APIDOC
CODE:

```
get id(): string

Returns:
  string - The ID of the document.
```

---

TITLE: Run Node.js Firestore Limit-to-last-query Sample
DESCRIPTION: Command to execute the 'limit-to-last-query' sample script, demonstrating how to perform queries that limit results to the last N documents in Google Cloud Firestore.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/samples/README.md#_snippet_1

LANGUAGE: Shell
CODE:

```
node samples/limit-to-last-query.js
```

---

TITLE: Firestore QueryPartition Class
DESCRIPTION: Describes the QueryPartition class, used for partitioning queries. It includes the constructor for initializing a partition and properties like 'endBefore' to define the partition's boundaries.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_129

LANGUAGE: APIDOC
CODE:

```
class QueryPartition<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData> implements firestore.QueryPartition<AppModelType, DbModelType>:
  Constructor:
    constructor(_firestore: Firestore, _collectionId: string, _converter: firestore.FirestoreDataConverter<AppModelType, DbModelType>, _startAt: api.IValue[] | undefined, _endBefore: api.IValue[] | undefined)
  Properties:
    endBefore: unknown[] | undefined
```

---

TITLE: Lint and fix Node.js code changes
DESCRIPTION: Runs the linter to check for code style and quality issues, and automatically fixes any fixable problems in the Node.js project's codebase.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/CONTRIBUTING.md#_snippet_4

LANGUAGE: Shell
CODE:

```
npm run fix
```

---

TITLE: Get Document ID (id)
DESCRIPTION: Returns the unique identifier (ID) of the document. This ID is the last segment of the document's full path within Firestore.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_47

LANGUAGE: APIDOC
CODE:

```
get id(): string;
```

---

TITLE: Explain Firestore Query Execution Plan
DESCRIPTION: Provides an explanation of the query execution plan, including details about index usage and performance. Returns a Promise that resolves to ExplainResults.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_96

LANGUAGE: TypeScript
CODE:

```
explain(options?: firestore.ExplainOptions): Promise<ExplainResults<QuerySnapshot<AppModelType, DbModelType>>>;
```

---

TITLE: Firestore Core Class API
DESCRIPTION: Represents the main Firestore database client. This class is the entry point for all database operations, though specific methods are not fully detailed in this snippet.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_58

LANGUAGE: APIDOC
CODE:

```
Firestore implements firestore.Firestore
```

---

TITLE: PlanSummary Class API Reference (Node.js Firestore)
DESCRIPTION: Represents a summary of the query execution plan, including information about the indexes used. This class is typically used for understanding and optimizing query performance.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_90

LANGUAGE: APIDOC
CODE:

```
PlanSummary implements firestore.PlanSummary
  constructor(indexesUsed: Record<string, unknown>[])
  static _fromProto(plan: IPlanSummary | null | undefined, serializer: Serializer): PlanSummary
  readonly indexesUsed: Record<string, unknown>[]
```

---

TITLE: Get Project ID (Firestore Node.js, Internal)
DESCRIPTION: Internal method to retrieve the Google Cloud project ID associated with the Firestore instance. This is primarily for internal use within the client library.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_73

LANGUAGE: APIDOC
CODE:

```
get projectId()
Returns: string - The project ID.
```

---

TITLE: Firestore ExplainMetrics Class API
DESCRIPTION: Provides detailed metrics for a Firestore query explanation, including a summary of the execution plan and associated execution statistics. Essential for query optimization.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_51

LANGUAGE: APIDOC
CODE:

```
export class ExplainMetrics implements firestore.ExplainMetrics {
  constructor(planSummary: PlanSummary, executionStats: ExecutionStats | null);
  readonly executionStats: ExecutionStats | null;
  static _fromProto(metrics: IExplainMetrics, serializer: Serializer): ExplainMetrics;
  readonly planSummary: PlanSummary;
}
```

---

TITLE: Firestore Query API: Convert to Bundled Query Proto
DESCRIPTION: Converts the current query into a Firestore bundled query protocol buffer. This internal method generates an `IBundledQuery` representation for efficient data transfer.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_125

LANGUAGE: TypeScript
CODE:

```
_toBundledQuery(): protos.firestore.IBundledQuery;
```

---

TITLE: Create Firestore BundleBuilder
DESCRIPTION: Returns a new `BundleBuilder` instance, used to create data bundles for offline use or efficient data transfer. An optional name can be provided for the bundle to identify it.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_62

LANGUAGE: APIDOC
CODE:

```
bundle(name?: string): BundleBuilder;
```

---

TITLE: WriteBatch Class API Reference
DESCRIPTION: Defines the public and internal API for the `WriteBatch` class, which allows for atomic batch operations like committing, creating, and deleting documents in Firestore.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_150

LANGUAGE: APIDOC
CODE:

```
WriteBatch:
  Constructor:
    __init__(firestore: Firestore)
  Methods:
    commit(): Promise<WriteResult[]>
    _commit<Req extends api.ICommitRequest, Resp>(commitOptions?: {transactionId?: Uint8Array; requestTag?: string; retryCodes?: number[]; methodName?: FirestoreUnaryMethod;}): Promise<Resp>
    create<AppModelType, DbModelType extends firestore.DocumentData>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>, data: firestore.WithFieldValue<AppModelType>): WriteBatch
    delete(documentRef: firestore.DocumentReference<any, any>, precondition?: firestore.Precondition): WriteBatch
  Properties:
    _firestore: Firestore (protected, readonly)
    isEmpty: boolean (internal)
```

---

TITLE: TypeScript Module Imports
DESCRIPTION: Standard TypeScript import statements for various modules and types used within the `@google-cloud/firestore` library's API definition.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_0

LANGUAGE: TypeScript
CODE:

```
import * as $protobuf from 'protobufjs';
import { DocumentData } from '@google-cloud/firestore';
import { Duplex } from 'stream';
import * as firestore from '@google-cloud/firestore';
import { GoogleError } from 'google-gax';
import { Readable } from 'stream';
import { Span as Span_2 } from '@opentelemetry/api';
```

---

TITLE: Firestore Query API: Convert to Run Query Request Proto
DESCRIPTION: Converts the current query into a Firestore run query request protocol buffer. This internal method generates an `IRunQueryRequest` representation, optionally considering transaction or explain options.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_126

LANGUAGE: TypeScript
CODE:

```
toProto(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions, explainOptions?: firestore.ExplainOptions): api.IRunQueryRequest;
```

---

TITLE: Firestore Internal: Check Retry Timeout
DESCRIPTION: An internal utility method to determine if a specific retry attempt has exceeded its allocated time. It takes the method name and the start time of the operation as arguments. This function returns a boolean indicating whether the timeout has occurred.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_106

LANGUAGE: APIDOC
CODE:

```
_hasRetryTimedOut(methodName: string, startTime: number): boolean;
```

---

TITLE: BundleBuilder Class API Reference (Node.js Firestore)
DESCRIPTION: A utility class for building Firestore bundles, allowing the inclusion of document snapshots and query snapshots into a single, transferable data unit.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_23

LANGUAGE: APIDOC
CODE:

```
class BundleBuilder {
  constructor(bundleId: string);
  add(documentSnapshot: DocumentSnapshot): BundleBuilder;
  add(queryName: string, querySnapshot: QuerySnapshot): BundleBuilder;
  build(): Buffer;
  readonly bundleId: string;
}
```

---

TITLE: Firestore Query: Limit to Last Results
DESCRIPTION: Creates and returns a new Firestore Query that limits the number of documents to the last `limit` documents in the result set. This is particularly useful when combined with `orderBy` to get the most recent items. The method returns a new Query instance.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_110

LANGUAGE: APIDOC
CODE:

```
limitToLast(limit: number): Query<AppModelType, DbModelType>;
```

---

TITLE: Create DocumentSnapshot from Object (static fromObject)
DESCRIPTION: A static method to create a `DocumentSnapshot` instance from a given `DocumentReference` and a plain JavaScript object representing the document data. This is primarily used internally for constructing snapshots.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_44

LANGUAGE: APIDOC
CODE:

```
static fromObject<AppModelType, DbModelType extends firestore.DocumentData>(ref: DocumentReference<AppModelType, DbModelType>, obj: firestore.DocumentData): DocumentSnapshot<AppModelType, DbModelType>;
```

---

TITLE: Internal Method: Create Query Snapshot
DESCRIPTION: An internal method used to construct a QuerySnapshot from provided data, including read time, size, document array, and changes. This method is for internal use only.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_93

LANGUAGE: TypeScript
CODE:

```
_createSnapshot(readTime: Timestamp, size: number, docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>, changes: () => Array<DocumentChange<AppModelType, DbModelType>>): QuerySnapshot<AppModelType, DbModelType>;
```

---

TITLE: Firestore ExplainResults Class API
DESCRIPTION: Encapsulates the results of a Firestore query explanation, combining explanation metrics with an optional snapshot of the query's output. Generic type `T` allows for flexible snapshot types.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_52

LANGUAGE: APIDOC
CODE:

```
export class ExplainResults<T> implements firestore.ExplainResults<T> {
  constructor(metrics: ExplainMetrics, snapshot: T | null);
  readonly metrics: ExplainMetrics;
  readonly snapshot: T | null;
}
```

---

TITLE: Create Firestore WriteBatch
DESCRIPTION: Returns a new `WriteBatch` instance, which can be used to perform multiple write operations (set, update, delete) as a single atomic operation. All operations in a batch either succeed or fail together.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_60

LANGUAGE: APIDOC
CODE:

```
batch(): WriteBatch;
```

---

TITLE: Configure Firestore Client Settings
DESCRIPTION: Sets or updates the configuration settings for the Firestore client instance. This method allows modifying behaviors such as retry settings, credentials, or the project ID associated with the client.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_80

LANGUAGE: APIDOC
CODE:

```
settings(settings: firestore.Settings): void

Parameters:
- settings: An object containing the new Firestore settings to apply.
Returns:
- void: This method does not return a value.
```

---

TITLE: Stream Firestore Query Execution Plan
DESCRIPTION: Streams the explanation of the query execution plan as a NodeJS.ReadableStream. Useful for large or complex queries where streaming results is preferred.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_97

LANGUAGE: TypeScript
CODE:

```
explainStream(explainOptions?: firestore.ExplainOptions): NodeJS.ReadableStream;
```

---

TITLE: Node.js Firestore WriteBatch Class API
DESCRIPTION: Defines the `WriteBatch` class, which represents a batch of write operations to be committed to Firestore. It includes methods for setting, updating, and managing operations.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_151

LANGUAGE: APIDOC
CODE:

```
WriteBatch:
  _opCount(): number
    Description: Internal method to get the current count of operations in the batch.
  _reset(): void
    Description: Internal method to reset the batch's state.
  set<AppModelType, DbModelType extends firestore.DocumentData>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>, data: firestore.PartialWithFieldValue<AppModelType>, options: firestore.SetOptions): WriteBatch
    Description: Writes to the document referred to by the document reference. If the document does not exist yet, it will be created. If SetOptions are provided, the writing will be merged into an existing document.
    Parameters:
      documentRef: The document reference to set.
      data: The data to write to the document.
      options: An object to configure the set behavior.
    Returns: WriteBatch - This WriteBatch instance.
  set<AppModelType, DbModelType extends firestore.DocumentData>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>, data: firestore.WithFieldValue<AppModelType>): WriteBatch
    Description: Writes to the document referred to by the document reference. If the document does not exist yet, it will be created.
    Parameters:
      documentRef: The document reference to set.
      data: The data to write to the document.
    Returns: WriteBatch - This WriteBatch instance.
  update<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>, dataOrField: firestore.UpdateData<DbModelType> | string | firestore.FieldPath, ...preconditionOrValues: Array<{ lastUpdateTime?: firestore.Timestamp; } | unknown | string | firestore.FieldPath>): WriteBatch
    Description: Updates fields in the document referred to by the document reference. The update will fail if the document does not exist.
    Parameters:
      documentRef: The document reference to update.
      dataOrField: An object containing the fields and values to update, or a field path.
      preconditionOrValues: Optional additional field paths and values for the update.
    Returns: WriteBatch - This WriteBatch instance.
```

---

TITLE: Firestore Query API: Query Options Property
DESCRIPTION: Represents the internal query options for a Firestore query. This read-only property holds configuration for `AppModelType` and `DbModelType`.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_117

LANGUAGE: TypeScript
CODE:

```
readonly _queryOptions: QueryOptions<AppModelType, DbModelType>;
```

---

TITLE: Internal Document Fields Protocol Buffer (\_fieldsProto)
DESCRIPTION: An internal, read-only property representing the raw protocol buffer fields of the document. This property is intended for internal library use and may be `undefined`.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_43

LANGUAGE: APIDOC
CODE:

```
readonly _fieldsProto?: ApiMapValue | undefined;
```

---

TITLE: Internal Firestore Settings Property
DESCRIPTION: An internal property storing the current configuration settings applied to the Firestore client. This reflects the settings provided during client initialization or updated via the `settings()` method.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_85

LANGUAGE: APIDOC
CODE:

```
_settings: firestore.Settings

Type:
- firestore.Settings: The current Firestore settings object.
```

---

TITLE: Firestore Query API: Select Fields
DESCRIPTION: Specifies the fields to be returned by a query. This method accepts an array of field paths (strings or `FieldPath` objects) to limit the data retrieved, returning a new `Query` instance.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_119

LANGUAGE: TypeScript
CODE:

```
select(...fieldPaths: Array<string | FieldPath>): Query;
```

---

TITLE: Create DocumentSnapshot from Update Map (static fromUpdateMap)
DESCRIPTION: A static method that constructs a `DocumentSnapshot` from a `DocumentReference` and an `UpdateMap`. This method is typically used internally by the Firestore client library to handle document updates.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_45

LANGUAGE: APIDOC
CODE:

```
static fromUpdateMap<AppModelType, DbModelType extends firestore.DocumentData>(ref: firestore.DocumentReference<AppModelType, DbModelType>, data: UpdateMap): DocumentSnapshot<AppModelType, DbModelType>;
```

---

TITLE: Firestore Query Class API Reference
DESCRIPTION: Defines the `Query` class, which represents a Firestore query. This snippet details its properties and methods for constructing and executing database queries.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_130

LANGUAGE: APIDOC
CODE:

```
Query:
  Properties:
    startAt: unknown[] | undefined
  Methods:
    toQuery(): Query<AppModelType, DbModelType>
```

---

TITLE: Register Listener (Firestore Node.js, Internal)
DESCRIPTION: Internal method to register a listener. This is part of the client's internal event handling mechanism and is not intended for direct application use.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_76

LANGUAGE: APIDOC
CODE:

```
registerListener()
Returns: void
```

---

TITLE: Firestore VectorQueryOptions Interface API
DESCRIPTION: The `VectorQueryOptions` interface defines the configuration parameters required to perform a vector search query. It specifies the distance measure, result field, threshold, limit, query vector, and the target vector field.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_146

LANGUAGE: APIDOC
CODE:

```
VectorQueryOptions:
  distanceMeasure: 'EUCLIDEAN' | 'COSINE' | 'DOT_PRODUCT'
  distanceResultField?: string | firestore.FieldPath
  distanceThreshold?: number
  limit: number
  queryVector: firestore.VectorValue | Array<number>
  vectorField: string | firestore.FieldPath
```

---

TITLE: BulkWriter Class
DESCRIPTION: A class designed for performing batched write operations (create, update, delete) to Firestore, optimizing for high throughput and efficient data modification.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_9

LANGUAGE: APIDOC
CODE:

```
class BulkWriter
  constructor(firestore: Firestore, options?: firestore.BulkWriterOptions)
  Methods:
    close(): Promise<void>
    create<AppModelType, DbModelType>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>, data: firestore.WithFieldValue<AppModelType>): Promise<WriteResult>
```

---

TITLE: Create Firestore BulkWriter
DESCRIPTION: Returns a new `BulkWriter` instance, designed for efficient bulk write operations to Firestore. It supports options for configuring its behavior, such as throttling and error handling, to optimize large-scale data writes.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_61

LANGUAGE: APIDOC
CODE:

```
bulkWriter(options?: firestore.BulkWriterOptions): BulkWriter;
```

---

TITLE: Query Class API Reference (Node.js Firestore)
DESCRIPTION: Represents a Firestore query, allowing you to filter and order documents. This class provides methods for building complex queries and performing aggregations on document collections.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_91

LANGUAGE: APIDOC
CODE:

```
Query<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData> implements firestore.Query<AppModelType, DbModelType>
  constructor(_firestore: Firestore, _queryOptions: QueryOptions<AppModelType, DbModelType>)
  aggregate<T extends firestore.AggregateSpec>(aggregateSpec: T): AggregateQuery<T, AppModelType, DbModelType>
  protected readonly _allowUndefined: boolean
  comparator(): (s1: QueryDocumentSnapshot<AppModelType, DbModelType>, s2: QueryDocumentSnapshot<AppModelType, DbModelType>) => number
```

---

TITLE: End Query at Specific Field Values or Document
DESCRIPTION: Specifies the inclusive end point for the query. Documents returned by the query will have a field value less than or equal to the provided values, or be before the specified document snapshot.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_94

LANGUAGE: TypeScript
CODE:

```
endAt(...fieldValuesOrDocumentSnapshot: Array<unknown>): Query<AppModelType, DbModelType>;
```

---

TITLE: Retrieve Firestore Documents or Query Results
DESCRIPTION: Fetches documents or the results of a query from Firestore. This method is overloaded to support fetching single documents by reference, multiple documents via a query, or aggregate query results.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_138

LANGUAGE: APIDOC
CODE:

```
get<AppModelType, DbModelType extends firestore.DocumentData>(query: firestore.Query<AppModelType, DbModelType>): Promise<QuerySnapshot<AppModelType, DbModelType>>;
```

LANGUAGE: APIDOC
CODE:

```
get<AppModelType, DbModelType extends firestore.DocumentData>(documentRef: firestore.DocumentReference<AppModelType, DbModelType>): Promise<DocumentSnapshot<AppModelType, DbModelType>>;
```

LANGUAGE: APIDOC
CODE:

```
get<AppModelType, DbModelType extends firestore.DocumentData, AggregateSpecType extends firestore.AggregateSpec>(aggregateQuery: firestore.AggregateQuery<AggregateSpecType, AppModelType, DbModelType>): Promise<AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>>;
```

---

TITLE: Internal Method: Execute Firestore Query
DESCRIPTION: An internal method to execute the query, optionally within a transaction or with a specific read time. Returns a Promise that resolves to a QuerySnapshotResponse. This method is for internal use only.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_104

LANGUAGE: TypeScript
CODE:

```
_get(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions): Promise<QuerySnapshotResponse<QuerySnapshot<AppModelType, DbModelType>>>;
```

---

TITLE: Internal Aggregation Query Request Methods
DESCRIPTION: Internal methods used for streaming aggregation query results and converting aggregation queries into a protocol buffer request format for the Firestore API.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_5

LANGUAGE: APIDOC
CODE:

```
Methods:
  _stream(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions, explainOptions?: firestore.ExplainOptions): Readable
  toProto(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions, explainOptions?: firestore.ExplainOptions): api.IRunAggregationQueryRequest
```

---

TITLE: Internal Firestore Trace Utility Property
DESCRIPTION: An internal property providing access to the trace utility. This utility is likely used for performance monitoring, debugging, and collecting telemetry data within the client library.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_86

LANGUAGE: APIDOC
CODE:

```
_traceUtil: TraceUtil

Type:
- TraceUtil: The trace utility instance.
```

---

TITLE: Verify BulkWriter Not Closed (Internal)
DESCRIPTION: An internal method to verify that the BulkWriter instance has not been closed, throwing an error if it has.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_21

LANGUAGE: APIDOC
CODE:

```
_verifyNotClosed(): void;
```

---

TITLE: VectorValue Class API Reference
DESCRIPTION: Defines the API for the internal `VectorValue` class, including methods for proto conversion, equality checks, and array representation.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_149

LANGUAGE: APIDOC
CODE:

```
VectorValue:
  Methods:
    _fromProto(valueArray: api.IValue): VectorValue
    isEqual(other: VectorValue): boolean
    toArray(): number[]
    _toProto(serializer: Serializer): api.IValue
```

---

TITLE: Firestore Timestamp Utility Methods
DESCRIPTION: Provides methods for converting Firestore Timestamp-like objects to various formats, including seconds, Date objects, milliseconds, and protocol buffer representations, as well as a string representation.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_135

LANGUAGE: APIDOC
CODE:

```
Method: seconds
  Returns: number
  Description: Gets the number of seconds since the Unix epoch.

Method: toDate
  Returns: Date
  Description: Converts the object to a JavaScript Date object.

Method: toMillis
  Returns: number
  Description: Converts the object to milliseconds since the Unix epoch.

Method: toProto
  Returns: api.IValue
  Description: Converts the object to its protocol buffer representation.

Method: valueOf
  Returns: string
  Description: Returns a string representation of the object.
```

---

TITLE: Firestore DocumentSnapshot API
DESCRIPTION: Defines the constructor for a Firestore DocumentSnapshot, which contains data read from a document in Firestore. It provides methods to retrieve the document's data and metadata.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_39

LANGUAGE: APIDOC
CODE:

```
DocumentSnapshot<AppModelType, DbModelType>:
  constructor(ref: DocumentReference<AppModelType, DbModelType>, _fieldsProto?: ApiMapValue | undefined, readTime?: Timestamp, createTime?: Timestamp, updateTime?: Timestamp)
    Description: Constructs a new DocumentSnapshot instance.
    Parameters:
      ref: The DocumentReference for this snapshot.
      _fieldsProto: Internal field data representation.
      readTime: The time at which this snapshot was read from the backend.
      createTime: The time at which the document was created in Firestore.
      updateTime: The time at which the document was last updated in Firestore.
```

---

TITLE: Retrieve Multiple Firestore Documents by Reference
DESCRIPTION: Fetches multiple documents from Firestore by their references. Can also accept read options.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_139

LANGUAGE: APIDOC
CODE:

```
getAll<AppModelType, DbModelType extends firestore.DocumentData>(...documentRefsOrReadOptions: Array<firestore.DocumentReference<AppModelType, DbModelType> | firestore.ReadOptions>): Promise<Array<DocumentSnapshot<AppModelType, DbModelType>>>;
```

---

TITLE: Register Write Result Handler for Firestore BulkWriter
DESCRIPTION: Registers a callback function to be invoked upon successful completion of a write operation, providing the document reference and write result.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_14

LANGUAGE: APIDOC
CODE:

```
onWriteResult(successCallback: (documentRef: firestore.DocumentReference<any, any>, result: WriteResult) => void): void;
```

---

TITLE: Firestore Query API: Query Utility Property
DESCRIPTION: Provides internal utility functions for Firestore queries. This read-only property offers tools for managing `AppModelType`, `DbModelType`, and `Query` objects.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_118

LANGUAGE: TypeScript
CODE:

```
readonly _queryUtil: QueryUtil<AppModelType, DbModelType, Query<AppModelType, DbModelType>>;
```

---

TITLE: Firestore Document Snapshot Properties
DESCRIPTION: Properties commonly available on Firestore document snapshots, providing access to the server-side read time and the size of the document in bytes.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_132

LANGUAGE: APIDOC
CODE:

```
readTime: Timestamp - The time at which the document was read from the server.
size: number - The size of the document in bytes.
```

---

TITLE: Retrieve Document Snapshots (Overloads)
DESCRIPTION: Provides various internal overloads for retrieving a `DocumentSnapshot` or `QueryDocumentSnapshot` based on different input types and encoding preferences. These methods are used internally for deserializing document data received from the Firestore service.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_81

LANGUAGE: APIDOC
CODE:

```
snapshot_(
  documentName: string,
  readTime?: google.protobuf.ITimestamp,
  encoding?: 'protobufJS'
): DocumentSnapshot

snapshot_(
  documentName: string,
  readTime: string,
  encoding: 'json'
): DocumentSnapshot

snapshot_(
  document: api.IDocument,
  readTime: google.protobuf.ITimestamp,
  encoding?: 'protobufJS'
): QueryDocumentSnapshot

snapshot_(
  document: { [k: string]: unknown; },
  readTime: string,
  encoding: 'json'
): QueryDocumentSnapshot

Parameters:
- documentName: The full path of the document as a string.
- document: An API document object or a generic object representing the document data.
- readTime: The timestamp at which the document was read, or its string representation.
- encoding: The encoding format ('protobufJS' or 'json') for the document data.
Returns:
- DocumentSnapshot | QueryDocumentSnapshot: A snapshot of the document data, which can be a `DocumentSnapshot` or `QueryDocumentSnapshot` depending on the input.
```

---

TITLE: Firestore VectorQuerySnapshot Class API
DESCRIPTION: The `VectorQuerySnapshot` class represents the results of a vector query. It provides access to the documents returned by the query, along with metadata such as read time and the number of results.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_147

LANGUAGE: APIDOC
CODE:

```
VectorQuerySnapshot<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData>
  Implements: firestore.VectorQuerySnapshot<AppModelType, DbModelType>
  Constructor:
    _query: VectorQuery<AppModelType, DbModelType>
    _readTime: Timestamp
    _size: number
    docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>
    changes: () => Array<DocumentChange<AppModelType, DbModelType>>
  Methods:
    docChanges(): Array<DocumentChange<AppModelType, DbModelType>>
    forEach(callback: (result: firestore.QueryDocumentSnapshot<AppModelType, DbModelType>) => void, thisArg?: unknown): void
    isEqual(other: firestore.VectorQuerySnapshot<AppModelType, DbModelType>): boolean
  Properties:
    docs: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>
    empty: boolean
    query: VectorQuery<AppModelType, DbModelType>
    readTime: Timestamp
    size: number
```

---

TITLE: Firestore QuerySnapshot Class API Reference
DESCRIPTION: Defines the `QuerySnapshot` class, which represents the results of a Firestore query. This snippet includes its constructor, properties, and methods for accessing document changes, iterating through documents, and comparing snapshots.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_131

LANGUAGE: APIDOC
CODE:

```
QuerySnapshot<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData>:
  Constructor:
    constructor(
      _query: Query<AppModelType, DbModelType>,
      _readTime: Timestamp,
      _size: number,
      docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
      changes: () => Array<DocumentChange<AppModelType, DbModelType>>
    )
  Properties:
    docs: Array<QueryDocumentSnapshot<AppModelType, DbModelType>>
    empty: boolean
    query: Query<AppModelType, DbModelType>
  Methods:
    docChanges(): Array<DocumentChange<AppModelType, DbModelType>>
    forEach(callback: (result: firestore.QueryDocumentSnapshot<AppModelType, DbModelType>) => void, thisArg?: unknown): void
    isEqual(other: firestore.QuerySnapshot<AppModelType, DbModelType>): boolean
```

---

TITLE: Send Function for BulkWriter Operations (Internal)
DESCRIPTION: An internal method responsible for sending bulk writer operations, potentially enqueuing them on a batch.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_16

LANGUAGE: APIDOC
CODE:

```
_sendFn(enqueueOnBatchCallback: (bulkCommitBatch: BulkCommitBatch) => void, op: BulkWriterOperation): void;
```

---

TITLE: Compare DocumentSnapshots for Equality (isEqual)
DESCRIPTION: Compares this `DocumentSnapshot` instance to another `DocumentSnapshot` for equality. Returns `true` if both snapshots refer to the same document and contain identical data, `false` otherwise.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_48

LANGUAGE: APIDOC
CODE:

```
isEqual(other: firestore.DocumentSnapshot<AppModelType, DbModelType>): boolean;
```

---

TITLE: Configure Firestore Client Logging Function
DESCRIPTION: Sets a global logging function for the Firestore client library. This allows developers to integrate Firestore's internal logs with their application's logging infrastructure. Passing `null` disables the custom logger and reverts to default behavior.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_133

LANGUAGE: TypeScript
CODE:

```
export function setLogFunction(logger: ((msg: string) => void) | null): void;
```

---

TITLE: Firestore QueryDocumentSnapshot Class
DESCRIPTION: Defines the QueryDocumentSnapshot class, which represents a document retrieved by a query. It extends DocumentSnapshot and provides access to document data and metadata like creation and update times.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_128

LANGUAGE: APIDOC
CODE:

```
class QueryDocumentSnapshot<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData> extends DocumentSnapshot<AppModelType, DbModelType> implements firestore.QueryDocumentSnapshot<AppModelType, DbModelType>:
  Properties:
    createTime: Timestamp
    updateTime: Timestamp
  Methods:
    data(): AppModelType
```

---

TITLE: Serialize Firestore Client to JSON
DESCRIPTION: Returns a JSON representation of the Firestore client instance. This method is primarily intended for debugging or serialization purposes, providing a snapshot of the client's configuration and state.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_83

LANGUAGE: APIDOC
CODE:

```
toJSON(): object

Returns:
- object: A plain JavaScript object representing the client's serializable state.
```

---

TITLE: List Subcollections of a Document
DESCRIPTION: Retrieves a list of all immediate subcollections under this document. This operation returns a Promise that resolves with an array of CollectionReference objects.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_37

LANGUAGE: APIDOC
CODE:

```
listCollections(): Promise<Array<CollectionReference>>

Returns:
  Promise<Array<CollectionReference>> - A Promise that resolves with an array of CollectionReference objects, each representing a subcollection.
```

---

TITLE: Firestore VectorQuery Class API
DESCRIPTION: The `VectorQuery` class represents a query that includes vector search capabilities in Firestore. It allows defining vector search parameters, executing the query, and explaining its results.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_145

LANGUAGE: APIDOC
CODE:

```
VectorQuery<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData>
  Implements: firestore.VectorQuery<AppModelType, DbModelType>
  Constructor:
    _query: Query<AppModelType, DbModelType>
    _options: VectorQueryOptions
  Methods:
    _createSnapshot(readTime: Timestamp, size: number, docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>, changes: () => Array<DocumentChange<AppModelType, DbModelType>>): VectorQuerySnapshot<AppModelType, DbModelType>
    explain(options?: firestore.ExplainOptions): Promise<ExplainResults<VectorQuerySnapshot<AppModelType, DbModelType>>>
    get(): Promise<VectorQuerySnapshot<AppModelType, DbModelType>>
    _getResponse(explainOptions?: firestore.ExplainOptions): Promise<QueryResponse<VectorQuerySnapshot<AppModelType, DbModelType>>>
    isEqual(other: firestore.VectorQuery<AppModelType, DbModelType>): boolean
    startAfter(...fieldValuesOrDocumentSnapshot: Array<unknown>): VectorQuery<AppModelType, DbModelType>
    _stream(transactionId?: Uint8Array): NodeJS.ReadableStream
    toProto(transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions, explainOptions?: firestore.ExplainOptions): api.IRunQueryRequest
  Properties:
    query: Query<AppModelType, DbModelType>
    _queryUtil: QueryUtil<AppModelType, DbModelType, VectorQuery<AppModelType, DbModelType>> (readonly)
```

---

TITLE: CollectionReference Class API Reference (Node.js Firestore)
DESCRIPTION: Represents a reference to a specific collection in a Firestore database, providing methods for adding, querying, and managing documents within that collection.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_25

LANGUAGE: APIDOC
CODE:

```
class CollectionReference<AppModelType = firestore.DocumentData, DbModelType extends firestore.DocumentData = firestore.DocumentData> extends Query<AppModelType, DbModelType> implements firestore.CollectionReference<AppModelType, DbModelType> {
  constructor(firestore: Firestore, path: ResourcePath, converter?: firestore.FirestoreDataConverter<AppModelType, DbModelType>);
}
```

---

TITLE: AggregateQuerySnapshot Class
DESCRIPTION: Represents the results of an aggregation query, providing access to the aggregated data, the original query, and the read time of the snapshot.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_6

LANGUAGE: APIDOC
CODE:

```
class AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
  constructor(
    _query: AggregateQuery<AggregateSpecType, AppModelType, DbModelType>,
    _readTime: Timestamp,
    _data: firestore.AggregateSpecData<AggregateSpecType>
  )
  Methods:
    data(): firestore.AggregateSpecData<AggregateSpecType>
    isEqual(other: firestore.AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>): boolean
  Properties:
    query: AggregateQuery<AggregateSpecType, AppModelType, DbModelType> (read-only)
    readTime: Timestamp (read-only)
```

---

TITLE: Firestore CollectionReference API Methods
DESCRIPTION: Defines the methods and properties available on a Firestore CollectionReference object for managing documents within a collection, including adding new documents, retrieving document references, and converting data types.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_26

LANGUAGE: APIDOC
CODE:

```
CollectionReference:
  add(data: firestore.WithFieldValue<AppModelType>): Promise<DocumentReference<AppModelType, DbModelType>>
    Description: Adds a new document to this collection with the specified data.
    Parameters:
      data: The data to store in the new document.
    Returns: Promise<DocumentReference<AppModelType, DbModelType>> - A Promise resolved with a DocumentReference pointing to the newly created document.

  doc(): DocumentReference<AppModelType, DbModelType>
    Description: Gets a DocumentReference for a document within the collection with an auto-generated ID.
    Returns: DocumentReference<AppModelType, DbModelType> - A DocumentReference pointing to a new document.

  doc(documentPath: string): DocumentReference<AppModelType, DbModelType>
    Description: Gets a DocumentReference for a document within the collection.
    Parameters:
      documentPath: The path to the document relative to this collection.
    Returns: DocumentReference<AppModelType, DbModelType> - A DocumentReference pointing to the specified document.

  id: string (property)
    Description: The ID of the collection.

  isEqual(other: firestore.CollectionReference<AppModelType, DbModelType>): boolean
    Description: Compares this CollectionReference to another for equality.
    Parameters:
      other: The other CollectionReference to compare against.
    Returns: boolean - True if the CollectionReferences are equal, false otherwise.

  listDocuments(): Promise<Array<DocumentReference<AppModelType, DbModelType>>>
    Description: Retrieves a list of all documents in this collection.
    Returns: Promise<Array<DocumentReference<AppModelType, DbModelType>>> - A Promise resolved with an array of DocumentReferences.

  parent: DocumentReference | null (property)
    Description: A DocumentReference pointing to the parent document of this collection, or null if this is a root collection.

  path: string (property)
    Description: The full path of this collection relative to the database root.

  _resourcePath: ResourcePath (property) (internal)
    Description: Internal resource path for the collection.

  withConverter(converter: null): CollectionReference
    Description: Returns a CollectionReference that is configured to not use a converter.
    Parameters:
      converter: null to remove any existing converter.
    Returns: CollectionReference - A new CollectionReference without a converter.

  withConverter<NewAppModelType, NewDbModelType extends firestore.DocumentData = firestore.DocumentData>(converter: firestore.FirestoreDataConverter<NewAppModelType, NewDbModelType>): CollectionReference<NewAppModelType, NewDbModelType>
    Description: Returns a CollectionReference that is configured to use the provided converter.
    Parameters:
      converter: A FirestoreDataConverter to convert between application-specific types and Firestore data.
    Returns: CollectionReference<NewAppModelType, NewDbModelType> - A new CollectionReference with the specified converter.
```

---

TITLE: Firestore Query API: Serializer Property
DESCRIPTION: Manages the serialization of Firestore data. This read-only internal property is responsible for converting data to and from Firestore's wire format.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_120

LANGUAGE: TypeScript
CODE:

```
readonly _serializer: Serializer;
```

---

TITLE: Internal Firestore Serializer Property
DESCRIPTION: An internal property holding the serializer instance used by the Firestore client. This serializer is responsible for converting data to and from the wire format used for communication with the Firestore service.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_84

LANGUAGE: APIDOC
CODE:

```
_serializer: Serializer | null

Type:
- Serializer | null: The serializer instance or null if not yet initialized.
```

---

TITLE: Internal Method: Find Nearest Vector Documents
DESCRIPTION: An internal method for performing vector similarity searches. This method is for internal use only and is undocumented.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_100

LANGUAGE: TypeScript
CODE:

```
_findNearest(options: VectorQueryOptions): VectorQuery<AppModelType, DbModelType>;
```

---

TITLE: Check Document Existence (exists)
DESCRIPTION: Indicates whether the document exists in the database. This property returns `true` if the document exists and has data, `false` otherwise.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_42

LANGUAGE: APIDOC
CODE:

```
get exists(): boolean;
```

---

TITLE: Execute a Firestore Transaction (Single Attempt)
DESCRIPTION: Executes a series of operations as a single atomic transaction, but without automatic retries on contention. This method is for internal use.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_142

LANGUAGE: APIDOC
CODE:

```
runTransactionOnce<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
```

---

TITLE: End Query Before Specific Field Values or Document
DESCRIPTION: Specifies the exclusive end point for the query. Documents returned by the query will have a field value strictly less than the provided values, or be before the specified document snapshot.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_95

LANGUAGE: TypeScript
CODE:

```
endBefore(...fieldValuesOrDocumentSnapshot: Array<unknown>): Query<AppModelType, DbModelType>;
```

---

TITLE: Access Firestore Instance from DocumentReference
DESCRIPTION: Retrieves the Firestore instance associated with this DocumentReference.

SOURCE: https://github.com/googleapis/nodejs-firestore/blob/main/api-report/firestore.api.md#_snippet_32

LANGUAGE: APIDOC
CODE:

```
get firestore(): Firestore

Returns:
  Firestore - The Firestore instance this document reference belongs to.
```
