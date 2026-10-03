const Student = () => {
  const students = [
    { name: "Arun", age: 22, course: "React JS" },
    { name: "Priya", age: 16, course: "Web Design" },
    { name: "Karthik", age: 15, course: "Java Basics" },
    { name: "Divya", age: 24, course: "Full Stack" },
    { name: "Ram", age: 17, course: "Python Basics" },
    {name: "Sita", age: 19, course: "Data Science" },
    {name: "Ravi", age: 14, course: "Machine Learning" },
    {name: "Anita", age: 20, course: "UI/UX Design" },
    {name: "Vikram", age: 13, course: "Cybersecurity" },
    {name: "Meera", age: 18, course: "Cloud Computing" },
  ];

  const minors = students.filter((s) => s.age <= 18);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Students Below 18</h1>

      {minors.map((s, index) => (
        <div key={index} className="p-4 mb-3 bg-black text-blue-800  gap-2 flex content-between w-1/2 shadow rounded">
          <p>Name: {s.name}</p>
          <p>Age: {s.age}</p>
          <p>Course: {s.course}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;