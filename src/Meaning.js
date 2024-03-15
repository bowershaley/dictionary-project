import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="container">
      <div className="Meaning">
        <h4>
          {" "}
          <em>{props.meaning.partOfSpeech}</em>
        </h4>
        <div>
          <p>Definition: {props.meaning.definition}</p>
          <p>
            Example: <em>{props.meaning.example}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
