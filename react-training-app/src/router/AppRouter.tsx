import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Items from "../pages/Items";
import About from "../pages/About";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/login" element={<Login />} />

        {/* protected route */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/items"
          element={
            <MainLayout>
              <Items />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
