export interface Product {
  id: number;
  title: string;
  stock: number;
  price: number;
  details: string;
  picture: string;
  category: string;
  unit?: string;
}

export interface ProductApi {
  categories: { id: number; category: string }[];
  products: Product[];
}

export interface Category {
  id: number;
  category: string;
}

export interface Price {
  id: number;
  min: number;
  max: number;
}

export interface PropsCardProduct {
  product: Product;
}

export interface PropsSlider {
  products: Product[];
}

export type Filter = {
  category?: string;
  price?: { min: number; max: number };
};

export interface UseProductTypes {
  findProduct: (title: string) => void;
  product: Product | null;
  refreshProducts: () => void;
  filteredProducts: Product[];
  filters: Filter;
  setFilters: (filters: Filter) => void;
  message: string;
  categories: Category[];
}

export interface UseCartTypes {
  localProducts: Product[];
  deleteProduct: (id: number) => void;
  buyProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  message: string;
  addUnit: (unit: string, id: number) => void;
  buyAllProducts: () => void;
}

export interface PropsSectionFilters {
  findProduct: (title: string) => void;
  categories: Category[];
  refreshProducts: () => void;
  filters: Filter;
  setFilters: (filters: Filter) => void;
  message: string;
  products: Product[];
}

export interface PropsSectionProducts {
  products: Product[];
}

export interface PropsCardCart {
  product: Product;
  deleteProduct: (id: number) => void;
  addUnit: (unit: string, id: number) => void;
}