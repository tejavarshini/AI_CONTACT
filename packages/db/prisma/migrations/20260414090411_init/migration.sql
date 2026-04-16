-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "importanceScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "snoozedUntil" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "ContactTimelineEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reason" TEXT,
    "message" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactTimelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContactTimelineEvent_contactId_createdAt_idx" ON "ContactTimelineEvent"("contactId", "createdAt");

-- CreateIndex
CREATE INDEX "ContactTimelineEvent_userId_createdAt_idx" ON "ContactTimelineEvent"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "ContactTimelineEvent" ADD CONSTRAINT "ContactTimelineEvent_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
