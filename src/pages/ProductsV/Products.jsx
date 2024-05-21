import { useState} from 'react';
import '../../styles/dashboard.css'
import CardPrd from '../../components/Cards/CardPrd.jsx'
import { Dialog } from 'primereact/dialog';
import FormProduct from '../../components/Forms/FormProduct.jsx';

const style = {
  width: "25vw",
  background: "#f3f4f6",
  padding: "15px",
  borderRadius: "10px",}


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  

  const handleEditClick = (item) => {
    setSelectedProduct(item);
    setVisible(true);
  };

  const data = [
    {
      image: "https://meltingpot-food.in/wp-content/uploads/2021/05/PaniPuriConcentrate_front.jpg",
      name: "Indi",
      stock: 10,
      price: 100,
      provider: "PaniPuri",
      category: "Food",
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/5c5b530f8d974055c4891586/1549736867236-XPU9OEQLCZ7U3XWY8I6J/Doritos-Net-Qty-Label-copy.png",
      name: "Doritos",
      stock: 20,
      price: 200,
      provider: "Doritos",
      category: "Product",
    },
    {
      image: "https://images-platform.99static.com/HR3TgAJTUmwspCyqO7qMU3YeVOc=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/89/89577/attachment_89577057",
      name: "Product 3",
      stock: 30,
      price: 300,
      provider: "Kick Nuts",
      category: "Granos",
    }
  ];
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
        <h1 className="dashboard-title">Products</h1>
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