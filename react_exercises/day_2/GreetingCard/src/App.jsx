import "./App.css";
import GreetingCard from "./GreetingCard";

function App() {
  return (
    <div>
      <GreetingCard
        name="Bolu"
        message="Welcome to my first react app "
        color="red"
      />{" "}
      <GreetingCard
        name="Tunde"
        message="Welcome to my first react app "
        color="blue"
      />{" "}
      <GreetingCard
        name="Fope"
        message="Welcome to my first react app "
        
      />
    </div>
  );
}
export default App;
