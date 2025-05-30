import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layouts/DefaultLayout";
import Aboutus from "./pages/Aboutus";
import List from "./pages/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
