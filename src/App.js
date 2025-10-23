import React, { useState } from "react";
import './App.css';


function App() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [vocab, setVocab] = useState([]);

  function addWord(e) {
    e.preventDefault();
    if (!word) return;

    const newEntry = { word, translation };
    setVocab([...vocab, newEntry]);
    setWord("");
    setTranslation("");
  }

  function deleteWord(wordToDelete) {
    const newVocab = vocab.filter((item) => item.word !== wordToDelete)
    setVocab(newVocab)
  }

  return (
    <div className= "mainBody" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="mainTitle">My French Vocabulary</h1>

    <div class="flexBody">
        <form onSubmit={addWord} className="wordForms">
          <input
            className="newForm newWord"
            type="text"
            placeholder="French word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
          <textarea
            className="newForm newDesc"
            type="text"
            placeholder="English translation"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <div class="newWordSubmit">
          <button type="submit">Add Word</button>
          </div>
        </form>

      <div className="wordBank">
      <h2 className="wordsTitle">My Words</h2>
      <ul className="wordUL">
        {vocab.map((item, index) => (
          <li className="listItem" key={index}>
            <div><b>{item.word}</b> — {item.translation}</div>
            <button type="button" onClick={() => deleteWord(item.word)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;

