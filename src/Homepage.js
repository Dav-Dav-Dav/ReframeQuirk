import React from "react";
import data from "./data";
import { Link } from "react-router-dom";

export default function Homepage() {
  const reframeData = data.map((x, i) => <Hello key={i} reframeNumber={i} />);

  // 2. Organising mapped over data onto the page
  function Hello(props) {
    return (
      <div>
        <Link to={`/${props.reframeNumber}`}>{props.reframeNumber}</Link>
        <br />
        <br />
        <br />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Reframe</h1>
      <ul>{reframeData}</ul>
    </div>
  );
}
