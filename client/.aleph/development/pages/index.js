var _s = $RefreshSig$();
import React, { useState, useEffect } from "../-/esm.sh/react@17.0.2.js";
export default function Home() {
    _s();
    // const version = useDeno(() => Deno.version.deno)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        getData();
    }, []);
    const getData = ()=>{
        fetch('http://localhost:3000/api/products').then((res)=>res.json()
        )// .then((data) => console.log(data))
        .then((data)=>setData(data.data)
        ).then(()=>setLoading(true)
        );
    // console.log(json);
    };
    return React.createElement("div", {
        className: "page",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 30
        }
    }, React.createElement("h1", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 31
        }
    }, "Hello world"), React.createElement("p", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 32
        }
    }, "Products: "), loading === false && React.createElement("p", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 34
        }
    }, "Loading..."), data.length > 0 && data.map((el, key)=>React.createElement("p", {
            key: el.id,
            __source: {
                fileName: "/pages/index.tsx",
                lineNumber: 38
            }
        }, el.name)
    ));
};
_s(Home, "e2WPURhZO+vgWkProC5DhPL24KA=");
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

//# sourceMappingURL=index.js.map