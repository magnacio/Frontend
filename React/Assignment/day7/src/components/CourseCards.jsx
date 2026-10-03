const CourseCards = () => {
  const courses = ["React JS", "Node JS", "MongoDB", "Express JS", "Tailwind CSS"];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-2 gap-3">
        {courses.map((course, index) => (
          <div key={index} className="p-4 bg-white shadow rounded text-center">
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
