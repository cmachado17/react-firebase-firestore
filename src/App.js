import React, { Fragment } from "react";
import "./App.css";
import Links from "./components/Links";
import LinkForm from "./components/LinkForm";

function App() {
  return (
    <Fragment>
      <LinkForm />
      <Links />
    </Fragment>
  );
}

export default App;
