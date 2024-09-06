import {
  Champion,
  CommunityMedal,
  Coupon,
  ElojobAddon,
  Game,
  Lane,
  PrismaClient,
  Product,
  ProductExtras,
  ProductStatus,
  Rank,
  Region,
} from '@prisma/client';
import { addDays } from 'date-fns';
import axios from 'axios';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

const now = new Date();

function getRandomItem<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

type ChampionFromApi = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
};

async function getChampions(): Promise<Omit<Champion, 'id'>[]> {
  const versionsEndpoint =
    'https://ddragon.leagueoflegends.com/api/versions.json';

  const versions: string[] = await axios
    .get(versionsEndpoint)
    .then((res) => res.data);

  const lastVersion = versions[0];

  if (!lastVersion)
    throw Error(
      `Unable to get last LOL api version. Check url ${versionsEndpoint}`
    );

  const championsEndpoint = `https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/en_US/champion.json`;

  let champions = await axios
    .get(championsEndpoint)
    .then((res) => res.data)
    .then((res) => res.data);

  if (!champions)
    throw Error(
      `Unable to get last LOL champions. Check url: ${championsEndpoint}`
    );

  console.log(`Found ${Object.keys(champions).length} LOL champion`);

  champions = <ChampionFromApi[]>Object.values(champions);

  champions = champions.map((x: ChampionFromApi) => ({
    name: x.name,
    slug: x.id,
    key: x.key,
    title: x.title,
    blurb: x.blurb,
    imageUrl: `https://ddragon.leagueoflegends.com/cdn/${lastVersion}/img/champion/${x.id}.png`,
    tags: x.tags,
    partype: x.partype,
  }));

  return champions;
}

const elojobAddon: Omit<ElojobAddon, 'id'>[] = [
  {
    title: 'Chat Offline',
    slug: 'chat-offline',
    priceIncreasePercentage: 0,
    imageUrl: '',
  },
  {
    title: 'Live Matches',
    slug: 'live-matches',
    priceIncreasePercentage: 0,
    imageUrl: '',
  },
  {
    title: 'Fast Delivery',
    slug: 'fast-delivery',
    priceIncreasePercentage: 15,
    imageUrl: '',
  },
  {
    title: 'Set the times',
    slug: 'set-the-times',
    priceIncreasePercentage: 15,
    imageUrl: '',
  },
  {
    title: 'LP correction',
    slug: 'lp-correction',
    priceIncreasePercentage: 30,
    imageUrl: '',
  },
  {
    title: 'Mono Addon',
    slug: 'mono-Addon',
    priceIncreasePercentage: 30,
    imageUrl: '',
  },
];

const coupon: Omit<Coupon, 'id'>[] = [
  {
    name: 'SMURF10',
    discountPercentage: 10,
    createdAt: now,
    expiresAt: addDays(now, 180),
  },
  {
    name: 'SMURF15',
    discountPercentage: 15,
    createdAt: now,
    expiresAt: addDays(now, 120),
  },
  {
    name: 'SMURF20',
    discountPercentage: 20,
    createdAt: now,
    expiresAt: addDays(now, 90),
  },
];

const game: Omit<Game, 'id'>[] = [
  {
    title: 'League of Legends',
    slug: 'league-of-legends',
    imageUrl: 'title-lol.png',
  },
  {
    title: 'Valorant',
    slug: 'valorant',
    imageUrl: 'title-valorant.png',
  },
];

const rank: Omit<Rank, 'id'>[] = [
  { title: 'Iron', slug: 'iron', imageUrl: `rank-iron.png` },
  { title: 'Bronze', slug: 'bronze', imageUrl: `rank-bronze.png` },
  { title: 'Silver', slug: 'silver', imageUrl: `rank-silver.png` },
  { title: 'Gold', slug: 'gold', imageUrl: `rank-gold.png` },
  { title: 'Platinum', slug: 'platinum', imageUrl: `rank-platinum.png` },
  { title: 'Emerald', slug: 'emerald', imageUrl: `rank-emerald.png` },
  { title: 'Diamond', slug: 'diamond', imageUrl: `rank-diamond.png` },
  { title: 'Master', slug: 'master', imageUrl: `rank-master.png` },
  {
    title: 'Grandmaster',
    slug: 'grandmaster',
    imageUrl: `rank-grandmaster.png`,
  },
];

const communityMedal: Omit<CommunityMedal, 'id'>[] = [
  { title: 'team-work', slug: 'team-work', imageUrl: 'medal-team-work.png' },
  { title: 'expertise', slug: 'expertise', imageUrl: 'medal-expertise.png' },
  {
    title: 'imagination',
    slug: 'imagination',
    imageUrl: 'medal-imagination.png',
  },
  { title: 'veterancy', slug: 'veterancy', imageUrl: 'medal-veterancy.png' },
];

const lane: Omit<Lane, 'id'>[] = [
  { title: 'Autofill', slug: 'autofill', imageUrl: 'lane-autofill.png' },
  { title: 'Bottom', slug: 'bottom', imageUrl: 'lane-bottom.png' },
  { title: 'Jungle', slug: 'jungle', imageUrl: 'lane-jungle.png' },
  { title: 'Mid', slug: 'mid', imageUrl: 'lane-mid.png' },
  { title: 'Support', slug: 'support', imageUrl: 'lane-support.png' },
  { title: 'Top', slug: 'top', imageUrl: 'lane-top.png' },
];

const region: Omit<Region, 'id'>[] = [
  {
    title: 'Brazil',
    slug: 'brazil',
    flagImageUrl: `flag-brazil.png`,
    mapImageUrl: `map-brazil.png`,
  },
  {
    title: 'North America',
    slug: 'north-america',
    flagImageUrl: `flag-north-america.png`,
    mapImageUrl: `map-north-america.png`,
  },
  {
    title: 'Europe Nordic & East',
    slug: 'europe-east',
    flagImageUrl: `flag-europe-east.png`,
    mapImageUrl: `map-europe-east.png`,
  },
  {
    title: 'Europe West',
    slug: 'europe-west',
    flagImageUrl: `flag-europe-west.png`,
    mapImageUrl: `map-europe-west.png`,
  },
  {
    title: 'Japan',
    slug: 'japan',
    flagImageUrl: `flag-japan.png`,
    mapImageUrl: `map-japan.png`,
  },
  {
    title: 'Korea',
    slug: 'korea',
    flagImageUrl: `flag-korea.png`,
    mapImageUrl: `map-korea.png`,
  },
  {
    title: 'LATAM North',
    slug: 'latam-north',
    flagImageUrl: `flag-latam-north.png`,
    mapImageUrl: `map-latam-north.png`,
  },
  {
    title: 'LATAM South',
    slug: 'latam-south',
    flagImageUrl: `flag-latam-south.png`,
    mapImageUrl: `map-latam-south.png`,
  },
  {
    title: 'Oceania',
    slug: 'oceania',
    flagImageUrl: `flag-oceania.png`,
    mapImageUrl: `map-oceania.png`,
  },
  {
    title: 'Turkey',
    slug: 'turkey',
    flagImageUrl: `flag-turkey.png`,
    mapImageUrl: `map-turkey.png`,
  },
];

const coreProducts = [
  {
    slug: 'bronze',
    title: 'Bronze Account',
    imageUrl: 'account-bronze.jpg',
    description: 'Bronze account to boost your rank',
    rankId: 'clzu4a337000etcoxjyvcnlqf',
  },
  {
    slug: 'diamond',
    title: 'Diamond Account',
    imageUrl: 'account-diamond.jpg',
    description: 'Diamond account to boost your rank',
    rankId: 'clzu4a35o000jtcoxra8zlgtz',
  },
  {
    slug: 'emerald',
    title: 'Emerald Account',
    imageUrl: 'account-emerald.jpg',
    description: 'Emerald account to boost your rank',
    rankId: 'clzu4a33f000gtcoxb4no20x9',
  },
  {
    slug: 'gold',
    title: 'Gold Account',
    imageUrl: 'account-gold.jpg',
    description: 'Gold account to boost your rank',
    rankId: 'clzu4a35p000ktcoxkmxxhh4y',
  },
  {
    slug: 'gold-2',
    title: 'Gold-2 Account',
    imageUrl: 'account-gold-2.jpg',
    description: 'Gold-2 account to boost your rank',
    rankId: 'clzu4a35p000ktcoxkmxxhh4y',
  },
  {
    slug: 'iron',
    title: 'Iron Account',
    imageUrl: 'account-iron.jpg',
    description: 'Iron account to boost your rank',
    rankId: 'clzu4a2v50003tcox63jr4v2w',
  },
  {
    slug: 'iron-2',
    title: 'Iron-2 Account',
    imageUrl: 'account-iron-2.jpg',
    description: 'Iron-2 account to boost your rank',
    rankId: 'clzu4a2v50003tcox63jr4v2w',
  },
  {
    slug: 'platinum',
    title: 'Platinum Account',
    imageUrl: 'account-platinum.jpg',
    description: 'Platinum account to boost your rank',
    rankId: 'clzu4a31u000ctcox8x4nqeti',
  },
  {
    slug: 'silver',
    title: 'Silver Account',
    imageUrl: 'account-silver.jpg',
    description: 'Silver account to boost your rank',
    rankId: 'clzu4a354000htcoxlxn8hfwy',
  },
];

const products: Omit<Product, 'id'>[] = coreProducts.map((p) => ({
  ...p,
  gameId: 'clzu4a2yp0009tcoxm9ewxmbf',
  price: (Math.random() * 50 + 10) as unknown as Decimal,
  availableQuantity: Math.floor(Math.random() * 20) + 1,
  regionId: 'clzu4a355000itcoxihldlotv',
  status: getRandomItem(Object.values(ProductStatus)) as ProductStatus,
  extras: Object.values(ProductExtras) as ProductExtras[],
}));

async function insertCoreData() {
  elojobAddon.forEach(async (data) => {
    await prisma.elojobAddon.create({
      data,
    });
  });

  coupon.forEach(async (data) => {
    await prisma.coupon.create({
      data,
    });
  });

  game.forEach(async (data) => {
    await prisma.game.create({
      data,
    });
  });

  rank.forEach(async (data) => {
    await prisma.rank.create({
      data,
    });
  });

  communityMedal.forEach(async (data) => {
    await prisma.communityMedal.create({
      data,
    });
  });

  lane.forEach(async (data) => {
    await prisma.lane.create({
      data,
    });
  });

  region.forEach(async (data) => {
    await prisma.region.create({
      data,
    });
  });

  const champion = await getChampions();

  champion.forEach(async (data) => {
    await prisma.champion.create({
      data,
    });
  });
}

async function insertProducts() {
  products.forEach(async (data) => {
    await prisma.product.create({ data });
  });
}

async function test() {
  await insertProducts();
}

test()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
