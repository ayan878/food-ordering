import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./components/pages/HomePage";



function AppRoutes() {
 
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>User Profile Page</span>} />
      <Route
        path="*"
        element={
          <span>
            <Navigate to="/" />
          </span>
        }
      />
      <Route path="/" element={<span>HomePage</span>} />
    </Routes>
  );
}

export default AppRoutes;
