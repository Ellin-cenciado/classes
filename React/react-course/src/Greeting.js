export function Greeting({ title, names = "User" }) {
  let sum = {
    opName: "sum",
    add(x, y) {
      return x + y; //Si quisiera que JSON.stringify funcionara con esto, debo escribirlo como un string
    },
  };
  console.log(title, names);
  const name = "Lin";
  let x = 2;
  let y = 3;
  const married = true;
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>
        Sample text, did u know that the {sum.opName} of {x} and {y} is{" "}
        {sum.add(x, y)} ?{" "}
      </p>
      <h2>{married ? "estoy casado" : "no estoy casado"}</h2>
      <p>
        {JSON.stringify(sum)} | {married.toString()}
      </p>
      <p>
        {title}, dice {names}
      </p>
    </div>
  );
}

export function UserCard({ user }) {
  console.log(user.greet);
  return (
    <>
      <h1>{user.name} user card</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Money: ${user.amount}</li>
        Address:
        <ul>
          <li>City: {user.street.city}</li>
          <li>Street name: {user.street.name}</li>
          <li>Number: {user.street.num}</li>
        </ul>
        <li>Marriage status: {user.marriedStat.toString()}</li>
      </ul>
    </>
  );
}

export function UserCard2({ name, amount, street, marriedStat, greet}) {
  console.log(greet);
  return (
    <>
      <h1>{name} user card 2</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Money: ${amount}</li>
        Address:
        <ul>
          <li>City: {street.city}</li>
          <li>Street name: {street.name}</li>
          <li>Number: {street.num}</li>
        </ul>
        <li>Marriage status: {marriedStat.toString()}</li>
      </ul>
    </>
  );
}
