import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// pages
import HomePage from "./pages/HomePage";
import PhotoDetail from "./components/PhotoDetail";
import AddPhoto from "./components/AddPhoto";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add-new" component={AddPhoto} />
            <Route exact path="/:id" component={PhotoDetail} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
