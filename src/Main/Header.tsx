import React from "react";
import { css } from "@emotion/react";
import { ReactComponent as Logo } from "./images/headerArrow.svg";

const Header = () => {
   return (
      <header className="custom-shape-divider-top-1636166233">
         <Logo />
         <div
            css={css`
               position: absolute;
               top: 0px;
               right: 0px;
               padding-right: 12px;
               font-size: 1.4rem;
               font-weight: bold;
               color: #4b4453;
            `}
         >
            소비의 미학 과제
         </div>
      </header>
   );
};

export default Header;
