import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Confirmation from "./routes/Confirmation";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/confirmation" element={<Confirmation/>}/>
      </Routes>
    </>
  );
}

export default App;
