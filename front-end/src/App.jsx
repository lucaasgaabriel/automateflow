import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Workflows from "./pages/Workflows";
import Executions from "./pages/Executions";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout><Dashboard /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/workflows"
          element={
            <PrivateRoute>
              <Layout><Workflows /></Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/executions"
          element={
            <PrivateRoute>
              <Layout><Executions /></Layout>
            </PrivateRoute>
          }
        />
        {/* rota catch-all pra redirecionar pro login se cair em página inválida */}
        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
