import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Pages/home'
import Details from "../Pages/details";
import Layout from "../Layout/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
