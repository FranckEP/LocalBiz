import {useState} from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../../components/Cards/CardCart';
import { Dropdown } from 'primereact/dropdown';

const Cart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

    const handleAdd = (product) => {
    setQuantities(prev => ({ ...prev, [product.id]: (prev[product.id] || 1) + 1 }));
    }

    const handleRemove = (product) => {
    setQuantities(prev => {
        if (prev[product.id] > 1) {
        return { ...prev, [product.id]: prev[product.id] - 1 };
        } else {
        handleProductRemove(product);
        const { [product.id]: _, ...rest } = prev;
        return rest;
        }
    });
    }

  const productList = [
    {
      id: 1,
      name: "Doritos",
      price: 100.00,
    },
    {
      id: 2,
      name: "Gaseosa",
      price: 200.00,
    },
    {
      id: 3,
      name: "Arroz",
      price: 300.00,
    },
    {
      id: 4,
      name: "Leche",
      price: 200.00,
    },
    {
      id: 5,
      name: "Huevo",
      price: 300.00,
    },
  ];

  const handleProductSelect = (e) => {
    if (e.value) {
      const productExists = selectedProducts.find(product => product.id === e.value.id);
      if (!productExists) {
        setSelectedProducts([...selectedProducts, e.value]);
      }
      setQuantities(prev => ({ ...prev, [e.value.id]: (prev[e.value.id] || 0) + 1 }));
    }
  };
  
  const handleProductRemove = productToRemove => {
    setSelectedProducts(selectedProducts.filter(product => product !== productToRemove));
  };

  const total = selectedProducts.reduce((sum, product) => sum + (product.price * (quantities[product.id] || 1)), 0);

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Carrito</h1>
        <Link className='rounded border bg-[#2563EB] text-white' to='/sales'>Ir a ventas</Link>
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
            <option value="seleccionar">Seleccionar</option>
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
            <option value="enMora">En mora</option>
          </select>
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Total a abonar
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="$***"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="product-search"
          >
            Productos
          </label>
          <div className="card flex justify-content-center">
          <Dropdown 
            value={searchTerm} 
            onChange={handleProductSelect} 
            options={productList} 
            optionLabel="name" 
            filter 
            placeholder="Selecciona un producto" 
            className="w-full md:w-14rem p-2" 
            />
          </div>
          <div className='h-[23rem] overflow-y-auto mt-2'>
            <div className="flex flex-wrap">
            {selectedProducts.map((product, index) => (
            <CardCart 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex"
                key={index} 
                name={product.name} 
                precio={product.price}
                quantity={quantities[product.id] || 1}
                handleAdd={() => handleAdd(product)}
                handleRemove={() => handleRemove(product)}
                onRemove={() => handleRemove(product)}
            />
            ))}
            </div>
           </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="font-bold text-lg">
                Total: ${total}
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Pay
            </button>
        </div>
    </main>
  );
};

export default Cart;