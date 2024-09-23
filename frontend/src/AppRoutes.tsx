import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>}></Route>
      <Route
        path="/user-profile"
        element={<span>User Profile Page</span>}
      ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

export default AppRoutes;
