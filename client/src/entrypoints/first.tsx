/**
 * In webpack terminology the 'entry point'
 * of the First SPA.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ComponentA } from "../components/ComponentA";
import { ComponentB } from "../components/ComponentB";
import { Overview } from "../components/Overview";
import { NameLookup } from "../components/NameLookup";
import { ErrorBoundary } from "../components/ErrorBoundary";
import * as SPAs from "../../config/spa.config";

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <Helmet title={SPAs.appTitle} />
        <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}>
          <h2>Welcome to {SPAs.appTitle}</h2>
        </div>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/a" component={ComponentA} />
          <Route path="/b" component={ComponentB} />
          <Route path="/namelookup" component={NameLookup} />
          <Route component={Overview} />
        </Switch>
    </ErrorBoundary>
  </Router>,
  document.getElementById("react-root")
);
