import { useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [img, setImg] = useState("");

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  async function getImage() {
    try {
      const API = `http://localhost:8092/photos?subject=${searchQuery}`;
      const res = await axios.get(API);
      setImg(res.data[0].img_url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Find an image!</h1>
      <input
        type="text"
        placeholder="enter image name"
        onChange={handleSearch}
      />
      <button onClick={getImage}>Explore!</button>
      {img && <img src={img} alt={searchQuery} />}
    </div>
  );
}

export default App;
