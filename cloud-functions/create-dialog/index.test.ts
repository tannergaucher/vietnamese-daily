import { describe, expect, it } from "vitest";
import { createLanguageModel } from "typechat";

import { createDialog } from "./index";
import { PrismaClient } from "./generated";
import { PubSub } from "@google-cloud/pubsub";

describe("createDialog", () => {
  it("creates a conversation with a dialog", async () => {
    const res = await createDialog({
      model: createLanguageModel(process.env),
      prisma: new PrismaClient(),
      pubsub: new PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
      }),
      dialogSituation: "Buying bún chả from a street food vendor in Hanoi.",
    });
    expect(res).toBeDefined();
    expect(typeof res.conversation.title).toBe("string");
    expect(res.conversation.dialog.length).toBeGreaterThan(0);
  });
}, 120000);
