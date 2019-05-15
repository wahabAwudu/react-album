import React from "react";
import "./App.css";
import Provider from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import PhotoDetail from "./components/PhotoDetail";
import AddPhoto from "./components/AddPhoto";

const App = () => {
  return (
    <div className="App">
      <Provider>
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
