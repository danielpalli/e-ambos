interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: ValidGenders;
}

type ValidSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type ValidTypes = 'renera' | 'pantalon' | 'gorro' | 'guardapolvo';
type ValidGenders = 'hombre' | 'mujer' | 'unisex';

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      "description": "Pantalon de jean",
      "images": [
        "https://via.placeholder.com/150"
      ],
      "inStock": 10,
      "price": 1500,
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "slug": "pantalon-jean",
      "tags": ["pantalon", "jean", "hombre"],
      "title": "Pantalon de jean",
      "type": "pantalon",
      "gender": "hombre", 
    },
  ]
}