import { useState} from 'react';
import '../../styles/dashboard.css'
import CardPrd from '../../components/Cards/CardPrd.jsx'
import { Dialog } from 'primereact/dialog';
import FormProduct from '../../components/Forms/FormProduct.jsx';
import data from '../../DB/data.json';

const style = {
  width: "25vw",
  background: "#f3f4f6",
  padding: "15px",
  borderRadius: "10px",}


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(data);
  const [visible, setVisible] = useState(false);
  

  const handleEditClick = (item) => {
    setSelectedProduct(item);
    setVisible(true);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.category.toLowerCase().includes(selectedOption.toLowerCase())
  );

  const uniqueCategories = data.reduce((categories, item) => {
    return categories.includes(item.category) ? categories : [...categories, item.category];
  }, []);

  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Productos</h1>
        <div className="flex justify-between items-center">
          <h2 className="sub">Categoria:</h2>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder="Filter by category"
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          >
          <option value="">Todas</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
          </select>
          <input
            type="text"
            placeholder="Buscar producto"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
        </div>
      </div>
      <hr/>
      <section className="flex flex-wrap justify-start">
        {filteredData.map((item, index) => (
            <CardPrd
              key={index}
              image={item.image}
              name={item.name}
              stock={item.stock}
              price={"$" + item.price}
              provider={item.provider}
              category={item.category}
              buttonText="Editar"
              onEditClick={() => handleEditClick(item)
              }
            />
          ))}
      </section>
      <Dialog  visible={visible} onHide={() => setVisible(false)}
                style={style} breakpoints={{ '960px': '30vw', '641px': '50vw' }} className='rounded-sm shadow-2xl'>
                <FormProduct product={selectedProduct}/>
            </Dialog>
    </main>
  )
}

export default Products