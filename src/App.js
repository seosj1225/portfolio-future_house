import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Sub />} />
        {/* <Route path="/" element={<App />}>
          <Route index element={<Main />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
