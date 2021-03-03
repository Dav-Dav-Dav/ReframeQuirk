import "./styles.css";
import data from "./data";

// 1. Mapping over data
export default function App() {
  const reframeData = data.map((x, i) => <Hello key={i} reframeNumber={i} />);

  // 2. Organising mapped over data onto the page
  function Hello(props) {
    return (
      <div>
        <p>{props.reframeNumber}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Reframe</h1>
      {reframeData}
    </div>
  );
}
