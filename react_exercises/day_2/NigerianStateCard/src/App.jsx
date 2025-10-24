import "./App.css";
import StateCard from "./StateCard";

function App() {
  return (
    <div>
      <StateCard
        state="Lagos"
        capital="Abeokuta"
        region="South"
        population="5000"
      >
        <p>A very beautiful LandMark is the Olumo Rock located in Abeokuta</p>
      </StateCard>

      <StateCard
        state="Oyo"
        capital="Ibadan"
        region="West"
        population="5000"
      >
        <p>A very beautiful LandMark is the Oyo Palace located in Oyo state</p>
      </StateCard>

      <StateCard
        state="Kaduna"
        capital="Kaduna"
        region="North"
        population="15000"
      >
        <p>A very beautiful LandMark is the Olumo Rock located in Kaduna</p>
      </StateCard>

      <StateCard
        state="Rivers"
        capital="Port-harcourt"
        region="East"
        population="95000"
      >
        <p>A very beautiful LandMark is the UNIPORT located in PortHarcourt</p>
      </StateCard>
    </div>
  );
}

export default App;
