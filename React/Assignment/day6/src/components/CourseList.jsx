const CourseList = () => {
  const courses = ["React JS", "Java Full Stack", "Python", "Data Science", "UI/UX Design"];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Course List</h1>
      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li key={index} className="p-3 bg-white shadow rounded">
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
