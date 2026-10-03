const StudentArray = () => {
  const students = [
    { id: 1, name: "Arun", age: 22, course: "React JS" },
    { id: 2, name: "Priya", age: 21, course: "Java" },
    { id: 3, name: "Karthik", age: 23, course: "Python" },
    { id: 4, name: "Divya", age: 20, course: "MERN Stack" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Students</h1>
      <div className="space-y-3">
        {students.map((student) => (
          <div key={student.id} className="p-4 bg-white shadow rounded">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentArray;
