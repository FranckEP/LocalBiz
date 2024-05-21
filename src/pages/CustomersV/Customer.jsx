import { useState } from 'react';
import CardCx from '../../components/Cards/CardCx.jsx'
import '../../styles/dashboard.css'
import EditForm from '../../components/Forms/EditForm.jsx';
import { Dialog } from 'primereact/dialog';

const style = {
  width: "25vw",
  background: "#f3f4f6",
  padding: "15px",
  borderRadius: "10px",
};
const Customer = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [visible, setVisible] = useState(false);
  

  const handleEditClick = (item) => {
    setSelectedCustomer(item);
    setVisible(true);
  };

  const data = [
    {
      id: 1044330088,
      name: 'John Doe',
      pending: 1300
    },
    {
      id: 1053673483,
      name: 'Jane Smith',
      pending: 2000
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
        <h1 className="dashboard-title">Clientes</h1>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <button onClick={() => handleEditClick({})} className="bg-blue-500 text-white px-4 py-2 rounded-md">Nuevo cliente</button>
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
            buttonText="Editar"
            onEditClick={() => handleEditClick(item)
              
            }
          />

        ))}
      </section>
      <Dialog  visible={visible} onHide={() => setVisible(false)}
                style={style} breakpoints={{ '960px': '30vw', '641px': '50vw' }} className='rounded-sm shadow-2xl'>
                <EditForm customer={selectedCustomer}></EditForm>
            </Dialog>
    </main>
  );
};

export default Customer