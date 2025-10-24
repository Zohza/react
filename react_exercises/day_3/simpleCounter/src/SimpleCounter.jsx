import {useState} from 'react'
const SimpleCounter = () => {
  const [count, setCount] = useState(0);


//   function increment(){
//     setCount(count +1 );
//   }
  return (
    <div>
        <p>Count: {count}</p>
      <button className="btn1" onClick={()=> setCount(count +1)}>+</button>
      <button className="btn2"onClick={()=>setCount(count - 1)}>-</button>
      <button className="btn3" onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
};
export default SimpleCounter;