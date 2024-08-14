-- CreateEnum
CREATE TYPE "ElojobTypeOfClimb" AS ENUM ('SOLO', 'DUO');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'DISABLED', 'NFA', 'NO_BANS', 'NO_RANKED_PLAYED');

-- CreateEnum
CREATE TYPE "ProductExtras" AS ENUM ('GIFT_CARDS', 'RIOT_POINTS', 'VALORANT_POINTS');

-- CreateEnum
CREATE TYPE "ProductPaymentMethod" AS ENUM ('PIX', 'NATIONAL_CREDITCARD_MASTERCARD', 'NATIONAL_CREDITCARD_VISA', 'CRIPTO', 'INTERNATIONAL_CREDITCARD');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "bio" TEXT NOT NULL,
    "leagueAccounts" TEXT[],
    "valorantAccounts" TEXT[],
    "rankId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "rankId" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "regionId" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL,
    "extras" "ProductExtras"[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductOrder" (
    "id" TEXT NOT NULL,
    "paymentMethod" "ProductPaymentMethod" NOT NULL,
    "couponId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Elojob" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "starterRankId" TEXT NOT NULL,
    "finalRankId" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "tyeOfClimb" "ElojobTypeOfClimb" NOT NULL,

    CONSTRAINT "Elojob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElojobAddon" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "priceIncreasePercentage" INTEGER NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "ElojobAddon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discountPercentage" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sluig" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Medal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lane" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "elojobId" TEXT,

    CONSTRAINT "Lane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "flagImageUrl" TEXT NOT NULL,
    "mapImageUrl" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToProductOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ElojobToElojobAddon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MedalToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LaneToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ChampionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ChampionToElojob" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Elojob_userId_key" ON "Elojob"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ElojobAddon_slug_key" ON "ElojobAddon"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_slug_key" ON "Rank"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Medal_sluig_key" ON "Medal"("sluig");

-- CreateIndex
CREATE UNIQUE INDEX "Champion_slug_key" ON "Champion"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Region_slug_key" ON "Region"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductOrder_AB_unique" ON "_ProductToProductOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductOrder_B_index" ON "_ProductToProductOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElojobToElojobAddon_AB_unique" ON "_ElojobToElojobAddon"("A", "B");

-- CreateIndex
CREATE INDEX "_ElojobToElojobAddon_B_index" ON "_ElojobToElojobAddon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MedalToUser_AB_unique" ON "_MedalToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MedalToUser_B_index" ON "_MedalToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaneToUser_AB_unique" ON "_LaneToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LaneToUser_B_index" ON "_LaneToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionToUser_AB_unique" ON "_ChampionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionToUser_B_index" ON "_ChampionToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionToElojob_AB_unique" ON "_ChampionToElojob"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionToElojob_B_index" ON "_ChampionToElojob"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elojob" ADD CONSTRAINT "Elojob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elojob" ADD CONSTRAINT "Elojob_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elojob" ADD CONSTRAINT "Elojob_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elojob" ADD CONSTRAINT "Elojob_starterRankId_fkey" FOREIGN KEY ("starterRankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elojob" ADD CONSTRAINT "Elojob_finalRankId_fkey" FOREIGN KEY ("finalRankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lane" ADD CONSTRAINT "Lane_elojobId_fkey" FOREIGN KEY ("elojobId") REFERENCES "Elojob"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductOrder" ADD CONSTRAINT "_ProductToProductOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductOrder" ADD CONSTRAINT "_ProductToProductOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElojobToElojobAddon" ADD CONSTRAINT "_ElojobToElojobAddon_A_fkey" FOREIGN KEY ("A") REFERENCES "Elojob"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElojobToElojobAddon" ADD CONSTRAINT "_ElojobToElojobAddon_B_fkey" FOREIGN KEY ("B") REFERENCES "ElojobAddon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedalToUser" ADD CONSTRAINT "_MedalToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Medal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedalToUser" ADD CONSTRAINT "_MedalToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaneToUser" ADD CONSTRAINT "_LaneToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Lane"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaneToUser" ADD CONSTRAINT "_LaneToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionToUser" ADD CONSTRAINT "_ChampionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Champion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionToUser" ADD CONSTRAINT "_ChampionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionToElojob" ADD CONSTRAINT "_ChampionToElojob_A_fkey" FOREIGN KEY ("A") REFERENCES "Champion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionToElojob" ADD CONSTRAINT "_ChampionToElojob_B_fkey" FOREIGN KEY ("B") REFERENCES "Elojob"("id") ON DELETE CASCADE ON UPDATE CASCADE;
