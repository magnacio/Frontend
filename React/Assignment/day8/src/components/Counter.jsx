import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 1
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Counter</p>

      <p className="mt-6 text-center text-6xl font-bold text-slate-900 tabular-nums">
        {count}
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={decrement}
          className="rounded-lg bg-rose-50 px-4 py-2 font-medium text-rose-600 transition hover:bg-rose-100 active:scale-95"
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-600 transition hover:bg-slate-200 active:scale-95"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={increment}
          className="rounded-lg bg-emerald-50 px-4 py-2 font-medium text-emerald-600 transition hover:bg-emerald-100 active:scale-95"
        >
          Increment
        </button>
      </div>
    </section>
  )
}

export default Counter
