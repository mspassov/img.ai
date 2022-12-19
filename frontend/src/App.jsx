import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [imgURL, setimgURL] = useState("");
  return (
    <div>
      <h1>img.ai</h1>
      <Form imgURL={imgURL} setimgURL={setimgURL} />
      <img src={imgURL} />
    </div>
  );
};

export default App;
