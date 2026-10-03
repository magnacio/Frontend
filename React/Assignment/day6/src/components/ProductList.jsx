const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Desk Chair", price: 4500, category: "Furniture" },
    { id: 3, name: "Headphones", price: 2000, category: "Electronics" },
    { id: 4, name: "Notebook", price: 50, category: "Stationery" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
