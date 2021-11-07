import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { ProductType } from "../types/types";
import ItemContent from "./ItemContent";
import Paging from "./Paging";

function BucketList() {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemList, setItemList] = useState<ProductType[]>([]);
   const [paging, setPaging] = useState({
      totalCount: 0,
      pageCount: 0,
      start: 0,
      number: 0,
      startPage: 0,
      endPage: 0,
      pageBlock: 3,
      pageSize: 10,
   });
   const [pageBloks, setPageBlocks] = useState<any[]>([]);
   const [searchValue, setSearchValue] = useState("");
   const searchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
   };

   useEffect(() => {
      let TotalBucket: ProductType[] = JSON.parse(
         localStorage.getItem("bucket") as string
      );
      let data: ProductType[] = [];
      if (!TotalBucket) {
         TotalBucket = [];
      } else {
         data = [...TotalBucket].slice(
            currentPage === 1 ? 0 : currentPage * 10 - 10,
            currentPage * 10
         );
      }
      const totalCount = TotalBucket.length;
      let maxPage = Math.floor(totalCount / 10);
      if (maxPage % 10 > 0) maxPage = maxPage + 1;
      console.log("여기탐??");
      console.log(maxPage, currentPage);
      let pageCount = maxPage;
      const start = currentPage === 1 ? 0 : (currentPage - 1) * paging.pageSize;
      const number = totalCount - (currentPage - 1) * paging.pageSize;
      let startPage = Math.floor(currentPage / paging.pageBlock);
      startPage = startPage * paging.pageBlock + 1;
      if (currentPage % paging.pageBlock === 0) startPage -= paging.pageBlock;
      let endPage = startPage + paging.pageBlock - 1;
      if (endPage > pageCount) endPage = pageCount;
      endPage = Math.floor(endPage);
      setPaging((prev) => ({
         ...prev,
         endPage,
         number,
         pageCount,
         start,
         startPage,
         totalCount,
      }));

      setItemList(data);

      const pageBlockArray: any[] = [];
      for (let i = paging.startPage; i <= paging.endPage; i++) {
         pageBlockArray.push(i);
      }

      if (data.length === 0) {
         setPageBlocks([]);
      } else {
         setPageBlocks(pageBlockArray);
      }
   }, [
      currentPage,
      paging.pageSize,
      paging.pageBlock,
      paging.startPage,
      paging.endPage,
      localStorage.getItem("bucket"),
   ]);

   const pageHandler = (
      where: "first" | "last" | "plus" | "minus" | "switchPage",
      pageNum?: number
   ) => {
      if (where === "first") {
         setCurrentPage(1);
      } else if (where === "last") {
         if (paging.pageCount === 0) {
            return;
         }
         setCurrentPage(paging.pageCount);
      } else if (where === "plus") {
         if (paging.pageCount === 0) {
            return;
         }
         currentPage === paging.pageCount
            ? setCurrentPage(currentPage)
            : setCurrentPage(currentPage + 1);
      } else if (where === "minus") {
         currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
      } else if (where === "switchPage") {
         if (pageNum) setCurrentPage(pageNum);
      }
   };
   return (
      <div
         css={css`
            display: flex;
            flex-direction: column;
            flex: 0.9;
         `}
      >
         장바구니 목록
         <div
            css={css`
               align-self: flex-end;
            `}
         >
            <label
               css={css`
                  margin-right: 12px;
               `}
            >
               검색
               <input type="text" value={searchValue} onChange={searchValueHandler} />
            </label>
         </div>
         <div
            css={css`
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               flex: 1;
               justify-content: center;
               max-height: 100%;
               padding-top: 15px;
               margin-bottom: 20px;
            `}
         >
            {itemList.map((item, index) => {
               if (searchValue !== "") {
                  if (item.name.includes(searchValue)) {
                     return (
                        <ItemContent
                           setItemList={setItemList}
                           isBucket
                           index={index}
                           key={uuid()}
                           {...item}
                        />
                     );
                  }
               } else {
                  return (
                     <ItemContent
                        setItemList={setItemList}
                        isBucket
                        index={index}
                        key={uuid()}
                        {...item}
                     />
                  );
               }
            })}
         </div>
         <div
            css={css`
               margin-bottom: 20px;
            `}
         >
            <Paging
               currentPage={currentPage}
               pageBloks={pageBloks}
               pageHandler={pageHandler}
            />
         </div>
      </div>
   );
}

export default BucketList;
