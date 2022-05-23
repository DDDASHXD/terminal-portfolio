import React, { useEffect, useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  return (
    <pre>
      <div className="input">
        <p className="path">{props.path}</p>
        <textarea
          name="textarea"
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          value={props.value}
          spellCheck="false"
          id="input"
        >
          <pre></pre>
        </textarea>
      </div>
    </pre>
  );
};

export default Input;
