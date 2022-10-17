import { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("loaded");
  }, []);
  return <div onClick={() => setCount(count + 1)}>{`Hola ${count}`}</div>;
};

export default Home;
