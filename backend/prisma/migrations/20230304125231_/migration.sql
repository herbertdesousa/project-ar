-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "id_auth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "user_companies" (
    "id_user_company" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "id_user" TEXT NOT NULL,
    "legal_entity_document" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_user_key" ON "users"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_auth_key" ON "users"("id_auth");

-- CreateIndex
CREATE UNIQUE INDEX "user_companies_id_user_company_key" ON "user_companies"("id_user_company");

-- AddForeignKey
ALTER TABLE "user_companies" ADD CONSTRAINT "user_companies_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
