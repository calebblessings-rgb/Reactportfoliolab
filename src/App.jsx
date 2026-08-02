import "./styles/App.css";

import Header from "./components/header";
import ProjectForm from "./components/projectform";
import SearchBar from "./components/searchbar";
import ProjectList from "./components/projectlist";

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