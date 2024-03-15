import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=b0o1e2aa04dbdcb3fatb5f7f5243c844`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <h4 className="text-center">What word are you looking for?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            className="searchBar"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </section>

      <Results results={results} />
    </div>
  );
}
