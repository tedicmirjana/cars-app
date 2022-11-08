import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCars from "./pages/AppCars";

export default function Router() {
    return (
      <Switch>
        <Route path="/cars">
            <AppCars/>
        </Route>
      </Switch>
    )
    }