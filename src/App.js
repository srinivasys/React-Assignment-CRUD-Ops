import Login from "./components/Login";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
