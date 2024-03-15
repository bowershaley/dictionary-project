import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotoResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=b0o1e2aa04dbdcb3fatb5f7f5243c844`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=b0o1e2aa04dbdcb3fatb5f7f5243c844&`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
