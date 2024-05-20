const FormSales = ({ onClose, customer }) => {
    // async ({ onClose, customer })
    // GET localhost:8000/api/sales/500
    /* const response = await axios.get('localhost:8000/api/sales')
    console.log('response', response) */

    console.log('customer', customer)

    const updateSale = () => {
        // PUT localhost:8000/api/sales/500
        // body: { name: 'Juan', total: 500, totalPaid: 300, paymentMethod: 'Efectivo' }
        /* const body = {
            name: document.getElementById('cxname').value,
            total: document.getElementById('total').value,
            totalPaid: document.getElementById('totalPaid').value,
            paymentMethod: document.getElementById('paymentMethod').value
        }

        axios.put(`localhost:8000/api/sales/${idSale}`, body).then(response => {
            console.log('response', response)
        }) */
    }
    return (
        <form onSubmit={updateSale} className="space-y-4">
            <button onClick={onClose} className="text-cyan-800 rounded-full w-9 h-9 flex items-center justify-center absolute top-4 right-6">
                X
            </button>
            <div>
                <label htmlFor="cxname" className="block text-sm font-medium text-gray-700">Nombre del cliente</label>
                <input type="text" id="cxname" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={customer?.name || ''} />
            </div>
            <div>
                <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
                <input type="text" id="total" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={customer?.total || ''} />
            </div>
            <div>
                <label htmlFor="totalPaid" className="block text-sm font-medium text-gray-700">Total Pagado</label>
                <input type="number" id="totalPaid" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={customer?.totalPaid || ''} />
            </div>
            <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Método de pago</label>
                <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name=""
                    id="paymentMethod"
                    defaultValue={customer?.paymentMethod || ''}
                >
                    <option selected>Select one</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="En mora">En mora</option>
                </select>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
    );
};

export default FormSales;