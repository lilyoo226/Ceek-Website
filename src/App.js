import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Copyright from "./components/Copyright";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Preloader/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/article" element={<Article/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/terms" element={<Terms/>}/>
    </Routes>
    <Footer/>
      <Copyright/>
    </BrowserRouter>
  );
}

export default App;
