import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./MainData/MainData"
import Social from './Components/Social/Social';
import Topbar from './Components/Topbar/Topbar';
import FooterFab from './Components/FooterFab/FooterFab'
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        {
          routes.map(i => <Route key={i.id} path={i.slug} element={i.component} />)
        }
      </Routes>
      <Social />
      <FooterFab/>
    </BrowserRouter >
  );
}

export default App;
