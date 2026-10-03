import NameInput from './components/NameInput'
import EmailSubmit from './components/EmailSubmit'
import AgeValidation from './components/AgeValidation'
import SearchInput from './components/SearchInput'

const App = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <h1 className="mx-auto mb-10 max-w-5xl text-center text-2xl font-bold text-slate-900">
        useState Form Assignment
      </h1>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-center">
        <NameInput />
        <EmailSubmit />
        <AgeValidation />
        <SearchInput />
      </div>
    </main>
  )
}

export default App
