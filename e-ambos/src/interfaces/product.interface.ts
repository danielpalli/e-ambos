export interface Product {
  id?: string;
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

export type ValidSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ValidTypes = 'renera' | 'pantalon' | 'gorro' | 'guardapolvo';
export type ValidGenders = 'hombre' | 'mujer' | 'unisex';