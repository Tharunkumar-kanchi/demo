import React from "react";
import "./styles/style.css";
import { Route } from "react-router-dom";
import Calculator from "./calculator/calculator";
import Movies from "./movies/movies.jsx";
import parentToChildComponent from "./parentToChild/parentToChildComponent.jsx";
import ChildToParentComponent from "./parentToChild/childToParentComponent.jsx";
import childToChildComponent from "./parentToChild/childToChild.jsx";
import events from "./Events/event.jsx";
import Counters from "./components/counters.jsx";
import UserDetails from "./CrudMethods/login.jsx";
import GetApiCall from "./getApiDemo/getApiDemo.jsx";
//import Slider from "./slider/slider.jsx";

export function CustomRouter() {
  return (
    <div>
      <Route path="/Calculator" component={Calculator} />
      <Route path="/Movies" component={Movies} />
      <Route
        path="/parentToChildComponent"
        component={parentToChildComponent}
      />
      <Route
        path="/ChildToParentComponent"
        component={ChildToParentComponent}
      />
      <Route path="/childToChildComponent" component={childToChildComponent} />
      <Route path="/events" component={events} />
      <Route path="/Counters" component={Counters} />
      <Route path="/Login" component={UserDetails} />
      <Route path="/get-Api" component={GetApiCall} />
      {/* <Route path="/slider" component={Slider} /> */}
    </div>
  );
}
