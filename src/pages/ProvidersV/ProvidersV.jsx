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
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true,
      right: true,
    },
    {
      name: 'Transaction',
      selector: row => row.transaction,
      sortable: true,
      right: true,
    },
    ];
    const Data = [
    { nit: 11111, name: 'Conan Edogawa', contact: '7' , transaction: '2'},
    { nit: 22222, name: 'Ran Mouri', contact: '17', transaction: '2' },
    { nit: 33333, name: 'Kogoro Mouri', contact: '38' , transaction: '2'},
    { nit: 44444, name: 'Ai Haibara', contact: '7' , transaction: '2'},
    { nit: 55555, name: 'Ayumi Yoshida', contact: '7' , transaction: '2'},
    { nit: 66666, name: 'Mitsuhiko Tsuburaya', contact: '7' , transaction: '2'},
    { nit: 77777, name: 'Genta Kojima', contact: '7' , transaction: '2'},
    { nit: 88888, name: 'Hiroshi Agasa', contact: '53' , transaction: '2'},
    { nit: 99999, name: 'Sonoko Suzuki', contact: '17' , transaction: '2'},
    { nit: 10000, name: 'Eri Kisaki', contact: '38' , transaction: '2'},
    { nit: 11000, name: 'Kaito Kuroba', contact: '17' , transaction: '2'},
    { nit: 12000, name: 'Shinichi Kudo', contact: '17' , transaction: '2'} 
    ]
  
  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(Data);
    } else {
      const results = Data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.nit.toString().includes(searchTerm) ||
        person.contact.includes(searchTerm) ||
        person.transaction.includes(searchTerm)
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Providers</h1>
        <div className="flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">New</button>
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