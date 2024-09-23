import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>}></Route>
      <Route
        path="/user-profile"
        element={<span>User Profile Page</span>}
      ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

export default AppRoutes;
