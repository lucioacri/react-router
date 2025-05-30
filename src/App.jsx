import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/aboutus" element={<Aboutus />} /> */}
            {/* <Route path="/list" element={<List />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
