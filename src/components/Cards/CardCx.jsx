const CardCx = ({name, id, pending, buttonText, onEditClick}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-xs rounded overflow-hidden shadow-lg m-1 flex flex-col">
      <div className="px-6 flex-grow mt-3">
        <div className="font-bold text-lg mb-2">{name}</div>
        <p className="text-gray-700 text-sm">
          ID: {id}
        </p>
        <p className="text-gray-700 text-sm">
          Saldo Pendiente: {pending}
        </p>
      </div>
      <div className="px-2 pt-2 pb-4 flex justify-end">
        <button onClick={onEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardCx;