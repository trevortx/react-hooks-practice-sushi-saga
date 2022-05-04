import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushi, handleMoney, money } ) {
  const [sushiIndex, setSushiIndex] = useState(1)
  const sushiToDisplay = sushi.slice(sushiIndex - 1, sushiIndex + 3)

  function handleMoreClick() {
    if (sushiIndex >= 97) {
      setSushiIndex(1)
    } else {
      setSushiIndex(sushiIndex + 4)
    }
    console.log(sushiIndex)
  }

  return (
    <div className="belt">
      {sushiToDisplay.map((sushi) => {
        return <Sushi key={sushi.id} id={sushi.id} imgUrl={sushi.img_url} name={sushi.name} price={sushi.price} handleMoney={handleMoney} money={money}  />
    })}
      <MoreButton onClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
