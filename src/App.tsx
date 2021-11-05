/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
    Routes,
    Route,
    Outlet,
    Link,
    useNavigate,
    NavigateFunction,
    BrowserRouter as Router,
    useSearchParams,
    useLocation,
    useParams,
    useMatch,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/Home" element={<Home />}>
                        <Route path="ChildHome/:id" element={<ChildHome />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <Outlet />
                {/* 자식 라우터의 element를 가져온다. */}
            </nav>
            <hr />
        </div>
    );
}

const ChildHome = (props: any) => {
    const [param, setParam] = useSearchParams();

    const location = useLocation();
    // 파라미터를 가져온다

    const getParam = useParams();
    // :id를 가져온다.

    const isMatch = useMatch({ path: "Home/ChildHome/child", end: true });
    // 현재 주소와 매치가되면 값을 반환

    console.log(location, getParam, isMatch);

    return <div style={{ border: "1 solid" }}>ChildHqwewqeome</div>;
};
function Home(props: any) {
    const navigater: NavigateFunction = useNavigate();

    React.useEffect(() => {
        navigater("/Home");
    }, []);
    return (
        <div>
            <h2>Home</h2>
            <Outlet />
            {/* 자식 라우트의 값을 */}
            <button onClick={() => navigater("ChildHome/child", { state: { param: "파라미터" } })}>
                title="asdadsasdasasd"
            </button>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
