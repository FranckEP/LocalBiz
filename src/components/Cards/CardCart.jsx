const CardCart = ({ name, precio, quantity, handleRemove, handleAdd}) => {
  return (
    <div className="flex flex-col bg-[#074173] rounded-lg shadow-md m-1 p-3 w-28">
      <div className="flex justify-between items-center mb-1">
        <div className="text-white font-bold text-sm">{name}</div>
      </div>
      <div className="text-white text-sm justify-center items-center mb-1">${precio}</div>
      <div className="flex justify-between items-center">
        <button onClick={handleRemove} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">-</button>
        <span className="text-white text-sm">{quantity}</span>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm">+</button>
      </div>
    </div>
  );
};

export default CardCart;