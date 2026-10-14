import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {

  if (props.title.trim() === "" && props.content.trim() === "") return null;


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)} ><MdDelete /></button>
    </div>
  );
}

export default Note;
