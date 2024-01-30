import Animal from "./components/Animal";
import ANIMALS from "./data/animals";
import "./App.css";

function App() {
  return (
    <>
      <h1>Animals</h1>
      <ul>
        {ANIMALS.map((animal) => {
          return <Animal animal={animal} />;
        })}
      </ul>
    </>
  );
}

export default App;
