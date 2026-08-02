import "./styles/App.css";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="app">
      <Header />
      <ProjectForm />
      <SearchBar />
      <ProjectList />
    </div>
  );
}

export default App;