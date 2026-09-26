const fs = require('fs');

let fileContent = fs.readFileSync('data/mockCmsData.ts', 'utf8');

// Replace spa bottle photo-1540555700478-4be289fbecef everywhere
fileContent = fileContent.replace(
  /https:\/\/images\.unsplash\.com\/photo-1540555700478-4be289fbecef\?auto=format&fit=crop&w=1200&q=80/g,
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
);

// Replace skewers photo-1555939594-58d7cb561ad1 everywhere
fileContent = fileContent.replace(
  /https:\/\/images\.unsplash\.com\/photo-1555939594-58d7cb561ad1\?auto=format&fit=crop&w=1200&q=80/g,
  'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
);

// Assign unique hero cover images for all 26 routebooks
const routebookCovers = {
  'maldives-honeymoon-overwater': 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
  'maldives-family-fun': 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
  'maldives-south-ari-atoll': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  'bali-ubud-jungle-retreat': 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
  'bali-seminyak-beach-escape': 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
  'bali-nusa-penida-explorer': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
  'thailand-bangkok-chiangmai': 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80',
  'thailand-phuket-krabi-cliffs': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
  'thailand-krabi-adventure': 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
  'thailand-koh-samui-grove': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'vietnam-hanoi-halong-bay': 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  'vietnam-saigon-mekong-delta': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
  'vietnam-phu-quoc-retreat': 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80',
  'sri-lanka-galle-fort-coast': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  'sri-lanka-ella-highlands': 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
  'sri-lanka-yala-safari': 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80',
  'singapore-skyline-luxury': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
  'singapore-marina-bay-gardens': 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80',
  'singapore-sentosa-panorama': 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
  'singapore-sentosa-family': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  'greece-santorini-caldera': 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
  'greece-mykonos-windmills': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
  'greece-athens-acropolis': 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80',
  'greece-crete-olive-wine': 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80',
  'malaysia-kl-skyline-rainforest': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80',
  'malaysia-langkawi-lagoon': 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
  'malaysia-penang-heritage': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80'
};

// Replace each routebook's cover image with its distinct cover
for (const [id, coverUrl] of Object.entries(routebookCovers)) {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+'`, 'g');
  fileContent = fileContent.replace(regex, `$1${coverUrl}'`);
}

fs.writeFileSync('data/mockCmsData.ts', fileContent);
console.log('Successfully updated mockCmsData.ts!');
