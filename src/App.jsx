import React from "react";
import { Route, Routes } from "react-router-dom";
import Accordion from "./accordion";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
