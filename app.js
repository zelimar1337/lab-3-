// Simple constructor function for toy cars
function ToyCar(options) {
  this.id = options.id;
  this.name = options.name;
  this.brand = options.brand;
  this.year = options.year;
  this.scale = options.scale;
  this.color = options.color;
  this.category = options.category;
  this.series = options.series;
  this.modelCode = options.modelCode;
  this.material = options.material;
  this.hasOpeningDoors = options.hasOpeningDoors;
  this.hasPullBackAction = options.hasPullBackAction;
  this.lengthCm = options.lengthCm;
  this.weightGrams = options.weightGrams;
  this.price = options.price; // demo price
  this.description = options.description;
  this.image = options.image;
  this.caption = options.caption;
  this.userRating = options.userRating || 3; // default rating
}

// Data for 12 different toy car products
const carData = [
  {
    id: "ford-bronco-1978",
    name: "1978 Ford Bronco",
    brand: "Showcasts Collectibles",
    year: 1978,
    scale: "1:24",
    color: "Red with white top",
    category: "Classic SUV",
    series: "Showcasts Diecast",
    modelCode: "77373D",
    material: "Diecast metal and plastic parts",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 19,
    weightGrams: 320,
    price: 39.99,
    description:
      "A classic 1978 Ford Bronco in bright red, perfect for off-road themed collections.",
    image: "assets/ford-bronco-1978.png",
    caption: "1978 Ford Bronco, Red – 1:24 scale."
  },
  {
    id: "lotus-emira",
    name: "Lotus Emira Hardtop",
    brand: "Kinsmart",
    year: 2023,
    scale: "1:34",
    color: "Assorted colors (yellow, red, blue, black)",
    category: "Modern sports car",
    series: "Kinsmart Pull Back",
    modelCode: "5441D",
    material: "Diecast metal body",
    hasOpeningDoors: true,
    hasPullBackAction: true,
    lengthCm: 13,
    weightGrams: 110,
    price: 12.99,
    description:
      "Compact Lotus Emira with pull-back action and opening doors, available in multiple colors.",
    image: "assets/lotus-emira.png",
    caption: "Lotus Emira Hardtop assortment – 1:34 scale."
  },
  {
    id: "buick-gsx-1970",
    name: "1970 Buick GSX",
    brand: "RC2",
    year: 1970,
    scale: "1:64",
    color: "Burnished copper/bronze with black stripes",
    category: "Muscle car",
    series: "RC Hot Rod",
    modelCode: "RC015/48",
    material: "Diecast metal",
    hasOpeningDoors: false,
    hasPullBackAction: false,
    lengthCm: 7,
    weightGrams: 40,
    price: 7.49,
    description:
      "Small scale 1970 Buick GSX with classic muscle car styling and detailed striping.",
    image: "assets/buick-gsx-1970.png",
    caption: "1970 Buick GSX, Burnished Copper – 1:64 scale."
  },
  {
    id: "vw-thanksgiving-van",
    name: "Volkswagen Panel Van – Happy Thanksgiving",
    brand: "Greenlight",
    year: 1960,
    scale: "1:64",
    color: "Yellow with holiday graphics",
    category: "Holiday van",
    series: "Holiday Series",
    modelCode: "30221/48",
    material: "Diecast metal",
    hasOpeningDoors: false,
    hasPullBackAction: false,
    lengthCm: 6.5,
    weightGrams: 38,
    price: 8.99,
    description:
      "A fun Volkswagen panel van with Thanksgiving artwork, perfect for seasonal displays.",
    image: "assets/vw-panel-van-thanksgiving.png",
    caption: "Happy Thanksgiving VW panel van – 1:64 scale."
  },
  {
    id: "bmw-x5-g05",
    name: "BMW X5 G05",
    brand: "Paragon Models",
    year: 2020,
    scale: "1:64",
    color: "Toronto Red",
    category: "Luxury SUV",
    series: "Paragon Diecast",
    modelCode: "PA55185R",
    material: "Diecast metal and plastic",
    hasOpeningDoors: false,
    hasPullBackAction: false,
    lengthCm: 7,
    weightGrams: 45,
    price: 9.99,
    description:
      "Detailed BMW X5 in Toronto Red with clean lines and realistic wheels.",
    image: "assets/bmw-x5-g05-red.png",
    caption: "BMW X5 G05, Toronto Red – 1:64 scale."
  },
  {
    id: "jeep-renegade-2017",
    name: "2017 Jeep Renegade",
    brand: "Showcasts",
    year: 2017,
    scale: "1:24",
    color: "Orange",
    category: "Compact SUV",
    series: "Showcasts SUV Series",
    modelCode: "38282OR",
    material: "Diecast metal with plastic interior",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 18,
    weightGrams: 290,
    price: 34.99,
    description:
      "Bright orange Jeep Renegade with opening doors and detailed interior.",
    image: "assets/jeep-renegade-2017-orange.png",
    caption: "2017 Jeep Renegade SUV, Orange – 1:24 scale."
  },
  {
    id: "mitsubishi-eclipse-brian",
    name: "Brian's Mitsubishi Eclipse Remix",
    brand: "Jada Toys",
    year: 2001,
    scale: "1:24",
    color: "Red with graphics",
    category: "Movie car",
    series: "Fast & Furious",
    modelCode: "36815",
    material: "Diecast metal body",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 19,
    weightGrams: 310,
    price: 36.99,
    description:
      "A movie-inspired Mitsubishi Eclipse with wide body kit and bright decals.",
    image: "assets/mitsubishi-eclipse-brian.png",
    caption: "Brian's Mitsubishi Eclipse Remix – Fast & Furious, 1:24 scale."
  },
  {
    id: "datsun-240z-1972",
    name: "1972 Datsun 240Z",
    brand: "Jada Toys",
    year: 1972,
    scale: "1:24",
    color: "Dark blue",
    category: "Classic sports car",
    series: "JDM Series",
    modelCode: "37020",
    material: "Diecast metal",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 19,
    weightGrams: 305,
    price: 37.99,
    description:
      "A clean dark blue Datsun 240Z with lowered stance and classic JDM look.",
    image: "assets/datsun-240z-1972.png",
    caption: "1972 Datsun 240Z, Dark Blue – 1:24 scale."
  },
  {
    id: "lamborghini-aventador-pink",
    name: "Lamborghini Aventador LP700-4",
    brand: "Kinsmart",
    year: 2015,
    scale: "1:38",
    color: "Matte pink",
    category: "Supercar",
    series: "Kinsmart Supercars",
    modelCode: "5370/1D",
    material: "Diecast metal body",
    hasOpeningDoors: true,
    hasPullBackAction: true,
    lengthCm: 12,
    weightGrams: 95,
    price: 11.99,
    description:
      "A small yet bold matte pink Aventador with pull-back action and opening doors.",
    image: "assets/lamborghini-aventador-pink.png",
    caption: "Lamborghini Aventador LP700-4, Matte Pink – 1:38 scale."
  },
  {
    id: "chevy-camaro-2016",
    name: "2016 Chevy Camaro",
    brand: "Jada Toys",
    year: 2016,
    scale: "1:24",
    color: "Candy blue with aero kit",
    category: "Muscle car",
    series: "Street Tuners",
    modelCode: "32993/4",
    material: "Diecast metal",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 20,
    weightGrams: 320,
    price: 38.99,
    description:
      "A tuned 2016 Camaro in candy blue with wide body kit and large rear wing.",
    image: "assets/chevy-camaro-blue.png",
    caption: "2016 Chevy Camaro, Candy Blue – 1:24 scale."
  },
  {
    id: "optimus-ecto1",
    name: "Optimus Prime Truck – Ecto-1 Crossover",
    brand: "Jada Toys",
    year: 2021,
    scale: "1:24",
    color: "White and red Ghostbusters theme",
    category: "Crossover truck",
    series: "Transformers x Ghostbusters",
    modelCode: "35572",
    material: "Diecast metal and plastic",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 21,
    weightGrams: 350,
    price: 42.99,
    description:
      "A crossover between Optimus Prime and the Ghostbusters Ecto-1, with bold livery.",
    image: "assets/optimus-ecto1.png",
    caption: "Optimus Prime Truck Ghostbusters Ecto-1 – 1:24 scale."
  },
  {
    id: "chevy-belair-1957",
    name: "1957 Chevy Bel Air Lowrider",
    brand: "Motor Max",
    year: 1957,
    scale: "1:24",
    color: "Blue with white roof",
    category: "Classic lowrider",
    series: "American Classics",
    modelCode: "79030",
    material: "Diecast metal",
    hasOpeningDoors: true,
    hasPullBackAction: false,
    lengthCm: 20,
    weightGrams: 315,
    price: 35.99,
    description:
      "A lowrider style 1957 Chevy Bel Air with wire wheels and a white roof.",
    image: "assets/chevy-belair-1957.png",
    caption: "1957 Chevy Bel Air Lowrider, Blue/White – 1:24 scale."
  }
];

// Create objects from data
const cars = carData.map(data => new ToyCar(data));

// DOM references
const selectEl = document.getElementById("car-select");
const ratingInput = document.getElementById("rating-input");
const ratingValueEl = document.getElementById("rating-value");
const saveRatingBtn = document.getElementById("save-rating");

const nameEl = document.getElementById("car-name");
const brandEl = document.getElementById("car-brand");
const yearEl = document.getElementById("car-year");
const scaleEl = document.getElementById("car-scale");
const colorEl = document.getElementById("car-color");
const categoryEl = document.getElementById("car-category");
const seriesEl = document.getElementById("car-series");
const codeEl = document.getElementById("car-code");
const materialEl = document.getElementById("car-material");
const doorsEl = document.getElementById("car-doors");
const pullbackEl = document.getElementById("car-pullback");
const lengthEl = document.getElementById("car-length");
const weightEl = document.getElementById("car-weight");
const priceEl = document.getElementById("car-price");
const userRatingEl = document.getElementById("car-user-rating");
const descriptionEl = document.getElementById("car-description");
const imageEl = document.getElementById("car-image");
const captionEl = document.getElementById("car-caption");

let currentCar = null;

// Fill the select with options
function initSelect() {
  cars.forEach(car => {
    const option = document.createElement("option");
    option.value = car.id;
    option.textContent = `${car.name} (${car.scale})`;
    selectEl.appendChild(option);
  });
}

// Find car by id
function findCarById(id) {
  return cars.find(car => car.id === id);
}

// Render car details on the page
function renderCar(car) {
  currentCar = car;

  nameEl.textContent = car.name;
  brandEl.textContent = car.brand;
  yearEl.textContent = car.year;
  scaleEl.textContent = car.scale;
  colorEl.textContent = car.color;
  categoryEl.textContent = car.category;
  seriesEl.textContent = car.series;
  codeEl.textContent = car.modelCode;
  materialEl.textContent = car.material;
  doorsEl.textContent = car.hasOpeningDoors ? "Yes" : "No";
  pullbackEl.textContent = car.hasPullBackAction ? "Yes" : "No";
  lengthEl.textContent = `${car.lengthCm} cm (approx.)`;
  weightEl.textContent = `${car.weightGrams} g (approx.)`;
  priceEl.textContent = `$${car.price.toFixed(2)}`;
  userRatingEl.textContent = `${car.userRating} / 5`;

  descriptionEl.textContent = car.description;

  imageEl.src = car.image;
  imageEl.alt = car.name;
  captionEl.textContent = car.caption;

  ratingInput.value = car.userRating;
  ratingValueEl.textContent = car.userRating;
}

// Update rating label when slider moves
ratingInput.addEventListener("input", () => {
  ratingValueEl.textContent = ratingInput.value;
});

// Save rating back to the object
saveRatingBtn.addEventListener("click", () => {
  if (!currentCar) return;
  const newRating = parseInt(ratingInput.value, 10);
  currentCar.userRating = newRating;
  userRatingEl.textContent = `${currentCar.userRating} / 5`;
});

// Change car when user chooses another option
selectEl.addEventListener("change", () => {
  const selectedId = selectEl.value;
  const car = findCarById(selectedId);
  if (car) {
    renderCar(car);
  }
});

// Initialize page on load
initSelect();
if (cars.length > 0) {
  renderCar(cars[0]);
  selectEl.value = cars[0].id;
}
