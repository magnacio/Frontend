import { useState } from 'react'

const initialState = {
  employeeName: '',
  employeeId: '',
  department: '',
  role: '',
  salary: '',
}

const EmployeeDetailsForm = () => {
  const [employee, setEmployee] = useState(initialState)
  const [submittedEmployee, setSubmittedEmployee] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setEmployee((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedEmployee(employee)
    setEmployee(initialState)
  }

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 2
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">
        Employee Details Form
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="employeeName" className="block text-sm font-medium text-slate-600">
            Employee Name
          </label>
          <input
            id="employeeName"
            name="employeeName"
            type="text"
            value={employee.employeeName}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="employeeId" className="block text-sm font-medium text-slate-600">
            Employee ID
          </label>
          <input
            id="employeeId"
            name="employeeId"
            type="text"
            value={employee.employeeId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-slate-600">
            Department
          </label>
          <input
            id="department"
            name="department"
            type="text"
            value={employee.department}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-600">
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={employee.role}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-slate-600">
            Salary
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            value={employee.salary}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Submit
        </button>
      </form>

      {submittedEmployee && (
        <div className="mt-6 space-y-1 rounded-lg bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
          <p><span className="font-semibold">Name:</span> {submittedEmployee.employeeName}</p>
          <p><span className="font-semibold">ID:</span> {submittedEmployee.employeeId}</p>
          <p><span className="font-semibold">Department:</span> {submittedEmployee.department}</p>
          <p><span className="font-semibold">Role:</span> {submittedEmployee.role}</p>
          <p><span className="font-semibold">Salary:</span> {submittedEmployee.salary}</p>
        </div>
      )}
    </section>
  )
}

export default EmployeeDetailsForm
