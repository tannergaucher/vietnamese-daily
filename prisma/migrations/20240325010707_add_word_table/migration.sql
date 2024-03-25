-- CreateTable
CREATE TABLE "Word" (
    "vietnamese" STRING NOT NULL,
    "speaker" "Gender",
    "maleSrc" STRING,
    "femaleSrc" STRING,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("vietnamese")
);

-- CreateTable
CREATE TABLE "_DialogToWord" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DialogToWord_AB_unique" ON "_DialogToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_DialogToWord_B_index" ON "_DialogToWord"("B");

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Dialog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("vietnamese") ON DELETE CASCADE ON UPDATE CASCADE;
