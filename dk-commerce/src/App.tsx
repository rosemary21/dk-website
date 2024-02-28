import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
