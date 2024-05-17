const CardPrd = ({ image, name, stock, price, provider, buttonText }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-xs rounded overflow-hidden shadow-lg m-1 flex flex-col">
      <img className="w-full h-32 object-cover" src={image} alt={name} />
      <div className="px-6 flex-grow">
        <div className="font-bold text-lg mb-2">{name}</div>
        <p className="text-gray-700 text-sm">
          Stock: {stock}
        </p>
        <p className="text-gray-700 text-sm">
          Price: {price}
        </p>
        <p className="text-gray-700 text-sm">
          Provider: {provider}
        </p>
      </div>
      <div className="px-2 pt-2 pb-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardPrd;