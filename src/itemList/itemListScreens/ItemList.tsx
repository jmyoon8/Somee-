import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Categorys } from "../types/types";
import CategoryList from "../itemListComponents/CategoryList";
import CategoryItemList from "../itemListComponents/CategoryItemList";
import { useDispatch } from "react-redux";
import { getCategorys } from "../../Redux/actions";
import BucketList from "../itemListComponents/BucketList";
import { Outlet, useMatch } from "react-router";

interface ItemListProps {
   whatList: "apiList" | "bucketList";
}

function ItemList({ whatList }: ItemListProps) {
   const [apiList, setApiList] = useState<Categorys[]>([]);
   const [selectedCategory, setSelectedCategory] = useState(-1);
   const dispatch = useDispatch();
   const isMatchChild = useMatch("/itemList/detail");
   useEffect(() => {
      const getData: Promise<any> = dispatch(getCategorys());
      getData.then((item) => setApiList(item.value));
   }, [dispatch]);
   useEffect(() => {
      console.log(isMatchChild);
   }, [isMatchChild]);
   return (
      <>
         {isMatchChild ? (
            <Outlet />
         ) : (
            <div
               css={css`
                  /* border: 3px solid black; */
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  min-height: 100vh;
               `}
            >
               <div
                  css={css`
                     display: flex;
                     flex-direction: row;
                     justify-content: center;
                     align-items: center;
                     flex-wrap: wrap;
                  `}
               >
                  {whatList === "apiList" &&
                     apiList.map(({ id, name }) => (
                        <CategoryList
                           setSelectedCategory={setSelectedCategory}
                           selectedCategory={selectedCategory}
                           key={id}
                           item={{ id, name }}
                        />
                     ))}
               </div>
               <div
                  css={css`
                     min-height: 100vh;
                  `}
               >
                  {whatList === "apiList" && (
                     <CategoryItemList categoryId={selectedCategory} />
                  )}
                  {whatList === "bucketList" && <BucketList />}
               </div>
            </div>
         )}
      </>
   );
}

export default ItemList;
