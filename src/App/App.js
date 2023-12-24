import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home/home'
import Layout from "../Layout/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
