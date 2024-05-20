import { useState } from 'react';
import CardCx from '../../components/Cards/CardCx.jsx'
import '../../styles/dashboard.css'
import EditForm from '../../components/Forms/EditForm.jsx';

const Customer = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEditClick = (item) => {
    setSelectedCustomer(item);
    setShowEditForm(true);
  };
  const handleCloseClick = () => {
    setShowEditForm(false);
  };

  const data = [
    {
      id: 1044330088,
      name: 'John Doe',
      pending: '$1300'
    },
    {
      id: 1053673483,
      name: 'Jane Smith',
      pending: '$2000'
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Customers</h1>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <button onClick={() => handleEditClick({})} className="bg-blue-500 text-white px-4 py-2 rounded-md">New</button>
        </div>
      </div>
      <hr/>
      <section className="flex flex-wrap justify-start">
        {filteredData.map((item, index) => (
          <CardCx
            key={index}
            name={item.name}
            id={item.id}
            pending={item.pending}
            buttonText="Edit"
            onEditClick={() => handleEditClick(item)}
          />
        ))}
      </section>
      {showEditForm && selectedCustomer && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ml-50">
          <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-lg">
              <EditForm customer={selectedCustomer} onClose={handleCloseClick}/>
          </section>
        </div>
      )}
    </main>
  );
};

export default Customer