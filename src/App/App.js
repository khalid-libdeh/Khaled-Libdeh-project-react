import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Pages/home'
import Details from "../Pages/details";
import Layout from "../Layout/layout";
import Favourites from "../Favourites/favourites";

function App() {
  return (
    <BrowserRouter>
      <Favourites>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
      </Favourites>
    </BrowserRouter >
  );
}

export default App;
