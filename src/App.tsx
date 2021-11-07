import * as React from "react";
import { css } from "@emotion/react";

import {
   Routes,
   Route,
   //    Outlet,
   //    useNavigate,
   //    NavigateFunction,
   //    useLocation,
   //    useParams,
   //    useMatch,
   BrowserRouter,
} from "react-router-dom";
import "./Css.css";
import ItemList from "./ItemList/itemListScreens/ItemList";
import SideBar from "./Main/SideBar";
import Header from "./Main/Header";

const App = () => {
   return (
      <BrowserRouter>
         <div
            css={css`
               flex-direction: column;
               display: flex;
               flex: 1;
            `}
         >
            <Header />
            <div
               css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  flex: 1;
               `}
            >
               <SideBar />

               <main
                  css={css`
                     display: flex;
                     flex: 8;
                     height: 100vh;
                  `}
               >
                  <Routes>
                     <Route path="/itemList" element={<ItemList whatList="apiList" />} />
                     <Route path="/bucket" element={<ItemList whatList="bucketList" />} />
                  </Routes>
               </main>
            </div>
         </div>
      </BrowserRouter>
   );
};
export default App;
// const ChildHome = (props: any) => {
//    const location = useLocation();
//    // 파라미터를 가져온다

//    const getParam = useParams();
//    // :id를 가져온다.

//    const isMatch = useMatch({ path: "Home/ChildHome/child", end: true });
//    // 현재 주소와 매치가되면 값을 반환

//    console.log(location, getParam, isMatch);

//    return (
//       <div
//          css={css`
//             border: 1px solid black;
//          `}
//       >
//          asds
//       </div>
//    );
// };
// function Home(props: any) {
//    const navigater: NavigateFunction = useNavigate();

//    React.useEffect(() => {
//       navigater("/Home");
//    }, []);
//    return (
//       <div>
//          <h2>Home</h2>
//          <Outlet />
//          {/* 자식 라우트의 값을 */}

//          <button onClick={() => navigater("ChildHome/child", { state: { param: "파라미터" } })}>
//             title="asdadsasdasasd"
//          </button>
//       </div>
//    );
// }
