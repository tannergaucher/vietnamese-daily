
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  published: 'published',
  date: 'date'
};

exports.Prisma.ConversationSituationScalarFieldEnum = {
  id: 'id',
  text: 'text',
  conversationId: 'conversationId',
  imageSrc: 'imageSrc'
};

exports.Prisma.DialogScalarFieldEnum = {
  id: 'id',
  index: 'index',
  speaker: 'speaker',
  gender: 'gender',
  scene: 'scene',
  vietnamese: 'vietnamese',
  audioSrc: 'audioSrc',
  conversationId: 'conversationId'
};

exports.Prisma.WordScalarFieldEnum = {
  vietnamese: 'vietnamese',
  maleSrc: 'maleSrc',
  femaleSrc: 'femaleSrc'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.Prisma.ModelName = {
  Conversation: 'Conversation',
  ConversationSituation: 'ConversationSituation',
  Dialog: 'Dialog',
  Word: 'Word',
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "sendDailyEmail",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/tg/Documents/daily-vietnamese/cloud-functions/send-daily-email/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.11.0",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "cockroachdb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"cockroachdb\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../client/src/generated\"\n  binaryTargets = [\"native\", \"rhel-openssl-3.0.x\"]\n}\n\ngenerator createDialog {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-dialog/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator createWord {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-word/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator createWordAudio {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-word-audio/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator fetchDialogWordsForCreating {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/fetch-dialog-words-for-creating/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator createDialogAudio {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-dialog-audio/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator fetchConversationDialogsForCreatingAudio {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/fetch-conversation-dialogs-for-creating-audio/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator fetchSituationForCreatingDialog {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/fetch-situation-for-creating-dialog/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator handleEmailSignUp {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/handle-email-signup/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator sendConfirmationEmail {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/send-confirmation-email/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator publishConversation {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/publish-conversation/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator sendDailyEmail {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/send-daily-email/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator fetchUsersForDailyEmail {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/fetch-users-for-daily-email/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator createConversationSituation {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-conversation-situation/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ngenerator createConversationImage {\n  provider      = \"prisma-client-js\"\n  output        = \"../cloud-functions/create-conversation-image/generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\nenum Gender {\n  male\n  female\n}\n\nmodel Conversation {\n  id        String                 @id @default(uuid())\n  title     String\n  createdAt DateTime               @default(now())\n  updatedAt DateTime               @updatedAt\n  published Boolean                @default(false)\n  date      DateTime?\n  dialog    Dialog[]\n  situation ConversationSituation?\n}\n\nmodel ConversationSituation {\n  id             String        @id @default(uuid())\n  text           String\n  conversationId String?       @unique\n  conversation   Conversation? @relation(fields: [conversationId], references: [id])\n  imageSrc       String?\n}\n\nmodel Dialog {\n  id             String       @id @default(uuid())\n  index          Int\n  speaker        String\n  gender         Gender\n  scene          String?\n  vietnamese     String\n  words          Word[]\n  audioSrc       String?\n  conversationId String\n  conversation   Conversation @relation(fields: [conversationId], references: [id])\n}\n\nmodel Word {\n  vietnamese String   @id\n  dialog     Dialog[]\n  maleSrc    String?\n  femaleSrc  String?\n}\n\nmodel User {\n  id    String @id @default(uuid())\n  email String @unique\n}\n",
  "inlineSchemaHash": "122f3d4d0b7925f760343b57aedd6f274360e9662060d491b86bd82177261ab6",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "cloud-functions/send-daily-email/generated",
    "send-daily-email/generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Conversation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dialog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dialog\",\"relationName\":\"ConversationToDialog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"situation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConversationSituation\",\"relationName\":\"ConversationToConversationSituation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ConversationSituation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"relationName\":\"ConversationToConversationSituation\",\"relationFromFields\":[\"conversationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dialog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speaker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scene\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vietnamese\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"words\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Word\",\"relationName\":\"DialogToWord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"audioSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"relationName\":\"ConversationToDialog\",\"relationFromFields\":[\"conversationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Word\":{\"dbName\":null,\"fields\":[{\"name\":\"vietnamese\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dialog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dialog\",\"relationName\":\"DialogToWord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maleSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"femaleSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "cloud-functions/send-daily-email/generated/libquery_engine-darwin-arm64.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(process.cwd(), "cloud-functions/send-daily-email/generated/libquery_engine-rhel-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "cloud-functions/send-daily-email/generated/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "cloud-functions/send-daily-email/generated/schema.prisma")
