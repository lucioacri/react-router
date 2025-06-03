import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layouts/DefaultLayout";
import Aboutus from "./pages/Aboutus";
import List from "./pages/List";
import pages from "./data/pages";
import ComicDetail from "./components/ComicDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={pages.home()} element={<Homepage />} />
            <Route path={pages.aboutus()} element={<Aboutus />} />
            <Route path={pages.list()} element={<List />} />
            <Route path={pages.detail()} element={<ComicDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
