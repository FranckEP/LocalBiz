import Table from '../../components/Table'
import '../../styles/dashboard.css'
import { useState, useEffect } from 'react';

const ProvidersV = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const columns = [
    {
        name: 'Nit',
        selector: row => row.nit,
    },
    {
      name: 'Nombre proveedor',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Producto comprado',
      selector: row => row.product,
      sortable: true,
      right: true,
    },
    {
      name: 'Cantidad',
      selector: row => row.quantity,
      sortable: true,
      right: true,
    },
    {
      name: 'Precio',
      selector: row => row.price,
      sortable: true,
      right: true,
    },
    ];
    const Data = [
    { nit: 890903938, name: 'PaniPuri', product: 'Indi' , quantity: '10', price: 100},
    { nit: 930903938, name: 'Doritos', product: 'Doritos', quantity: '20', price: 200 },
    { nit: 780903398, name: 'Kick Nuts', product: 'Producto 3' , quantity: '30', price: 300},
    ]
  
  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(Data);
    } else {
      const results = Data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.nit.toString().includes(searchTerm) ||
        person.product.includes(searchTerm)
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Proveedores</h1>
        <div className="flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Nueva compra</button>
        </div>
      </div>
      <hr/>
      <section className="graph-container">
        <Table columns={columns} data={searchResults}/>
      </section>
    </main>
  )
}

export default ProvidersV