import { css } from "@emotion/react";
import React from "react";
import { ProductType } from "../types/types";

function ItemContent({
   brand,
   currentOrderLimit,
   endDate,
   hightlight,
   mainImage,
   name,
   originalPrice,
   prefix,
   productUrl,
   shop,
   soldOut,
   ssomeePrice,
   startDate,
}: ProductType) {
   return (
      <div
         css={css`
            border: 1px solid black;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            width: 18%;

            display: flex;

            flex-direction: column; ;
         `}
      >
         {brand.name}

         <img
            onClick={() => window.open(productUrl)}
            alt="상품이미지"
            css={css`
               width: 100%;
               height: 60%;
               cursor: pointer;
            `}
            src={mainImage}
         />
         <div
            css={css`
               display: -webkit-box;
               display: -ms-flexbox;
               display: box;
               margin-top: 1px;
               max-height: 80px;
               overflow: hidden;
               vertical-align: top;
               text-overflow: ellipsis;
               word-break: break-all;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
               text-align: center;
               font-size: 0.9rem;
            `}
         >
            {name}
         </div>
         <div
            css={css`
               font-size: 0.9rem;
               text-decoration: line-through;
               text-decoration-color: red;
            `}
         >
            원가: {originalPrice.toLocaleString()}원
         </div>
         <div
            css={css`
               font-size: 0.9rem;
            `}
         >
            쏘미에서 살경우 : {ssomeePrice.toLocaleString()}원
         </div>
         <div
            css={css`
               font-size: 0.9rem;
            `}
         >
            재고 {!soldOut ? "있음" : "없음"}
         </div>
         <div
            css={css`
               font-size: 0.9rem;
            `}
         >
            {shop.name}
         </div>
      </div>
   );
}

export default ItemContent;
