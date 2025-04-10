import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({ name: "admin" });
  }, []);

  function login(email, password) {
    // Login fake
    if (email === "admin@admin.com" && password === "admin") {
      const fakeToken = "meu.token.fake";
      localStorage.setItem("token", fakeToken);
      setUser({ name: "admin" });
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
