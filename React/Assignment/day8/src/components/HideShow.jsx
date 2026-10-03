import { useState } from 'react'

const HideShow = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => setVisible((prev) => !prev)

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 3
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Hide and Show</p>

      <div className="mt-8 flex h-12 items-center justify-center">
        {visible && (
          <p className="text-xl font-semibold text-slate-800">
            This content can be toggled.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={toggleVisible}
        className="mt-8 w-full rounded-lg bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-900 active:scale-95"
      >
        {visible ? 'Hide' : 'Show'}
      </button>
    </section>
  )
}

export default HideShow
