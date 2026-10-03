const StudentInfo = () => {
  const student = {
    name: "Arun",
    age: 22,
    course: "React JS",
    city: "Chennai",
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Student Info</h1>
      <div className="p-4 bg-white shadow rounded space-y-1">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>City: {student.city}</p>
      </div>
    </div>
  );
};

export default StudentInfo;
