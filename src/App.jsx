import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

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

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {

    setProjects([
      ...projects,
      newProject
    ]);

  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">

      <Header />

      <ProjectForm addProject={addProject} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectList projects={filteredProjects} />

    </div>
  );
}

export default App;