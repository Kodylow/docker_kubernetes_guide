import React, { useState, useEffect } from "react";
import axios from "axios";

const Fib = () => {
  const [seen, setSeen] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    fetchValues();
    fetchSeen();
  }, []);

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setValues(values.data);
  };

  const fetchSeen = async () => {
    const s = await axios.get("/api/values/all");
    setSeen(s.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });

    setIndex("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I've seen:</h3>
      {seen.map(({ number }) => number).join(", ")}
      <h3>Calculated Values:</h3>
      {values.map(({ key, val }) => (
        <div key={key}>
          For index {key} I calculated {val}
        </div>
      ))}
    </div>
  );
};

export default Fib;
