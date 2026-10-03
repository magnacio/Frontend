import React from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showdata, setShowdata] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleClick = () => {
    const obj=({id: Date.now(), name, age})
    const arr=[... showdata]
    setShowdata(arr)
    alert("Successfully Saved")
  }

  return (
    
    <div>
      <input type="text" onChange={handleNameChange} placeholder='Enter your name' />
      <input type="text" onChange={handleAgeChange} placeholder='Enter your age' />
      <button onClick={handleClick}>Click to Login</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {showdata.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App