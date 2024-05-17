import { useState } from 'react';
import '../../styles/dashboard.css'
import CardPrd from '../../components/Cards/CardPrd.jsx'

const Products = () => {
  const data = [
    {
      image: "https://meltingpot-food.in/wp-content/uploads/2021/05/PaniPuriConcentrate_front.jpg",
      name: "Indi",
      stock: 10,
      price: "$100",
      provider: "PaniPuri"
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/5c5b530f8d974055c4891586/1549736867236-XPU9OEQLCZ7U3XWY8I6J/Doritos-Net-Qty-Label-copy.png",
      name: "Doritos",
      stock: 20,
      price: "$200",
      provider: "Doritos"
    },
    {
      image: "https://images-platform.99static.com/HR3TgAJTUmwspCyqO7qMU3YeVOc=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/89/89577/attachment_89577057",
      name: "Product 3",
      stock: 30,
      price: "$300",
      provider: "Kick Nuts"
    }
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className="dashboard flex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="dashboard-title">Products</h1>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mr-4 py-2 px-3 border-2 border-gray-300 p-2 rounded-md w-full md:w-auto"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">New</button>
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
              price={item.price}
              provider={item.provider}
              buttonText="Add to Cart"
            />
          ))}
      </section>
    </main>
  )
}

export default Products