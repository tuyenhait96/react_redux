import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./App.css";
import MenuContainer from "./component/Menu/MenuContainer";
import ProductList from "./component/ProductList/ProductList";
import { dataRoute } from "./routes";
import ProductLstPage from "./pages/ProductListPage/ProductLstPage";

function App() {
  return (
    <Router className="App">
      {/* <!-- Menu --> */}
      <MenuContainer />
      <div className="container">
        {/* ProductLstPage */}
        {/* <ProductLstPage /> */}
        {/* showRoute */}
        {showContentMenu(dataRoute)}
      </div>
    </Router>
  );
}

const showContentMenu = (route) => {
  let result = null;
  if (route.length > 0) {
    result = route.map((item, i) => {
      return (
        <Route exact={item.exact} path={item.path} key={i}>
          {item.main}
        </Route>
      );
    });
  }
  return <Switch>{result}</Switch>;
};

export default App;
