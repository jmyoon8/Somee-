import { css } from "@emotion/react";
import React from "react";
import { PagingProps } from "../types/types";

function Paging({ pageHandler, pageBloks, currentPage }: PagingProps) {
   return (
      <div
         css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
         `}
      >
         <button onClick={() => pageHandler("first")}>처음으로</button>
         <div
            css={css`
               font-size: 1.5rem;
               cursor: pointer;
               margin-left: 10px;
               margin-right: 10px;
            `}
            onClick={() => pageHandler("minus")}
         >
            {"<"}
         </div>
         {pageBloks.map((item, index) => {
            if (item === currentPage) {
               return (
                  <div
                     onClick={() => pageHandler("switchPage", item)}
                     css={css`
                        font-size: 2rem;
                        cursor: pointer;
                        margin-left: 10px;
                        margin-right: 10px;
                     `}
                     key={item}
                  >
                     {item}
                  </div>
               );
            }
            return (
               <div
                  onClick={() => pageHandler("switchPage", item)}
                  css={css`
                     font-size: 1.3rem;
                     cursor: pointer;
                     margin-left: 10px;
                     margin-right: 10px;
                  `}
                  key={item}
               >
                  {item}
               </div>
            );
         })}
         <div
            css={css`
               font-size: 1.5rem;
               cursor: pointer;
               margin-left: 10px;
               margin-right: 10px;
            `}
            onClick={() => pageHandler("plus")}
         >
            {">"}
         </div>
         <button onClick={() => pageHandler("last")}>마지막으로</button>
      </div>
   );
}

export default Paging;
