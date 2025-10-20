function GreetingCard({ name, message, color= 'brown'}) {
  const cardStyle = {
    backgroundColor: color,
  };
  return (
    <div style= {cardStyle}>
      <h2>Hello, {name}</h2>
      <p>{message}</p>

    </div>
  );
}

export default GreetingCard