const EditForm = ({onClose, selectedCustomer}) => {
  return (
    <form className="space-y-4">
        <button onClick={onClose} className="text-cyan-800 rounded-full w-9 h-9 flex items-center justify-center absolute top-4 right-6">
            X
        </button>
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input value={"prueba"} type="text" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
            <input type="text" id="id" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="saldoPendiente" className="block text-sm font-medium text-gray-700">Saldo Pendiente</label>
            <input type="number" id="saldoPendiente" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
  );
};

export default EditForm;