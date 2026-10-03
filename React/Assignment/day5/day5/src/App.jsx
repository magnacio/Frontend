import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/Student";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
