import "./styles/App.css";
import { useState } from "react";

import Header from "./components/header";
import ProjectForm from "./components/projectform";
import SearchBar from "./components/searchbar";
import ProjectList from "./components/projectlist";

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React."
    },
    {
      id: 2,
      title: "Weather App",
      description: "Displays weather using an API."
    },
    {
      id: 3,
      title: "To-Do List",
      description: "A simple application for managing daily tasks."
    }
  ]);

  return (
    <div className="app">
      <Header />

      <ProjectForm />

      <SearchBar />

      <ProjectList projects={projects} />
    </div>
  );
}

export default App;