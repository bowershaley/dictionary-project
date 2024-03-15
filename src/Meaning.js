import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

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
            <Examples example={props.meaning.example} />
          </p>
          <p>
            <Synonyms synonyms={props.meaning.synonyms} />
          </p>
        </div>
      </div>
    </div>
  );
}
