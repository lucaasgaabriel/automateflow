// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
