import "./App.css";
import Head from "./header.js";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="container">
        <img className="bg-img" src="/bgForm.jpg" alt="background" />
        <h2>Connectez vous</h2>
        <form className="authForm">
          <label className="label">
            <p>Username</p>
            <input type="text" />
          </label>
          <label className="label">
            <p>Password</p>
            <input type="password" />
          </label>
          <br />
          <div>
            <button className="button" type="submit">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;