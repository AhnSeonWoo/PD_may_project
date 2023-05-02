import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { FAQ } from "./components/FAQ";
import { QNA } from "./components/QNA";
import "./App.css";
import { H1 } from "./styled";
import { Navbar } from "./components/Navbar";

function App() {
  const [header, setHeader] = useState<string>("고객지원");
  const [clicked, setClicked] = useState<number>(1);
  return (
    <div className="App">
      <H1>{header}</H1>
      <hr />
      <hr />
      <Navbar clicked={clicked} setHeader={setHeader} setClicked={setClicked} />
      {clicked === 1 ? <FAQ></FAQ> : false}
      {clicked === 2 ? <QNA></QNA> : false}
    </div>
  );
}

export default App;
