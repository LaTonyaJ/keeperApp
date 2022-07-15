import React from "react";

function Note({ id, title, content, remove }) {

  function handleClick() {
    remove(id);
  }

  return (
    < div className="note" >
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div >
  );
}

export default Note;
