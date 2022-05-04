import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(`${API}`)
      .then(r => r.json())
      .then(data => setSushi(data))
  }, [])

  function handleMoney(price) {
    setMoney(money - price)
    setPlates([...plates, price])
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} setSushi={setSushi} handleMoney={handleMoney} money={money} />
      <Table plates={plates} money={money} />
    </div>
  );
}

export default App;

// App
// |__Table
// |__SushiContainer
//    |__Sushi
//    |__MoreButton