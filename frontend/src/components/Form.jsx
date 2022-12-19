import React from "react";
import axios from "axios";
import { useState } from "react";

const Form = ({ imgURL, setimgURL }) => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("small");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      prompt: prompt,
      size: size,
    };

    const response = await axios.post("/openai/generateimage", payload);
    setimgURL(response.data.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          placeholder="Enter your idea..."
        />
        <select
          name="size"
          id="size-select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default Form;
