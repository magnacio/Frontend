const Employee = ({ employee }) => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee Info</h1>
      <div className="p-4 bg-white shadow rounded space-y-1">
        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
        <p>Salary: {employee.salary}</p>
        <p>City: {employee.city}</p>
      </div>
    </div>
  );
};

export default Employee;
