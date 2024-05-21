import { useState } from 'react';

const FormProduct = ({onClose, product}) => {


    return (
        <div className="flex justify-content-center">
            <form className="space-y-4">
        <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
            <input defaultValue={product.stock} type="number" id="stock" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input defaultValue={product.price} type="number" id="price" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="provider" className="block text-sm font-medium text-gray-700">Provider</label>
            <input defaultValue={product.provider} type="text" id="provider" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input defaultValue={product.category} type="text" id="category" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className='flex justify-center'>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
        
    </form>
        </div>
    )
}

export default FormProduct;