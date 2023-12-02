// Name: Mystical Bali Adventure
// Description: Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.
// Price: 2000
// Duration: 7

// Name: Futuristic Tokyo Odyssey
// Description: Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.
// Price: 2000
// Duration: 7

// Name: Alaskan Wilderness Expedition
// Description: Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.
// Price: 3500
// Duration: 10

// Name: Enigmatic Egyptian Odyssey
// Description: Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.
// Price: 1800
// Duration: 8

// Name: Scenic New Zealand Adventure
// Description: Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.
// Price: 2800
// Duration: 12

const toursArr = [
  {
    name: "Mystical Bali Adventure",
    description:
      "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Futuristic Tokyo Odyssey",
    description:
      "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Enigmatic Egyptian Odyssey",
    description:
      "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
    price: 1800,
    duration: 8,
  },
  {
    name: "Scenic New Zealand Adventure",
    description:
      "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
    price: 2800,
    duration: 12,
  },
];

function filterWuthMaxPrice(arr, maxPrice){
  return arr.filter(e => e.price <= maxPrice);
}

console.log(filterWuthMaxPrice(toursArr, 2500))

function sortByAlfabet(arr){
  return arr.sort((a, b) => b.name.length - a.name.length)
}

console.log(sortByAlfabet(toursArr))