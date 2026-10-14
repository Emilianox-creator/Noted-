import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

function CreateArea(props) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  function handleAddNote(e) {
    e.preventDefault();
    if (note.trim() === "" && title.trim() === "") {
      alert("Por favor llena almenos un campo");
      return;
    }
    props.addNote({title: title, content: note});
    setNote("");
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <button type="submit"><IoAdd /></button>
      </form>
    </div>
  );
}

export default CreateArea;
