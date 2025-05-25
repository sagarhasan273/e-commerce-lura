export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // for sale items
  description: string;
  shortDescription: string;
  images: string[];
  category: number;
  featured: boolean;
  newArrival: boolean;
  onSale: boolean;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Weekender Bag",
    price: 299.99,
    originalPrice: 349.99,
    description: "This handcrafted leather weekender bag combines style and functionality for the modern traveler. Made with full-grain leather that develops a beautiful patina over time, it features a spacious main compartment, multiple interior pockets, and a detachable shoulder strap for versatile carrying options. Perfect for weekend getaways or short business trips.",
    shortDescription: "Handcrafted full-grain leather bag with ample storage for weekend trips.",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 3,
    featured: true,
    newArrival: false,
    onSale: true,
    inStock: true,
    colors: ["Brown", "Black", "Tan"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Modern Minimalist Watch",
    price: 199.99,
    description: "A sleek, minimalist timepiece designed for the modern individual. The clean dial with subtle hour markers offers elegant simplicity, while the premium stainless steel case and sapphire crystal ensure durability. Water-resistant up to 50 meters and powered by a precise Japanese movement, this watch combines style with reliable functionality.",
    shortDescription: "Elegant minimalist watch with stainless steel case and premium movement.",
    images: [
      "https://images.pexels.com/photos/9982456/pexels-photo-9982456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/9982601/pexels-photo-9982601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 4,
    featured: true,
    newArrival: true,
    onSale: false,
    inStock: true,
    colors: ["Silver", "Black", "Rose Gold"],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Organic Cotton Crewneck Sweater",
    price: 89.99,
    description: "Experience the perfect balance of comfort and style with our Organic Cotton Crewneck Sweater. Crafted from 100% GOTS-certified organic cotton, this medium-weight sweater offers warmth without bulk. The classic crewneck design features ribbed collar, cuffs, and hem for a clean finish. Versatile enough for layering or wearing on its own, this sweater is a sustainable addition to any wardrobe.",
    shortDescription: "Sustainable organic cotton sweater with classic crewneck design.",
    images: [
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 1,
    featured: false,
    newArrival: true,
    onSale: false,
    inStock: true,
    colors: ["Navy", "Gray", "Oatmeal", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 62
  },
  {
    id: 4,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    originalPrice: 299.99,
    description: "Immerse yourself in stunning audio with these premium wireless headphones. Featuring active noise cancellation technology, they effectively block ambient noise for an uninterrupted listening experience. The plush memory foam ear cushions provide exceptional comfort for extended use, while the 30-hour battery life ensures your music keeps playing. Compatible with Bluetooth 5.0 for stable connectivity and equipped with intuitive touch controls.",
    shortDescription: "Premium wireless headphones with active noise cancellation and 30-hour battery.",
    images: [
      "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 5,
    featured: true,
    newArrival: false,
    onSale: true,
    inStock: true,
    colors: ["Black", "Silver", "Midnight Blue"],
    rating: 4.9,
    reviews: 231
  },
  {
    id: 5,
    name: "Artisanal Ceramic Mug Set",
    price: 64.99,
    description: "Elevate your morning ritual with this set of four handcrafted ceramic mugs. Each mug is individually thrown on a potter's wheel and glazed with non-toxic finishes in complementary earth tones. The generous 12oz capacity and ergonomic handle make them perfect for coffee, tea, or hot chocolate. Slight variations in each piece highlight their artisanal character and make every set unique.",
    shortDescription: "Set of four handcrafted ceramic mugs with unique variations.",
    images: [
      "https://images.pexels.com/photos/4210807/pexels-photo-4210807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 2,
    featured: false,
    newArrival: true,
    onSale: false,
    inStock: true,
    colors: ["Terracotta", "Sage", "Slate", "Sand"],
    rating: 4.6,
    reviews: 48
  },
  {
    id: 6,
    name: "Premium Merino Wool Scarf",
    price: 79.99,
    description: "Luxurious comfort meets timeless style in our Premium Merino Wool Scarf. Crafted from ultra-fine merino wool, this scarf provides exceptional warmth without bulk or scratchiness. The generous dimensions allow for multiple styling options, while the classic herringbone pattern adds subtle sophistication. A versatile accessory that elevates any cold-weather ensemble.",
    shortDescription: "Ultra-soft merino wool scarf with classic herringbone pattern.",
    images: [
      "https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699464/pexels-photo-5699464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 1,
    featured: false,
    newArrival: false,
    onSale: false,
    inStock: true,
    colors: ["Camel", "Charcoal", "Burgundy", "Forest Green"],
    rating: 4.7,
    reviews: 35
  },
  {
    id: 7,
    name: "Handcrafted Leather Wallet",
    price: 89.99,
    description: "This meticulously crafted leather wallet combines traditional craftsmanship with modern functionality. Made from vegetable-tanned full-grain leather, it features eight card slots, two currency compartments, and a dedicated ID window. The slim profile fits comfortably in pockets without sacrificing storage capacity. With proper care, this wallet will develop a unique patina over time, becoming more beautiful with age.",
    shortDescription: "Full-grain leather wallet with thoughtful organization and slim profile.",
    images: [
      "https://images.pexels.com/photos/2079175/pexels-photo-2079175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 3,
    featured: false,
    newArrival: false,
    onSale: false,
    inStock: true,
    colors: ["Brown", "Black", "Tan"],
    rating: 4.8,
    reviews: 74
  },
  {
    id: 8,
    name: "Smart Home Security Camera",
    price: 129.99,
    originalPrice: 159.99,
    description: "Monitor your home with clarity and confidence using our Smart Home Security Camera. Featuring 1080p HD video, night vision, and a 130° wide-angle lens, this camera captures detailed footage day or night. Motion detection with customizable zones sends alerts to your smartphone, while two-way audio allows you to communicate with visitors. Compatible with major smart home systems and includes free cloud storage for the past 24 hours of footage.",
    shortDescription: "HD security camera with night vision, motion detection, and smartphone alerts.",
    images: [
      "https://images.pexels.com/photos/3527578/pexels-photo-3527578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 5,
    featured: false,
    newArrival: false,
    onSale: true,
    inStock: true,
    colors: ["White", "Black"],
    rating: 4.5,
    reviews: 102
  },
  {
    id: 9,
    name: "Handwoven Cotton Throw Blanket",
    price: 119.99,
    description: "Add texture and warmth to any space with our Handwoven Cotton Throw Blanket. Artisans meticulously craft each blanket on traditional looms using 100% long-staple cotton. The intricate geometric pattern and fringed edges provide visual interest, while the medium weight makes it perfect for year-round use. Drape it over a sofa, chair, or bed for an instant touch of artisanal elegance.",
    shortDescription: "Artisan-woven cotton blanket with geometric pattern and fringed edges.",
    images: [
      "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 2,
    featured: true,
    newArrival: false,
    onSale: false,
    inStock: true,
    colors: ["Indigo", "Terracotta", "Natural", "Sage"],
    rating: 4.6,
    reviews: 57
  },
  {
    id: 10,
    name: "Fitness Activity Tracker",
    price: 149.99,
    description: "Take control of your health and fitness journey with our comprehensive Activity Tracker. This sleek wearable monitors heart rate, steps, distance, calories burned, and sleep quality. The waterproof design allows for swimming and showering without removal, while the 7-day battery life minimizes charging interruptions. The companion app provides detailed insights and personalized recommendations to help you reach your wellness goals.",
    shortDescription: "Waterproof fitness tracker with heart rate monitoring and 7-day battery life.",
    images: [
      "https://images.pexels.com/photos/4429141/pexels-photo-4429141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 5,
    featured: true,
    newArrival: true,
    onSale: false,
    inStock: true,
    colors: ["Black", "Navy", "Coral", "Mint"],
    rating: 4.4,
    reviews: 186
  },
  {
    id: 11,
    name: "Premium Leather Belt",
    price: 69.99,
    description: "Crafted from full-grain Italian leather, this belt combines timeless style with exceptional durability. The sleek buckle adds a modern touch to the classic design, while the precision stitching ensures longevity. Available in multiple colors to complement any wardrobe, this versatile accessory elevates both casual and formal outfits.",
    shortDescription: "Full-grain Italian leather belt with modern buckle and precision stitching.",
    images: [
      "https://images.pexels.com/photos/3374942/pexels-photo-3374942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 1,
    featured: false,
    newArrival: false,
    onSale: false,
    inStock: true,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["32", "34", "36", "38", "40", "42"],
    rating: 4.6,
    reviews: 53
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    originalPrice: 119.99,
    description: "Experience impressive sound in a compact package with our Portable Bluetooth Speaker. Featuring 360° sound technology and passive bass radiators, it delivers rich audio from any angle. The durable, waterproof design makes it perfect for outdoor adventures, while the 12-hour battery life keeps the music playing all day. Easily connects to devices via Bluetooth 5.0 and includes a built-in microphone for hands-free calling.",
    shortDescription: "Waterproof Bluetooth speaker with 360° sound and 12-hour battery life.",
    images: [
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: 5,
    featured: false,
    newArrival: false,
    onSale: true,
    inStock: true,
    colors: ["Black", "Blue", "Red", "Gray"],
    rating: 4.5,
    reviews: 128
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: number, limit = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

export const getNewArrivals = (limit = 4): Product[] => {
  return products
    .filter(product => product.newArrival)
    .slice(0, limit);
};

export const getOnSaleProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.onSale)
    .slice(0, limit);
};