export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Apparel",
    image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Premium clothing for everyday comfort and style."
  },
  {
    id: 2,
    name: "Home Goods",
    image: "https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Elevate your living space with our curated home collection."
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Thoughtfully designed accessories to complement your lifestyle."
  },
  {
    id: 4,
    name: "Watches",
    image: "https://images.pexels.com/photos/9982456/pexels-photo-9982456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Timeless watches combining precision and elegant design."
  },
  {
    id: 5,
    name: "Electronics",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Cutting-edge technology with premium build quality."
  }
];

export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};