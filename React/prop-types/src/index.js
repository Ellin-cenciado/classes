import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
//import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import { VscChip } from "react-icons/vsc";

function Message() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es:" + message);
        }}
      >
        Save
      </button>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("se ejecuta una sola vez");
  }, [ ]);

  useEffect(() => {
    console.log("se ejecuta cada vez que se actualiza counter");
  }, [counter]);

  return (
    <div>
      <h1>El contador esta en {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Resetear
      </button>
    </div>
  );
}

const user = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Ryan ray",
    image: "https://robohash.org/user2",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
const cardStyles = {};
const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <VscChip />
    <Button text="boton 1" />
    <Button text="boton 2" />
    <Button text="" name="Joe" />
    <div style={cardStyles}>
      {/* <TaskCard ready={false} />
       */}{" "}
    </div>
    <Saludar />
    <input onChange={handleChange} />

    <form
      onSubmit={(e) => {
        alert("enviando datos");
        e.preventDefault();
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>

    <hr />

    <Posts />

    {user.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
    <Message />
    <Counter />
  </>
);
