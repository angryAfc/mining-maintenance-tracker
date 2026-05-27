import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Issues from "./pages/Issues";
import "./App.css";

type Page = "dashboard" | "equipment" | "issues";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mining Operations Issue & Maintenance Tracker</h1>
        <p>
          A software engineering portfolio project for tracking equipment
          issues, maintenance tasks, and operational risks.
        </p>
      </header>

      <nav className="nav">
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("equipment")}>
          Equipment List
        </button>
        <button onClick={() => setCurrentPage("issues")}>Issue Tracker</button>
      </nav>

      <main className="content">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "equipment" && <Equipment />}
        {currentPage === "issues" && <Issues />}
      </main>
    </div>
  );
}

export default App;