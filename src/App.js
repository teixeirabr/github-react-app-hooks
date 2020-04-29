import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

//stateful component
// class App extends React.Component {
//   this.state = {
//     user: ''
//   }

// handleChange = () =>{
//   this.setState({
//     [e.target.name]=e.target.value
//    })
// }

//   render() {
//     return (

//     )
//   }
// }

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  // this.state = {
  //   userName: ''
  // } = useState()
  // setUserName('andre');
  // this.setState({ userName: 'andre' })

  //setUserName
  // this.setState({ userName: '' })

  //construir uma funcao que vá no github e busque por username
  function handleGithubUser() {
    //inicia com loading true
    setLoading(true);
    //configura o axios e define uma base_url
    const api = axios.create({
      baseURL: "https://api.github.com/users/",
    });

    //chamada get buscando username do usuário
    api.get(userName).then((response) => {
      //pega a resposta e define na variavel "user"
      setUser(response.data);
      //ao finalizar muda loading pra false
      setLoading(false);
    });
  }

  // || or && and

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(event) => setUserName(event.target.value)} />
        <button onClick={() => handleGithubUser()}>CLICK</button>
        {/* {loading ? <span>loading...</span> : null} */}
        {loading && <span>loading...</span>}
        <img className={"img"} src={user.avatar_url} />
        <span>{user.login}</span>
      </header>
    </div>
  );
}

export default App;
