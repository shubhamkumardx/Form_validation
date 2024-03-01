import logo from "./logo.svg";
import "./App.css";
import Formvalidation from "./Components/Validations/Formvalidation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubmitFormData from "./Components/Validations/SubmitFormData";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Formvalidation />} />
          <Route exact path="/Submitdata" element={<SubmitFormData/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
