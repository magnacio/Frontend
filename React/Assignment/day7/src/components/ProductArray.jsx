const ProductArray = () => {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Desk Chair", price: 4500, category: "Furniture" },
    { id: 3, name: "Headphones", price: 2000, category: "Electronics" },
    { id: 4, name: "Notebook", price: 50, category: "Stationery" },
    { id: 5, name: "Water Bottle", price: 250, category: "Accessories" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <p className="font-semibold">{product.name}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductArray;
