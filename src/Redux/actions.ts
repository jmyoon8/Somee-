import { Categorys } from "../ItemList/types/types";
import { ApiInstance } from "../utils/AxiosInstance";
import { GET_CATEGORY_ITEMS } from "./actionTypes";

export function getCategorys(): any {
   return {
      type: GET_CATEGORY_ITEMS,
      payload: async () => {
         const data = await ApiInstance.get<Categorys[]>(`categories`);
         return data.data;
      },
   };
}
export function getCategoryItems(page: number, categoryID: number): any {
   return {
      type: GET_CATEGORY_ITEMS,
      payload: async () => {
         const data = await ApiInstance.get(
            `products/${categoryID}/${page}?order=date-desc`
         );
         return data.data;
      },
   };
}
