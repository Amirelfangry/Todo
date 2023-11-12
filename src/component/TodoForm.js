import { React, useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
   
    });
    setText("");
  };

  return (
    // eslint-disable-next-line no-undef
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
