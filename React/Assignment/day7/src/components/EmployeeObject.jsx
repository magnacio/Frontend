const EmployeeObject = () => {
  const employee = {
    name: "Kavya",
    role: "Frontend Developer",
    salary: 45000,
    location: "Bangalore",
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee Details</h1>
      <div className="p-4 bg-white shadow rounded space-y-1">
        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
        <p>Salary: {employee.salary}</p>
        <p>Location: {employee.location}</p>
      </div>
    </div>
  );
};

export default EmployeeObject;
