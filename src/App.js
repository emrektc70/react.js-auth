import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const { open, data } = useSelector((state) => state.modal);

  return (
    <>
      <Toaster position="top-right" />
      {open && <Modal name={open} date={data} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
