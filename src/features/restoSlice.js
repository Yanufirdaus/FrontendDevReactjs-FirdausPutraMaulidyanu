import axios from "axios";

export const priceFilter = [
    { low: 0, high: 300 },
    { low: 301, high: 600 },
    { low: 601, high: 1000 },
    { low: 1001, high: 2000 }
];
// export const fetchRestaurants = async () => {
//     try {
//         const response = await axios.get(
//         "https://646ce8a07b42c06c3b2c4013.mockapi.io/restaurant"
//         );

//         setResto(response.data);

//         const uniqueCategories = [
//         ...new Set(response.data.flatMap(item => item.categories))
//         ];

//         setCategories(uniqueCategories);
//     } catch (error) {
//         console.error("Failed to fetch restaurant data", error);
//     }
// };

// export const handlePriceChange = (index) => {
//     if (index === "") {
//         setSelectedPriceRange(null);
//         return;
//     }
//     setSelectedPriceRange(priceFilter[index]);
// };

// export const handleCategoryChange = (value) => {
//     setSelectedCategories(value || null);
// };

// export const handleOpenStatusChange = (checked) => {
//     setOpenStatus(checked);
// };

// export const clearAllFilter = () => {
//     setSelectedCategories(null);
//     setSelectedPriceRange(null);
//     setOpenStatus(false);
// };

export const fetchRestaurants = async (setResto, setCategories, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.get(
      "https://646ce8a07b42c06c3b2c4013.mockapi.io/restaurant"
    );

    setResto(response.data);

    const uniqueCategories = [
      ...new Set(response.data.flatMap(item => item.categories))
    ];

    setCategories(uniqueCategories);

    setIsLoading(false);
  } catch (error) {
    console.error("Failed to fetch restaurant data", error);

    setIsLoading(false);
  }
};

export const handlePriceChange = (index, setSelectedPriceRange, priceFilter) => {
  if (index === "") {
    setSelectedPriceRange(null);
    return;
  }
  setSelectedPriceRange(priceFilter[index]);
};

export const handleCategoryChange = (value, setSelectedCategories) => {
  setSelectedCategories(value || null);
};

export const handleOpenStatusChange = (checked, setOpenStatus) => {
  setOpenStatus(checked);
};

export const clearAllFilter = (setSelectedCategories, setSelectedPriceRange, setOpenStatus) => {
  setSelectedCategories(null);
  setSelectedPriceRange(null);
  setOpenStatus(false);
};

export const restaurantsMapPoint = [
  { id: "26", name: "1135 AD", lat: 26.985, lng: 75.851 },
  { id: "25", name: "6 Ballygunge Place", lat: 22.542, lng: 88.347 },
  { id: "29", name: "Agashiye", lat: 23.021, lng: 72.567 },
  { id: "9",  name: "Alhamdulillah Hotel", lat: 17.387, lng: 78.491 },
  { id: "4",  name: "Bawarchi", lat: 17.385, lng: 78.486 },
  { id: "22", name: "Benjarong", lat: 13.028, lng: 80.258 },
  { id: "16", name: "Britannia & Co.", lat: 19.073, lng: 72.882 },
  { id: "11", name: "Bukhara", lat: 28.611, lng: 77.218 },
  { id: "20", name: "Dakshin", lat: 13.061, lng: 80.238 },
  { id: "31", name: "Gopi Dining Hall", lat: 23.034, lng: 72.521 },
  { id: "10", name: "Grand Hotel", lat: 17.389, lng: 78.486 },
  { id: "12", name: "Indian Accent", lat: 28.614, lng: 77.216 },
  { id: "2",  name: "Jewel of Nizam", lat: 17.384, lng: 78.473 },
  { id: "13", name: "Karim’s", lat: 28.652, lng: 77.233 },
  { id: "18", name: "Koshy’s", lat: 12.975, lng: 77.605 },
  { id: "15", name: "Masala Library", lat: 19.063, lng: 72.836 },
  { id: "17", name: "Mavalli Tiffin Room (MTR)", lat: 12.975, lng: 77.592 },
  { id: "6",  name: "Mumtaz Restaurant", lat: 17.391, lng: 78.470 },
  { id: "21", name: "Murugan Idli Shop", lat: 13.059, lng: 80.233 },
  { id: "23", name: "Oh! Calcutta", lat: 22.569, lng: 88.354 },
  { id: "1",  name: "Paradise Biryani", lat: 17.444, lng: 78.498 },
  { id: "28", name: "Peacock Rooftop Restaurant", lat: 26.912, lng: 75.787 },
  { id: "24", name: "Peter Cat", lat: 22.568, lng: 88.348 },
  { id: "5",  name: "Pista House", lat: 17.361, lng: 78.474 }
];
