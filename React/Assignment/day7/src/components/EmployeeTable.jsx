const EmployeeTable = () => {
  const employees = [
    { id: 1, name: "Kavya", department: "Frontend", salary: 45000 },
    { id: 2, name: "Rahul", department: "Backend", salary: 50000 },
    { id: 3, name: "Sneha", department: "QA", salary: 38000 },
    { id: 4, name: "Vikram", department: "DevOps", salary: 52000 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employees</h1>
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-slate-800 text-white text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b border-slate-200">
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.department}</td>
              <td className="p-3">{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
