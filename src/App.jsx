import Proudcts from "./Proudcts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Product";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Proudcts} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
