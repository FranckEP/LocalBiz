import { useState } from 'react';

const EditForm = ({onClose, customer}) => {


    return (
        <div className="flex justify-content-center">
            <form className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input defaultValue={customer.name} type="text" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
            <input defaultValue={customer.id} type="text" id="id" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="saldoPendiente" className="block text-sm font-medium text-gray-700">Saldo Pendiente</label>
            <input defaultValue={customer.pending} type="number" id="saldoPendiente" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className='flex justify-center'>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
        
    </form>
        </div>
    )
}

export default EditForm;