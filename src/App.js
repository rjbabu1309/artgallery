import 'bootstrap/dist/css/bootstrap.min.css';
import './components/utilities.css'



import { BrowserRouter, Routes, Route } from "react-router-dom";


import NoPage from "./components/pages/NoPage";
import Layout from "./components/Layout";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
