import { useState } from 'react'

const TextChange = () => {
  const [text, setText] = useState('Hello React')

  const changeText = () => setText('Welcome to React')

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Task 2
      </h2>
      <p className="mt-1 text-lg font-semibold text-slate-800">Text Change</p>

      <p className="mt-8 text-center text-2xl font-semibold text-indigo-600">
        {text}
      </p>

      <button
        type="button"
        onClick={changeText}
        className="mt-8 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
      >
        Change Text
      </button>
    </section>
  )
}

export default TextChange
