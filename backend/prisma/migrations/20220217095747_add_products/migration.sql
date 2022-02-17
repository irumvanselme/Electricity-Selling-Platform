-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "description" TEXT,
    "status" TEXT,
    "added_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
