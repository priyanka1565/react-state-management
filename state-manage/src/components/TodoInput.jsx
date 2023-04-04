import React, { useState } from "react";

const TodoInput = () => {
    const [text, setText] = useState("");
  return (
      <div>
          {text }
          <input type="text" onChange={(e) => {
              //console.log("Value",e.target.value)
              setText(e.target.value)
          }} />
          <button
              onClick={() => {
                  
          }}>
              Add todo
          </button>
    </div>
  )
}

export default TodoInput