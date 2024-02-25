import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard, UserCard2 } from "./Greeting"; //Separo la logica en otro archivo
import Product, { Navbar } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(<div>
    { Greeting() }
    { Greeting() }
    { Greeting() }
    Puedo renderizar como funciones o como etiquetas
    </div>) */

let lin = {
  name: "lin",
  amount: 3000,
  street: {
    city: "some city",
    name: "some street name",
    num: 123,
  },
  marriedStat: true,
  greet: function () {
    alert("hi");
  },
};

root.render(
  //Puedo no usar la etiqueta <div> para contener los greetings, estos son fragments. Funciona porque la unica regla que tengo que seguir para que funcione todo es que lo que mande tiene que estar adentro de una etiqueta.
  <>
    <Button text="click me" />
    <Button text="dont click me" />
    <Button text="do it" />
    <Greeting title="hola" names="Juan" />
    <Greeting x={30} />
    <Greeting a={{ objeto_1: "hola" }} />
    <UserCard user={lin} />
    <UserCard2
      name="lin"
      amount={3000}
      street={{
        city: "some city",
        name: "some street name",
        num: 123,
      }}
      marriedStat={true}
      greet={function () {
        alert("hi");
      }}
    />
    <Product />
    <Navbar />
  </>
);
