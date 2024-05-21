import React from 'react'

const CardSales = ({name, id, total, totalPaid, paymentMethod, date, buttonText, onEditClick}) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-xs rounded overflow-hidden shadow-lg m-1 flex flex-col">
        <div className="px-6 flex-grow mt-3">
          <div className="font-bold text-lg">Sale #{id}</div>
          <p className="text-gray-700 text-sm">
            Nombre: {name}
          </p>
          <p className="text-gray-700 text-sm">
            Total: {total}
          </p>
          <p className="text-gray-700 text-sm">
            Total Abonado: {totalPaid}
          </p>
          <p className="text-gray-700 text-sm">
            Método de pago: {paymentMethod}
          </p>
          <p className="text-gray-700 text-sm">
            Fecha: {date}
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

export default CardSales;