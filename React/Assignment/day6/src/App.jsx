import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseList from "./components/CourseList";
import StudentInfo from "./components/StudentInfo";
import ProductList from "./components/ProductList";
import Employee from "./components/Employee";

const App = () => {
  const employeeData = {
    name: "Kavya",
    role: "Frontend Developer",
    salary: 45000,
    city: "Bangalore",
  };

  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-slate-800 text-white">
        <Link to="/courses">Courses</Link>
        <Link to="/student">Student</Link>
        <Link to="/products">Products</Link>
        <Link to="/employee">Employee</Link>
      </nav>

      <Routes>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/student" element={<StudentInfo />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/employee" element={<Employee employee={employeeData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
