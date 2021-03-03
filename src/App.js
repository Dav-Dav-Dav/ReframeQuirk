import "./styles.css";
import Homepage from "./Homepage";
import { Switch, Route } from "react-router-dom";

// 1. Mapping over data
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
