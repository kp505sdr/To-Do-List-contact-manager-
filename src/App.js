import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactDetails from "./Component/ContactDetails";
import AddContact from "./Component/AddContact";
import EditContact from "./Component/EditContact";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ContactDetails} />
        <Route exact path="/addcontact" component={AddContact} />
        <Route exact path="/edit/:id" component={EditContact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
