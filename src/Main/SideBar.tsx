import React, { useEffect } from "react";
import { css } from "@emotion/react";
import CustomLinkComponent from "./CustomLinkComponent";

function SideBar() {
   return (
      <nav
         css={css`
            display: flex;
            flex-grow: 0.4;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 40px;
            background-color: #fbeaff;
            min-height: 100vh;
         `}
      >
         <div
            css={css`
               display: flex;
               flex-direction: column;
               width: 100%;
               justify-content: flex-start;
            `}
         >
            <CustomLinkComponent to="/ItemList">리스트</CustomLinkComponent>
            <CustomLinkComponent to="/bucket">장바구니</CustomLinkComponent>
         </div>
      </nav>
   );
}

export default SideBar;
