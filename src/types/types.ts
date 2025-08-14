export interface Product {
  id: number;
  title: string;
  stock: number;
  price: number;
  details: string;
  picture: string | null;
  category: string;
  unit?: string;
}

export interface ObjProductsCategories {
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
  refreshProducts: () => void;
  filteredProducts: Product[];
  filters: Filter;
  message: string;
  categories: Category[];
  changeFilterCategory: (category: string) => void;
  changeFilterPrice: ( min: number, max: number ) => void
  productsFound: Product[];
}

export interface PropsSectionFilters {
  findProduct: (title: string) => void;
  categories: Category[];
  refreshProducts: () => void;
  filters: Filter;
  changeFilterCategory: (category: string) => void;
  changeFilterPrice: ( min: number, max: number ) => void;
  message: string;
  quantityProducts: number;
}

export interface UseCartTypes {
  localProducts: Product[];
  deleteProduct: (id: number) => void;
  buyProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  message: string;
  addUnit: (unit: string, id: number) => void;
  buyAllProducts: () => void;
  redirectCart: string
}


export interface PropsListProducts {
  products: Product[];
  productsFound: Product[];
}

export interface PropsCardCart {
  product: Product;
  deleteProduct: (id: number) => void;
  addUnit: (unit: string, id: number) => void;
}