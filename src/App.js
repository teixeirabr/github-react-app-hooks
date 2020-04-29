import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  function handleGithubUser() {
    setLoading(true);

    const api = axios.create({
      baseURL: "https://api.github.com/users/",
    });
    api.get(userName).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }

  // function handleGithubUser() {
  //   setLoading(true);

  //   axios.get("https://api.github.com/users/").then((response) => {
  //     setUser(response.data);
  //     setLoading(false);
  //   });
  // }

  // || or && and

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Profile Picture Finder</h1>
        <h4>GIT USERNAME:</h4>
        <input onChange={(event) => setUserName(event.target.value)} />
        <button onClick={() => handleGithubUser()}>CLICK</button>
        {/* {loading ? <span>loading...</span> : null} */}
        {loading && <span>loading...</span>}
        <br />
        <img className={"img"} src={user.avatar_url} />
        <br />
        <span>{user.login}</span>
      </header>
    </div>
  );
}

export default App;
