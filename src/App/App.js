import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Pages/home'
import Details from "../Pages/details";
import Layout from "../Layout/layout";
import Favourites from "../Favourites/favourites";
import DarkModeProvider from "../Dark Mode/darkModeProvider";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Favourites>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="details/:id" element={<Details />} />
            </Route>
          </Routes>
        </Favourites>
      </DarkModeProvider>
    </BrowserRouter >
  );
}

export default App;
