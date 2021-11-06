// component interface
export interface CategoryListProps {
   item: Categorys;
   setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
   selectedCategory: number;
}
export interface CategoryItemListProps {
   categoryId: number;
}
export interface PagingProps {
   pageHandler: (
      where: "first" | "last" | "plus" | "minus" | "switchPage",
      pageNum?: number | undefined
   ) => void;
   pageBloks: any[];
   currentPage: number;
}
// state Type
export type Categorys = { id: number; name: string };
export type ProductType = {
   name: string;
   brand: Categorys;
   mainImage: string;
   productUrl: string;
   originalPrice: number;
   ssomeePrice: number;
   currentOrderLimit: number;
   hightlight: string;
   prefix: string;
   shop: Categorys;
   soldOut: boolean;
   startDate: string;
   endDate: string;
};
export type CategoryItemsType = {
   category: Categorys;
   maxPage: number;
   productCount: number;
   products: ProductType[];
};
