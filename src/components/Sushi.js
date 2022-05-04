import React, { useState } from "react";

function Sushi( { id, imgUrl, name, price, handleMoney, money } ) {
  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick() {
    if (money - price > 0) {
      setIsEaten(true)
      handleMoney(price)
    } else alert("Hit the ATM!")
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleSushiClick(id)}>
        {isEaten ? null : (
          <img
            src={imgUrl}
            alt={`${name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
