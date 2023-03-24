// import { Users } from "./users";
import "./App.css";
import { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setquery] = useState("");
  // console.log(query);
  let [users, setusers] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios("https://jsonplaceholder.typicode.com/users");
      setusers(results.data);
    }
    getResults();
  }, []);
  console.log(users);
  const keys = ["name", "username", "email"];
  const search = (data) => {
    return data.filter(
      (user) => keys.some((key) => user[key].toLowerCase().includes(query))
      // user.name.toLowerCase().includes(query) ||
      // user.username.toLowerCase().includes(query) ||
      // user.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="app ">
      <h1>react</h1>
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setquery(e.target.value)}
      />
      <Table data={search(users)} />
    </div>
  );
}

export default App;
