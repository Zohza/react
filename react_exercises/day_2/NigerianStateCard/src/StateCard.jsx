function StateCard({ state, capital, region, population, children }) {
  const colorRegion = {
    North: "#8B4513",
    South: "#008751",
    East: "#FFD700",
    West: "#4169E1",
  };
  return (
    <div style={{ background: colorRegion[region] }}>
      <div className="content">
        <h3>{state}</h3>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default StateCard;
