import { useState } from 'react'

const AgeValidation = () => {
  const [age, setAge] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event) => setAge(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (age.trim() === '') {
      setMessage('Age is required')
      return
    }

    setMessage(age)
    setAge('')
  }

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 3
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Age Validation</p>

      <form onSubmit={handleSubmit} className="mt-6">
        <label htmlFor="age" className="block text-sm font-medium text-slate-600">
          Age
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Submit
        </button>
      </form>

      <p
        className={`mt-6 min-h-6 text-center text-lg font-semibold ${
          message === 'Age is required' ? 'text-rose-600' : 'text-indigo-600'
        }`}
      >
        {message}
      </p>
    </section>
  )
}

export default AgeValidation
