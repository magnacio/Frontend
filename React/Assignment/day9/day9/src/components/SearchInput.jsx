import { useState } from 'react'

const SearchInput = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 4
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Search Input</p>

      <label htmlFor="search" className="mt-6 block text-sm font-medium text-slate-600">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
        className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <p className="mt-6 text-center text-slate-700">
        You are searching for: <span className="font-semibold text-indigo-600">{query}</span>
      </p>
    </section>
  )
}

export default SearchInput
