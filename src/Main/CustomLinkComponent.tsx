import { css } from "@emotion/react";
import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { C2C73D2, CFBEAFF } from "../utils/Colors";
import { CustomLinkProps } from "./Types/type";

function CustomLinkComponent({ children, to }: CustomLinkProps) {
   const resolve = useResolvedPath(to);
   const isMatch = useMatch({ path: resolve.pathname, end: true });

   return (
      <Link
         css={css`
            all: unset;
            cursor: pointer;
            background-color: ${isMatch ? C2C73D2 : CFBEAFF};
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 500;
         `}
         to={to}
      >
         {children}
      </Link>
   );
}

export default CustomLinkComponent;
