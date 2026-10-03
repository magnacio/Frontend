import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  age: '',
  course: '',
  city: '',
}

const StudentRegistrationForm = () => {
  const [student, setStudent] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setStudent((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(student)
  }

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 1
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">
        Student Registration Form
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={student.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-600">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={student.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-slate-600">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            value={student.age}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-slate-600">
            Course
          </label>
          <input
            id="course"
            name="course"
            type="text"
            value={student.course}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-600">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={student.city}
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

      <p className="mt-4 text-center text-xs text-slate-400">
        Open the console to view the submitted student object.
      </p>
    </section>
  )
}

export default StudentRegistrationForm
