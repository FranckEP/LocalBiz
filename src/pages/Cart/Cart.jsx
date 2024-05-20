import React, { useState, useEffect, useRef} from 'react';
import CardCart from '../../components/Cards/CardCart';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const wrapperRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const productList = [
    {
      id: 1,
      name: "Doritos",
      price: "100.00",
    },
    {
      id: 2,
      name: "Gaseosa",
      price: "200.00",
    },
    {
      id: 3,
      name: "Arroz",
      price: "300.00",
    },
    {
      id: 4,
      name: "Leche",
      price: "200.00",
    },
    {
      id: 5,
      name: "Huevo",
      price: "300.00",
    },
  ];

  const handleProductSelect = product => {
    setSelectedProducts([...selectedProducts, product]);
    setIsOpen(false);
  };
  const handleProductRemove = productToRemove => {
    setSelectedProducts(selectedProducts.filter(product => product !== productToRemove));
  };

  const filteredData = productList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Carrito</h1>
      </div>
      <hr />
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombre del cliente
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            ID del cliente
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="10********"
          />
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="payment-method"
          >
            Método de pago
          </label>
          <select
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="payment-method"
          >
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
            <option value="enMora">En mora</option>
          </select>
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="product-search"
          >
            Productos
          </label>
          <div>
            <div className="relative">
              <input
                type="text"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Buscar producto"
                onClick={toggleDropdown}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          {isOpen && (
            <div className="bg-white z-10 shadow appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded mb-3">
              <ul
                className="h-28 px-3 pt-2 pb-3 overflow-y-auto text-sm text-gray-700"
                aria-labelledby="dropdownSearchButton"
              >
                {filteredData.map((product, index) => (
                  <li onClick={() => handleProductSelect(product)}>
                    <div className="flex items-center ps-2 rounded hover:bg-gray-100">
                      <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded">
                        {product.name} - {product.price}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className='h-[23rem] overflow-y-auto mt-2'>
            <div className="flex flex-wrap">
                {selectedProducts.map((product, index) => (
                    <CardCart 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex"
                    key={index} 
                    name={product.name} 
                    precio={product.price}
                    onRemove={() => handleProductRemove(product)}
                    />
                ))}
            </div>
           </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="font-bold text-lg">
                Total: $134123
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Pay
            </button>
        </div>
    </main>
  );
};

export default Cart;