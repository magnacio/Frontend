const ProductObject = () => {
  const product = {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    brand: "Logitech",
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product Details</h1>
      <div className="p-4 bg-white shadow rounded space-y-1">
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </div>
  );
};

export default ProductObject;
