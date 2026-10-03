import { useState } from 'react'

const EmailSubmit = () => {
  const [email, setEmail] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState('')

  const handleChange = (event) => setEmail(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedEmail(email)
  }

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 2
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Email Submit</p>

      <form onSubmit={handleSubmit} className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Submit
        </button>
      </form>

      <p className="mt-6 min-h-6 text-center text-lg font-semibold text-indigo-600">
        {submittedEmail}
      </p>
    </section>
  )
}

export default EmailSubmit
