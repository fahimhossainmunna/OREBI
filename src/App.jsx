import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Shop from "./components/page/Shop";
import Journal from "./components/page/Journal";
import Contacts from "./components/page/Contacts";
import Error from "./components/page/Error";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Journal" element={<Journal />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
