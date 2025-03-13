import { url_api } from "@/utils/url_api";

export const getProducts = async () => {
  const response = await fetch(`${url_api}/products`);
  const result = await response.json();
  return result;
};

// para cart y searchProduct
export const getUniqueProduct = async (id: string | string[]) => {
  const response = await fetch(`${url_api}/products/product/${id}`);
  const result = await response.json();
  return result.product[0];
};
