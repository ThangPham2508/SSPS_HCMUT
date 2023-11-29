import { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-gray-200 rounded-l px-4 py-2 border border-r-0 border-gray-400 hover:bg-gray-300"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="px-4 py-2 border border-gray-400">{quantity}</span>
      <button
        className="bg-gray-200 rounded-r px-4 py-2 border border-l-0 border-gray-400 hover:bg-gray-300"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
