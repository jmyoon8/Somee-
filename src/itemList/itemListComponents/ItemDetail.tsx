import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { useLocation } from "react-router";
import { getDetailItem } from "../../Redux/actions";

function ItemDetail() {
   const getLocation: { prefix: string } = useLocation().state as { prefix: string };
   const [detail, setDetail] = useState("");
   const dispatch = useDispatch();
   useEffect(() => {
      const getData: Promise<any> = dispatch(getDetailItem(getLocation.prefix));
      getData.then((item) => {
         setDetail(
            (item.value.description as string).replaceAll(
               "img",
               "img style='width: 50%;' "
            )
         );
      });
   }, [dispatch, getLocation.prefix]);

   return (
      <div
         css={css`
            border: 1px solid black;
            max-width: 100%;
            display: flex;
            flex-direction: column;
         `}
      >
         <div
            css={css`
               width: 80%;
            `}
         >
            {ReactHtmlParser(detail)}
         </div>
      </div>
   );
}

export default ItemDetail;
