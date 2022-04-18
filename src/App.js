import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PageNotFound from "./Shared/NotFoundPage/PageNotFound";
import About from "./Page/About/About";
import Blogs from "./Page/Blogs/Blogs";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import Inventory from "./Page/Inventory/Inventory";
import RequireAuth from "./Page/RequireAuth/RequuireAuth";
import Shipping from "./Page/Shipping/Shipping";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/shipping"
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
