import { useState } from "react";

function ProjectForm({ addProject }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    if (title === "" || description === "") {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    };

    addProject(newProject);

    setTitle("");
    setDescription("");

  }

  return (
    <section>

      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Description</label>

        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <button type="submit">
          Add Project
        </button>

      </form>

    </section>
  );
}

export default ProjectForm;