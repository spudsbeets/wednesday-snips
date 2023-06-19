import './App.css';
import { useState, useEffect } from 'react';

function App() {

const wednesday = [
    {
      text: "Q",
      name: "Another Sunrise",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg"
    },
    {
      text: "W",
      name: "Catnip",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "E",
      name: "Machine Elves",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "A",
      name: "Leviathan",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "S",
      name: "Behemoth",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "D",
      name: "Space Dragon",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "Z",
      name: "Another Dinner",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "X",
      name: "Watching More Cars",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "C",
      name: "Another Perfect Blanket",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "V",
      name: "Outro",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
  ];  

function correlatedTitle(letter, arr) {
  let capLet = letter.toUpperCase();
  let foundIndex = arr.findIndex(element => element.text === capLet);
  let rightObj = arr[foundIndex];
  return rightObj.name;
};

useEffect(() => {
    document.addEventListener('keydown', (event) => playAudio(event.key.toUpperCase(), correlatedTitle(event.key, wednesday)), []);
  }) 

const [title, switchTitle] =  useState('');

   
function playAudio(selection, song) {
  const audio = document.getElementById(selection);
  audio.play();
  switchTitle(song);
};

  return (
    <div id="drum-machine">
      <header>Coming May 4000</header>
      <h1>Wednesday</h1>
      <div id="buttons">
      {wednesday.map((item) => (<button className="drum-pad" key={item.name} id={item.name} onClick={() => playAudio(item.text, item.name)}>
        {item.text}
        <audio src={item.src} key={item.text} id={item.text}></audio>
        </button>))}
        </div>
        <div id="display"><p>{title}</p></div>
        <footer>Spud in Transit</footer>
        </div>
  )
}
export default App;
