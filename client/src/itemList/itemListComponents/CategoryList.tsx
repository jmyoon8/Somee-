import { css } from "@emotion/react";
import React from "react";
import { CD3E9F3, CFFF } from "../../utils/Colors";
import { CategoryListProps } from "../types/types";

function CategoryList({
   item: { id, name },
   selectedCategory,
   setSelectedCategory,
}: CategoryListProps) {
   return (
      <div
         onClick={() => setSelectedCategory(id)}
         css={css`
            @media (max-width: 500px) {
               padding-left: 4px;
               padding-right: 4px;
            }
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 5px;
            padding-bottom: 5px;
            flex-grow: 1;
            min-height: 40px;
            background-color: ${selectedCategory === id ? CD3E9F3 : CFFF};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            user-select: none;
            cursor: pointer;
         `}
      >
         {name}
      </div>
   );
}

export default CategoryList;
