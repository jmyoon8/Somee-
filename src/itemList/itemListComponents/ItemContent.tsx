import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { ProductType } from "../types/types";

function ItemContent(
   props: ProductType & {
      isBucket?: boolean;
      index?: number;
      setItemList?: React.Dispatch<React.SetStateAction<ProductType[]>>;
   }
) {
   const {
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
      isBucket,
      index,
      setItemList,
   }: ProductType & {
      isBucket?: boolean;
      index?: number;
      setItemList?: React.Dispatch<React.SetStateAction<ProductType[]>>;
   } = props;
   const navigater: NavigateFunction = useNavigate();
   const addBucket = () => {
      let getBucket: ProductType[] = JSON.parse(localStorage.getItem("bucket") as string);
      if (getBucket) {
         getBucket.push(props);
         localStorage.setItem("bucket", JSON.stringify(getBucket));
      } else {
         localStorage.setItem("bucket", JSON.stringify([props]));
      }
   };
   const deleteBucket = (whatFunction: "delete" | "buy") => {
      console.log(index);
      let getBucket: ProductType[] = JSON.parse(localStorage.getItem("bucket") as string);
      if (index !== undefined) getBucket.splice(index, 1);
      if (setItemList) {
         setItemList(getBucket);
         localStorage.setItem("bucket", JSON.stringify(getBucket));
      }
      alert(
         whatFunction === "buy"
            ? "해당 제품을 구입하였습니다."
            : "해당 제품을 장바구니에서 제거했습니다."
      );
   };

   const goToDetailPage = () => {
      navigater("detail", { state: { prefix } });
   };

   return (
      <>
         <div
            css={css`
               border: 1px solid black;
               margin-left: 10px;
               margin-right: 10px;
               margin-bottom: 10px;
               width: 18%;
               display: flex;
               min-height: 45%;
               max-height: 50%;
               flex-direction: column;
               justify-content: space-between;
               @media (max-width: 500px) {
                  height: 30%;
               }
            `}
         >
            {brand.name}

            <img
               onClick={() => window.open(productUrl)}
               alt="상품이미지"
               css={css`
                  width: 100%;
                  height: 40%;
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
            {isBucket ? (
               <>
                  <button
                     onClick={() => deleteBucket("delete")}
                     css={css`
                        font-size: 0.9rem;
                     `}
                  >
                     장바구니 제거
                  </button>
                  <button
                     onClick={() => deleteBucket("buy")}
                     css={css`
                        font-size: 0.9rem;
                     `}
                  >
                     구입하기
                  </button>
               </>
            ) : (
               <>
                  <button
                     onClick={addBucket}
                     css={css`
                        font-size: 0.9rem;
                     `}
                  >
                     장바구니 추가
                  </button>
                  <button
                     onClick={goToDetailPage}
                     css={css`
                        font-size: 0.9rem;
                     `}
                  >
                     상새페이지
                  </button>
               </>
            )}
         </div>
      </>
   );
}

export default ItemContent;
