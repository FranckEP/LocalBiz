const FormSales = ({onClose }) => {
    return (
      <form className="space-y-4">
          <button onClick={onClose} className="text-cyan-800 rounded-full w-9 h-9 flex items-center justify-center absolute top-4 right-6">
              X
          </button>
          <div>
              <label htmlFor="cxname" className="block text-sm font-medium text-gray-700">Nombre del cliente</label>
              <input type="text" id="cxname" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
              <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
              <input type="text" id="total" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
              <label htmlFor="totalPaid" className="block text-sm font-medium text-gray-700">Total Pagado</label>
              <input type="number" id="totalPaid" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Método de pago</label>
              <select
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name=""
                id="paymentMethod"
                >
                <option selected>Select one</option>
                <option value="">Efectivo</option>
                <option value="">Transferencia</option>
                <option value="">En mora</option>
               </select>
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    );
  };
  
  export default FormSales;