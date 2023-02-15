import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import ProductList from "../../pages/ProductList";
import Register from "../../pages/Register";
import SignIn from "../../pages/SignIn";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
