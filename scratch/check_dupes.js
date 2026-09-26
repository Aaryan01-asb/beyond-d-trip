const fs = require('fs');
const content = fs.readFileSync('data/mockCmsData.ts', 'utf8');

const routebooksBlock = content.split('export const mockRoutebooks: Routebook[] = [')[1].split('export const mockSoulStops')[0];
const items = routebooksBlock.split(/\{\s*id:\s*'/).slice(1);

const imgMap = {};
items.forEach(item => {
  const id = item.split("'")[0];
  const imgMatch = item.match(/image:\s*'([^']+)'/);
  if (id && imgMatch) {
    const img = imgMatch[1];
    if (!imgMap[img]) imgMap[img] = [];
    imgMap[img].push(id);
  }
});

console.log('Total Routebooks parsed:', items.length);
let dupes = 0;
for (const img in imgMap) {
  if (imgMap[img].length > 1) {
    console.log('DUPLICATE:', img, '-> used in:', imgMap[img].join(', '));
    dupes++;
  }
}
if (dupes === 0) {
  console.log('CONGRATULATIONS: 0 duplicates found across all 26 routebook cover images!');
}
