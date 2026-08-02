import { useState } from "react";

function ProjectForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Title:", title);
    console.log("Description:", description);
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