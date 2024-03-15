import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Search for ${keyword}`);

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=b0o1e2aa04dbdcb3fatb5f7f5243c844`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
