import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <strong>Dictionary</strong>
          </h1>
        </header>

        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Haley Bowers and is{" "}
          <a
            href="https://github.com/bowershaley/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
