import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LanguageList from "./components/LanguageList";
import CityList from "./components/CityList";
import CourseCards from "./components/CourseCards";
import StudentObject from "./components/StudentObject";
import EmployeeObject from "./components/EmployeeObject";
import ProductObject from "./components/ProductObject";
import StudentArray from "./components/StudentArray";
import ProductArray from "./components/ProductArray";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="flex flex-wrap gap-4 p-4 bg-slate-800 text-white">
        <Link to="/languages">Languages</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/student-object">Student Object</Link>
        <Link to="/employee-object">Employee Object</Link>
        <Link to="/product-object">Product Object</Link>
        <Link to="/students">Students</Link>
        <Link to="/products">Products</Link>
        <Link to="/employees">Employees</Link>
      </nav>

      <Routes>
        <Route path="/languages" element={<LanguageList />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/courses" element={<CourseCards />} />
        <Route path="/student-object" element={<StudentObject />} />
        <Route path="/employee-object" element={<EmployeeObject />} />
        <Route path="/product-object" element={<ProductObject />} />
        <Route path="/students" element={<StudentArray />} />
        <Route path="/products" element={<ProductArray />} />
        <Route path="/employees" element={<EmployeeTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
