import fs from 'fs';
import path from 'path';

import { INITIAL_BURGERS } from './src/data/burgersData.js';
import { INITIAL_DRINKS } from './src/data/drinksData.js';
import { INITIAL_SMASH_BURGERS } from './src/data/smashBurgersData.js';
import { INITIAL_SHARING } from './src/data/sharingData.js';
import { INITIAL_SIDES } from './src/data/sidesData.js';
import { INITIAL_DIPS } from './src/data/dipsData.js';

const allItems = [
  ...INITIAL_BURGERS,
  ...INITIAL_DRINKS,
  ...INITIAL_SMASH_BURGERS,
  ...INITIAL_SHARING,
  ...INITIAL_SIDES,
  ...INITIAL_DIPS
];

const publicDir = './public';

console.log(`Checking ${allItems.length} menu items...`);
let missingCount = 0;

allItems.forEach(item => {
  const fullPath = path.join(publicDir, item.image);
  const exists = fs.existsSync(fullPath);
  if (!exists) {
    console.error(`❌ MISSING IMAGE for [${item.name}]: ${item.image}`);
    missingCount++;
  } else {
    console.log(`✓ OK [${item.name}]: ${item.image}`);
  }
});

console.log(`Done checking. Missing: ${missingCount}`);
