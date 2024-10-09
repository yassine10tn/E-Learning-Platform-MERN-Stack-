import React, { useState } from "react";
import ItemCart from "./ItemCart";
import NavScrollExample from "./NavScrollExample";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  w;
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <NavScrollExample conter={counter} />

      <ItemCart onAddToWishlist={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
