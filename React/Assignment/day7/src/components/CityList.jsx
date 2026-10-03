const CityList = () => {
  const cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Pune", "Delhi"];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cities</h1>
      <div>
        {cities.map((city, index) => (
          <p key={index} className="p-2 border-b border-slate-200">
            {city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CityList;
