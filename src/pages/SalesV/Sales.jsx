import CardSales from '../../components/Cards/CardSales';
import '../../styles/dashboard.css'
import '../../styles/TableSeach.css'
import { useState } from 'react';
import TableSearch from '../../components/TableSearch';

const Sales = () => {
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
      id: 1,
      name: 'John Doe',
      total: 100.00,
      totalPaid: 50.00,
      paymentMethod: 'Credit Card',
      date: '2022-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      total: 200.00,
      totalPaid: 100.00,
      paymentMethod: 'Cash',
      date: '2022-01-02',
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleDateChange = event => {
    setFilterDate(event.target.value);
  };
  
  const handlePaymentMethodChange = event => {
    setFilterPaymentMethod(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.date.includes(filterDate) &&
    item.paymentMethod.toLowerCase().includes(filterPaymentMethod.toLowerCase())
  );

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Sales</h1>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <input
            type="date"
            placeholder="Filter by date"
            value={filterDate}
            onChange={handleDateChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="Filter by payment method"
            value={filterPaymentMethod}
            onChange={handlePaymentMethodChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <button onClick={() => handleEditClick(item)} className="bg-blue-500 text-white px-4 py-2 rounded-md">New</button>
        </div>
      </div>
      <hr/>
      <section className="flex flex-wrap justify-start">
        {filteredData.map((item, index) => (
          <CardSales
            key={index}
            id={item.id}
            name={item.name}
            total={item.total}
            totalPaid={item.totalPaid}
            paymentMethod={item.paymentMethod}
            date={item.date}
            buttonText="Edit"
            onEditClick={() => handleEditClick(item)}
          />
        ))}
      </section>
      <div className='testing-table'>
      <TableSearch/>
      </div>
      {/* {showEditForm && selectedCustomer && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <section className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <EditForm customer={selectedCustomer} onClose={handleCloseClick}/>
          </section>
        </div>
      )} */}
    </main>
  );
}

export default Sales