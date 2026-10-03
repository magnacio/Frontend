import StudentRegistrationForm from './components/StudentRegistrationForm'
import EmployeeDetailsForm from './components/EmployeeDetailsForm'

const App = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <h1 className="mx-auto mb-10 max-w-5xl text-center text-2xl font-bold text-slate-900">
        Object State Forms Assignment
      </h1>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
        <StudentRegistrationForm />
        <EmployeeDetailsForm />
      </div>
    </main>
  )
}

export default App
