import { PubSub } from "@google-cloud/pubsub";
import { createLanguageModel } from "typechat";
import { describe, expect, it } from "vitest";

import { PrismaClient } from "./generated";

import { createDialog } from "./index";

describe("createDialog", () => {
  it("creates a conversation with a dialog", async () => {
    const res = await createDialog({
      situationId: "1",
      model: createLanguageModel(process.env),
      prisma: new PrismaClient(),
      pubsub: new PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
      }),
    });
    expect(res).toBeDefined();
    expect(typeof res.conversation.title).toBe("string");
    expect(res.conversation.dialog.length).toBeGreaterThan(0);
  });
}, 120000);
