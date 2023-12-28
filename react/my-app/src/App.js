import React from "react";
import {Routes, Route, Link} from "react-router-dom"

import Home from "./pages/Home" //주소를 받아오는 곳
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/Input1";
import Loop from "./pages/Loop";
import Sync from "./pages/Sync";
import SyncJava from "./pages/SyncJava"
import If from "./pages/If"
import Loop2 from "./pages/Loop2"

function App() {
  return ( //아래 들어가 있는 html이 jsx태그 이다
    //./pages/Home에서 출력하는 부분
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | {" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | {" "}
        <Link to="/loop">Loop</Link> | <Link to="/sync">Sync</Link> |{" "}
        <Link to="/syncJava">SyncJava</Link> | <Link to="/if">If</Link> |{" "}
        <Link to="/loop2">Loop2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input" element={<Input />}/>
        <Route path="/loop" element={<Loop />}/>
        <Route path="/sync" element={<Sync />}/>
        <Route path="/syncJava" element={<SyncJava />}/>
        <Route path="/if" element={<If />}/>
        <Route path="/loop2" element={<Loop2 />}/>
      </Routes>

    </div>
  );
}

export default App;
