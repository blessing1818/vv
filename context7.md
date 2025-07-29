========================
CODE SNIPPETS
========================
TITLE: JSON: Example Browser Network Response for IPA Upload Error
DESCRIPTION: This JSON snippet illustrates a typical browser network response when an IPA or APK upload fails during Firebase App Distribution. It indicates an 'IN_PROGRESS' status with a message detailing a processing error, suggesting issues with the uploaded binary's validity.

SOURCE: https://firebase.google.com/docs/auth/admin/app-distribution/troubleshooting

LANGUAGE: JSON
CODE:

```
{
"status": "IN_PROGRESS",
  "message": "There was an error processing your\ndistribution. Ensure you are uploading a valid IPA or APK and try again."
}
```

---

TITLE: Get Firebase Realtime Database Reference in C++
DESCRIPTION: This snippet demonstrates how to obtain a root DatabaseReference instance for the Firebase Realtime Database in a C++ application. This reference is essential for performing any read or write operations on the database.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: C++
CODE:

```
// Get the root reference location of the database.
firebase::database::DatabaseReference dbref = database->GetReference();
```

---

TITLE: Upload Raw Byte Data to Cloud Storage in Flutter
DESCRIPTION: This example demonstrates uploading lower-level typed data in the form of a `Uint8List` to Cloud Storage using the `putData()` method. This approach is suitable for scenarios where uploading a string or `File` is not practical.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:

```
try {
  // Upload raw data.
  await mountainsRef.putData(data);
} on firebase_core.FirebaseException catch (e) {
  // ...
}
```

---

TITLE: Upload File from Device Path to Cloud Storage in Flutter
DESCRIPTION: This code demonstrates uploading a file from a local device path to Cloud Storage using the `putFile()` method. It utilizes the `path_provider` package to get the application's documents directory and includes basic error handling for Firebase exceptions.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:

```
Directory appDocDir = await getApplicationDocumentsDirectory();
String filePath = '${appDocDir.absolute}/file-to-upload.png';
File file = File(filePath);

try {
  await mountainsRef.putFile(file);
} on firebase_core.FirebaseException catch (e) {
  // ...
}
```

---

TITLE: Firebase Firestore Security Rules: Validate Document Existence and Admin Status
DESCRIPTION: This snippet demonstrates how to use `exists()` to check if a user's document exists before allowing document creation in the 'cities' collection. It also shows how to use `get()` to retrieve a user's document and check for an 'admin' field set to 'true' before allowing document deletion. Variables in paths are explicitly escaped using `$(variable)` syntax.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/security/rules-conditions

LANGUAGE: cloud.firestore
CODE:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} {
      // Make sure a 'users' document exists for the requesting user before
      // allowing any writes to the 'cities' collection
      allow create: if request.auth != null && exists(/databases/$(database)/documents/users/$(request.auth.uid));

      // Allow the user to delete cities if their user document has the
      // 'admin' field set to 'true'
      allow delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true;
    }
  }
}
```

---

TITLE: Firestore API: projects.databases.documents.partitionQuery Method Definition
DESCRIPTION: Defines the `projects.databases.documents.partitionQuery` method, including its HTTP endpoint, required path parameters, and the structure of the request body with detailed descriptions for each field like `partitionCount`, `pageToken`, `pageSize`, `structuredQuery`, and `readTime`.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/reference/rest/v1beta1/projects.databases.documents/partitionQuery

LANGUAGE: APIDOC
CODE:

```
Method: projects.databases.documents.partitionQuery
  Description: Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by documents.runQuery as starting/end points for the query results.

  HTTP Request:
    Method: POST
    URL: https://firestore.googleapis.com/v1beta1/{parent=projects/*/databases/*/documents}:partitionQuery
    Notes: The URL uses gRPC Transcoding syntax.

  Path Parameters:
    parent:
      Type: string
      Required: Yes
      Description: The parent resource name. In the format: projects/{projectId}/databases/{databaseId}/documents. Document resource names are not supported; only database resource names can be specified.

  Request Body:
    JSON Representation:
      {
        "partitionCount": string,
        "pageToken": string,
        "pageSize": integer,
        "structuredQuery": { object (StructuredQuery) },
        "readTime": string
      }

    Fields:
      partitionCount:
        Type: string ([int64] format)
        Description: The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available.
      pageToken:
        Type: string
        Description: The nextPageToken value returned from a previous call to documents.partitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a pageToken may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to documents.partitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W
      pageSize:
        Type: integer
        Description: The maximum number of partitions to return in this call, subject to partitionCount. For example, if partitionCount = 10 and pageSize = 8, the first call to documents.partitionQuery will return up to 8 partitions and a nextPageToken if more results exist. A second call to documents.partitionQuery will return up to 2 partitions, to complete the total of 10 specified in partitionCount.
      query_type (Union Field): The query to partition. query_type can be only one of the following:
        structuredQuery:
          Type: object ([StructuredQuery])
          Description: A structured query. Query must specify collection with all descendants and be ordered by name ascending. Other filters, order bys, limits, offsets, and start/end cursors are not supported.
      consistency_selector (Union Field): The consistency mode for this request. If not set, defaults to strong consistency. consistency_selector can be only one of the following:
        readTime:
          Type: string ([Timestamp] format)
          Description: Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30"
```

---

TITLE: Firebase Realtime Database: Data Writing Methods Overview
DESCRIPTION: An overview of the four primary methods available for writing data to the Firebase Realtime Database, detailing their common uses and functionalities.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: APIDOC
CODE:

```
| Method | Common uses |
| --- | --- |
| `SetValue()` | Write or replace data to a defined path, such as `users/<user-id>/<username>`. |
| `PushChild()` | Add to a list of data. Every time you call `Push()`, Firebase generates a unique key that can also be used as a unique identifier, such as `user-scores/<user-id>/<unique-score-id>`. |
| `UpdateChildren()` | Update some of the keys for a defined path without replacing all of the data. |
| `RunTransaction()` | Update complex data that could be corrupted by concurrent updates. |
```

---

TITLE: Firestore PartitionQuery API Response Body and Authorization Scopes
DESCRIPTION: Describes the JSON structure of the response returned by the `Firestore.PartitionQuery` API method, including an array of `Cursor` objects for partitions and a `nextPageToken` for pagination. It also lists the necessary OAuth 2.0 authorization scopes required to call this API.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/reference/rest/v1beta1/projects.databases.documents/partitionQuery

LANGUAGE: APIDOC
CODE:

```
Response for Firestore.PartitionQuery:
  JSON Structure:
    {
      "partitions": [
        {
          object (Cursor)
        }
      ],
      "nextPageToken": string
    }
  Fields:
    partitions:
      Type: array of object (Cursor)
      Description: Partition results. Each partition is a split point that can be used by documents.runQuery as a starting or end point for the query results. The documents.runQuery requests must be made with the same query supplied to this documents.partitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to documents.partitionQuery.
      Example Usage:
        If partitionQuery returns A and B, the full result set is:
        - query, endAt A
        - query, startAt A, endAt B
        - query, startAt B
      Note: An empty result may indicate that the query has too few results to be partitioned, or that the query is not yet supported for partitioning.
    nextPageToken:
      Type: string
      Description: A page token that may be used to request an additional set of results, up to the number specified by `partitionCount` in the documents.partitionQuery request. If blank, there are no more results.

Authorization Scopes:
  - https://www.googleapis.com/auth/datastore
  - https://www.googleapis.com/auth/cloud-platform
```

---

TITLE: Create Firebase Cloud Storage References in Flutter
DESCRIPTION: This snippet demonstrates how to initialize a Firebase Storage reference and create child references for specific file paths. It shows how to differentiate between file names and full paths within the storage hierarchy.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:

```
// Create a storage reference from our app
final storageRef = FirebaseStorage.instance.ref();

// Create a reference to "mountains.jpg"
final mountainsRef = storageRef.child("mountains.jpg");

// Create a reference to 'images/mountains.jpg'
final mountainImagesRef = storageRef.child("images/mountains.jpg");

// While the file names are the same, the references point to different files
assert(mountainsRef.name == mountainImagesRef.name);
assert(mountainsRef.fullPath != mountainImagesRef.fullPath);
```

---

TITLE: Firebase Realtime Database: LeaderboardEntry Class for Data Structuring
DESCRIPTION: Defines a C++ class `LeaderboardEntry` to structure data for a game leaderboard, encapsulating a user ID and score. It includes a `ToMap()` method to convert the object into a `std::map<std::string, Variant>` suitable for Firebase database operations.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: C++
CODE:

```
class LeaderboardEntry {
  std::string uid;
  int score = 0;

 public:
  LeaderboardEntry() {
  }

  LeaderboardEntry(std::string uid, int score) {
    this->uid = uid;
    this->score = score;
  }

  std::map<std::string, Object> ToMap() {
    std::map<string, Variant> result = new std::map<string, Variant>();
    result["uid"] = Variant(uid);
    result["score"] = Variant(score);

    return result;
  }
}
```

---

TITLE: Upload String Data to Cloud Storage in Flutter
DESCRIPTION: This snippet shows how to upload data as a string, specifically a Data URL, to Cloud Storage using the `putString()` method. It specifies the format for the string data, such as `PutStringFormat.dataUrl`, and includes error handling.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:

```
String dataUrl = 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==';

try {
  await mountainsRef.putString(dataUrl, format: PutStringFormat.dataUrl);
} on FirebaseException catch (e) {
  // ...
}
```

---

TITLE: Firebase Realtime Database: Basic Data Write with SetValue()
DESCRIPTION: Demonstrates a basic write operation using `SetValue()` to update a specific child node, such as a user's username, at a given reference path. This method overwrites any existing data at the specified location.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: C++
CODE:

```
dbref.Child("users").Child(userId).Child("username").SetValue(name);
```

---

TITLE: Log Play Games Events with Firebase Analytics (Android Java)
DESCRIPTION: Demonstrates how to log various Play Games events (login, achievement unlock, score submission) using the Firebase Analytics SDK in an Android Java application. These events provide insights into user engagement and game progression.

SOURCE: https://firebase.google.com/docs/auth/admin/android/integrate-play-games

LANGUAGE: Java
CODE:

```
Bundle bundle = new Bundle();
mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.LOGIN, bundle);
```

LANGUAGE: Java
CODE:

```
Bundle bundle = new Bundle();
bundle.putString(FirebaseAnalytics.Param.ACHIEVEMENT_ID, achievementId);
mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.UNLOCK_ACHIEVEMENT, bundle);
```

LANGUAGE: Java
CODE:

```
Bundle bundle = new Bundle();
bundle.putLong(FirebaseAnalytics.Param.SCORE, score);
bundle.putString("leaderboard_id", leaderboardId);
mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.POST_SCORE, bundle);
```

---

TITLE: Upload File to Firebase Storage with Progress Monitoring (Flutter/Dart)
DESCRIPTION: This snippet demonstrates how to upload a file to Firebase Storage using Flutter/Dart, including setting file metadata, initiating the upload, and listening for various task states (running, paused, canceled, error, success) to monitor progress and handle outcomes.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:

```
final appDocDir = await getApplicationDocumentsDirectory();
final filePath = "${appDocDir.absolute}/path/to/mountains.jpg";
final file = File(filePath);

// Create the file metadata
final metadata = SettableMetadata(contentType: "image/jpeg");

// Create a reference to the Firebase Storage bucket
final storageRef = FirebaseStorage.instance.ref();

// Upload file and metadata to the path 'images/mountains.jpg'
final uploadTask = storageRef
    .child("images/path/to/mountains.jpg")
    .putFile(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.snapshotEvents.listen((TaskSnapshot taskSnapshot) {
  switch (taskSnapshot.state) {
    case TaskState.running:
      final progress =
          100.0 * (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes);
      print("Upload is $progress% complete.");
      break;
    case TaskState.paused:
      print("Upload is paused.");
      break;
    case TaskState.canceled:
      print("Upload was canceled");
      break;
    case TaskState.error:
      // Handle unsuccessful uploads
      break;
    case TaskState.success:
      // Handle successful uploads on complete
      // ...
      break;
  }
});
```

---

TITLE: Perform Transactional Updates on Firebase Realtime Database in C++
DESCRIPTION: This snippet demonstrates how to use `RunTransaction` in the Firebase C++ SDK to safely update data that might be subject to concurrent modifications, such as a leaderboard. It handles cases where a new score is too low or removes the lowest score to add a new high score, ensuring data consistency even with stale local data or concurrent writes. It also notes the importance of handling `null` data within the transaction function.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: cpp
CODE:

```
void AddScoreToLeaders(std::string email,
                       long score,
                       DatabaseReference leaderBoardRef) {
  leaderBoardRef.RunTransaction([](firebase::database::MutableData* mutableData) {
    if (mutableData->children_count() >= MaxScores) {
      long minScore = LONG_MAX;
      MutableData *minVal = null;
      std::vector<MutableData> children = mutableData->children();
      std::vector<MutableData>::iterator it;
      for (it = children.begin(); it != children.end(); ++it) {
        if (!it->value().is_map())
          continue;
        long childScore = (long)it->Child("score").value().int64_value();
        if (childScore < minScore) {
          minScore = childScore;
          minVal = &*it;
        }
      }
      if (minScore > score) {
        // The new score is lower than the existing 5 scores, abort.
        return kTransactionResultAbort;
      }

      // Remove the lowest score.
      children.Remove(minVal);
    }

    // Add the new high score.
    std::map<std::string, Variant> newScoreMap =
      new std::map<std::string, Variant>();
    newScoreMap["score"] = score;
    newScoreMap["email"] = email;
    children.Add(newScoreMap);
    mutableData->set_value(children);
    return kTransactionResultSuccess;
  });
}
```

---

TITLE: API: Export Documents from Google Cloud Firestore
DESCRIPTION: Documents the `projects.databases.exportDocuments` method for Google Cloud Firestore. This API allows exporting a copy of all or a subset of documents to Google Cloud Storage. The operation runs in the background and can be monitored via an Operation resource. Partial data may remain if the operation is cancelled.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/reference/rest/v1beta2/projects.databases/exportDocuments

LANGUAGE: APIDOC
CODE:

```
POST https://firestore.googleapis.com/v1beta2/{name=projects/*/databases/*}:exportDocuments
```

LANGUAGE: APIDOC
CODE:

```
Path Parameters:
  name: string
    Database to export. Should be of the form: projects/{projectId}/databases/{databaseId}.
```

LANGUAGE: APIDOC
CODE:

````
Request Body JSON Representation:
```json
{
  "collectionIds": [
    string
  ],
  "outputUriPrefix": string
}
````

```

LANGUAGE: APIDOC
CODE:
```

Request Body Fields:
collectionIds[]: string
Which collection ids to export. Unspecified means all collections.
outputUriPrefix: string
The output URI. Currently only supports Google Cloud Storage URIs of the form: gs://BUCKET_NAME[/NAMESPACE_PATH], where BUCKET_NAME is the name of the Google Cloud Storage bucket and NAMESPACE_PATH is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.

```

LANGUAGE: APIDOC
CODE:
```

Response Body:
If successful, the response body contains an instance of [Operation](/docs/firestore/reference/rest/Shared.Types/Operation).

```

LANGUAGE: APIDOC
CODE:
```

Authorization Scopes:
https://www.googleapis.com/auth/datastore
https://www.googleapis.com/auth/cloud-platform

```

----------------------------------------

TITLE: Firebase Realtime Database: Atomic Multi-Location Update with UpdateChildren()
DESCRIPTION: Illustrates how to perform an atomic update across multiple locations in the Firebase Realtime Database using `UpdateChildren()`. This C++ function creates a new leaderboard entry and simultaneously writes it to a global scores list and a user-specific scores list, ensuring data consistency.

SOURCE: https://firebase.google.com/docs/auth/admin/database/cpp/save-data

LANGUAGE: C++
CODE:
```

void WriteNewScore(std::string userId, int score) {
// Create new entry at /user-scores/$userid/$scoreid and at
// /leaderboard/$scoreid simultaneously
std::string key = dbref.Child("scores").PushChild().GetKey();
LeaderBoardEntry entry = new LeaderBoardEntry(userId, score);
std::map<std::string, Variant> entryValues = entry.ToMap();

std::map<string, Variant> childUpdates = new std::map<string, Variant>();
childUpdates["/scores/" + key] = entryValues;
childUpdates["/user-scores/" + userId + "/" + key] = entryValues;

dbref.UpdateChildren(childUpdates);
}

```

----------------------------------------

TITLE: Monitor Firebase Storage Upload Task State Changes in Dart
DESCRIPTION: Illustrates how to listen for real-time updates on a Firebase Storage upload task's progress and state. The `snapshotEvents` stream emits `TaskState` events (running, paused, success, canceled, error) that can be used to update UI, handle completion, or manage errors. `TaskState.running` is emitted periodically, `TaskState.paused` when paused, `TaskState.success` on completion, `TaskState.canceled` when canceled, and `TaskState.error` on failure.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:
```

mountainsRef.putFile(file).snapshotEvents.listen((taskSnapshot) {
switch (taskSnapshot.state) {
case TaskState.running:
// ...
break;
case TaskState.paused:
// ...
break;
case TaskState.success:
// ...
break;
case TaskState.canceled:
// ...
break;
case TaskState.error:
// ...
break;
}
});

```

----------------------------------------

TITLE: Firebase Firestore Security Rules: Define and Reuse Custom Functions
DESCRIPTION: This snippet illustrates how to define a custom function, `signedInOrPublic()`, within Firestore Security Rules. This function encapsulates a common condition (user signed in or data is public) and demonstrates its reuse across multiple `match` statements, enhancing the maintainability and readability of the ruleset.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/security/rules-conditions

LANGUAGE: cloud.firestore
CODE:
```

service cloud.firestore {
match /databases/{database}/documents {
// True if the user is signed in or the requested data is 'public'
function signedInOrPublic() {
return request.auth.uid != null || resource.data.visibility == 'public';
}

    match /cities/{city} {
      allow read, write: if signedInOrPublic();
    }

    match /users/{user} {
      allow read, write: if signedInOrPublic();
    }

}
}

```

----------------------------------------

TITLE: Control Firebase Storage Uploads (Pause, Resume, Cancel) in Dart
DESCRIPTION: Demonstrates how to programmatically manage an active file upload to Firebase Storage. Use `pause()` to temporarily halt an upload, `resume()` to continue it, and `cancel()` to terminate it. Each method returns a boolean indicating the success of the operation.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:
```

final task = mountainsRef.putFile(largeFile);

// Pause the upload.
bool paused = await task.pause();
print('paused, $paused');

// Resume the upload.
bool resumed = await task.resume();
print('resumed, $resumed');

// Cancel the upload.
bool canceled = await task.cancel();
print('canceled, $canceled');

```

----------------------------------------

TITLE: Retrieve Download URL for Uploaded File in Flutter
DESCRIPTION: After a file has been successfully uploaded to Cloud Storage, this snippet shows how to obtain its public download URL. The `getDownloadURL()` method on the storage `Reference` provides the URL for accessing the uploaded file.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:
```

await mountainsRef.getDownloadURL();

```

----------------------------------------

TITLE: InAppMessagingDismissType Enum Definition and Cases
DESCRIPTION: Documents the `InAppMessagingDismissType` enum, which defines the methods by which an in-app message is dismissed. This enum is specific to iOS and is not available on macOS, macOS Catalyst, or watchOS.

SOURCE: https://firebase.google.com/docs/auth/admin/reference/swift/firebaseinappmessaging/api/reference/Enums/InAppMessagingDismissType

LANGUAGE: Swift
CODE:
```

enum InAppMessagingDismissType : Int, @unchecked Sendable

```

LANGUAGE: APIDOC
CODE:
```

typeUserSwipe:
Description: Message was swiped away (only valid for banner messages).
Declaration:
Swift: case typeUserSwipe = 0

```

LANGUAGE: APIDOC
CODE:
```

typeUserTapClose:
Description: The user tapped a button to close this message.
Declaration:
Swift: case typeUserTapClose = 1

```

LANGUAGE: APIDOC
CODE:
```

typeAuto:
Description: The message was automatically dismissed (only valid for banner messages).
Declaration:
Swift: case typeAuto = 2

```

LANGUAGE: APIDOC
CODE:
```

unspecified:
Description: Dismiss method unknown.
Declaration:
Swift: case unspecified = 3

```

----------------------------------------

TITLE: Denied Cloud Firestore Query for All Documents (Web/JavaScript)
DESCRIPTION: This JavaScript query attempts to retrieve all documents from the 'cities' collection. It is denied by the security rule because the query does not guarantee that all potential results will satisfy the 'visibility == public' condition, even if some documents in the collection are public.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/security/rules-conditions

LANGUAGE: JavaScript
CODE:
```

db.collection("cities").get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.id, " => ", doc.data());
});
});

```

----------------------------------------

TITLE: Add Custom Metadata During File Upload in Flutter
DESCRIPTION: This snippet illustrates how to include custom metadata, such as `contentType` (MIME type), when uploading a file. It demonstrates overriding the auto-detected content type by providing a `SettableMetadata` object to the `putFile()` method.

SOURCE: https://firebase.google.com/docs/auth/admin/storage/flutter/upload-files

LANGUAGE: Dart
CODE:
```

try {
await mountainsRef.putFile(file, SettableMetadata(
contentType: "image/jpeg",
));
} on firebase_core.FirebaseException catch (e) {
// ...
}

```

----------------------------------------

TITLE: Allowed Cloud Firestore Query with Visibility Filter (Web/JavaScript)
DESCRIPTION: This JavaScript query is allowed by the security rule because it explicitly includes a 'where' clause that filters documents by 'visibility == public'. This guarantees that all documents returned by the query will satisfy the security rule's condition, ensuring authorized access.

SOURCE: https://firebase.google.com/docs/auth/admin/firestore/security/rules-conditions

LANGUAGE: JavaScript
CODE:
```

db.collection("cities").where("visibility", "==", "public").get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.id, " => ", doc.data());
});
});

```

```
