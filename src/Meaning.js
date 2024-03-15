import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p className="partOfSpeech">
        {" "}
        <em>{props.meaning.partOfSpeech}</em>
      </p>
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
  );
}
