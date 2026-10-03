const Student = () => {
  const studentName = "Arun";
  const age = 22;
  const course = "React JS";
  const isActive = true;
  const fees = 15000;

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white rounded-xl shadow-md space-y-2">
      <h1 className="text-xl font-bold text-slate-800 mb-4">Student Details</h1>

      <p className="text-slate-700">
        <span className="font-semibold">Student Name:</span> {studentName}
      </p>

      <p className="text-slate-700">
        <span className="font-semibold">Age:</span> {age}
      </p>

      <p className="text-slate-700">
        <span className="font-semibold">Course:</span> {course}
      </p>

      <p className="text-slate-700">
        <span className="font-semibold">Status:</span>{" "}
        <span className={isActive ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </p>

      <p className="text-slate-700">
        <span className="font-semibold">Fees:</span> {fees}
      </p>
    </div>
  );
};

export default Student;
