import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white fixed top-0 left-0 p-4">
      <h2 className="text-2xl font-bold mb-6">Automate Flow 🤖</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/workflows" className="hover:text-blue-400">Workflows</Link>
        <Link to="/executions" className="hover:text-blue-400">Execuções</Link>
      </nav>
    </aside>
  );
}
