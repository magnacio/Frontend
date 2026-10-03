import { useState } from 'react'

const NameInput = () => {
  const [name, setName] = useState('')

  const handleChange = (event) => setName(event.target.value)

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 1
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Name Input</p>

      <label htmlFor="name" className="mt-6 block text-sm font-medium text-slate-600">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <p className="mt-6 min-h-6 text-center text-lg font-semibold text-indigo-600">
        {name}
      </p>
    </section>
  )
}

export default NameInput
