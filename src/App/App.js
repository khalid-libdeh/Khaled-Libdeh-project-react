import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from '../Pages/home'
import Details from "../Pages/details";
import Layout from "../Layout/layout";
import Favourites from "../Favourites/favourites";
import DarkModeProvider from "../Dark Mode/darkModeProvider";

function App() {
  return (

      <DarkModeProvider>
        <Favourites>
          <BrowserRouter>
          <Routes>
            <Route path="/Khaled-Libdeh-project-react" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="details/:id" element={<Details />} />
            </Route>
          </Routes>
          </BrowserRouter>
        </Favourites>
      </DarkModeProvider>

  );
}

export default App;
