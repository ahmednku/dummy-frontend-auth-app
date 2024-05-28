const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
};

const AUTH_ROUTES = ["/login", "/signup", "/forgot-password", "/verify-otp"];

const PRODUCT_CATEGORIES = {
  MEN: "Men",
  WOMEN: "Women",
  KIDS: "Kids",
};

const PRODUCTS = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-shirt",
    price: 29.99,
  },
  {
    id: 2,
    title: "Women's Running Shoes",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-shoes",
    price: 79.99,
  },
  {
    id: 3,
    title: "Kids' Cartoon T-Shirt",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-shirt",
    price: 19.99,
  },
  {
    id: 4,
    title: "Men's Jeans",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-jeans",
    price: 39.99,
  },
  {
    id: 5,
    title: "Women's Summer Dress",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-dress",
    price: 49.99,
  },
  {
    id: 6,
    title: "Kids' Hoodie",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-hoodie",
    price: 24.99,
  },
  {
    id: 7,
    title: "Men's Formal Shirt",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-formal-shirt",
    price: 49.99,
  },
  {
    id: 8,
    title: "Women's Winter Jacket",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-jacket",
    price: 99.99,
  },
  {
    id: 9,
    title: "Kids' Denim Shorts",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-shorts",
    price: 14.99,
  },
  {
    id: 10,
    title: "Men's Sports Shoes",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-shoes",
    price: 69.99,
  },
  {
    id: 11,
    title: "Women's Hoodie",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-hoodie",
    price: 39.99,
  },
  {
    id: 12,
    title: "Kids' Printed T-Shirt",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-printed-shirt",
    price: 17.99,
  },
  {
    id: 13,
    title: "Men's Winter Jacket",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-winter-jacket",
    price: 79.99,
  },
  {
    id: 14,
    title: "Women's Jeans",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-jeans",
    price: 59.99,
  },
  {
    id: 15,
    title: "Kids' Party Dress",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-party-dress",
    price: 29.99,
  },
  {
    id: 16,
    title: "Men's Polo Shirt",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-polo-shirt",
    price: 34.99,
  },
  {
    id: 17,
    title: "Women's Formal Blouse",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-formal-blouse",
    price: 44.99,
  },
  {
    id: 18,
    title: "Kids' Denim Jacket",
    category: "Kids",
    image: "https://source.unsplash.com/random/?kids-denim-jacket",
    price: 39.99,
  },
  {
    id: 19,
    title: "Men's Leather Belt",
    category: "Men",
    image: "https://source.unsplash.com/random/?men-leather-belt",
    price: 24.99,
  },
  {
    id: 20,
    title: "Women's Casual Skirt",
    category: "Women",
    image: "https://source.unsplash.com/random/?women-casual-skirt",
    price: 39.99,
  },
];

export { PRODUCTS, PRODUCT_CATEGORIES, USER_ROLES, AUTH_ROUTES };
