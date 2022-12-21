import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      {/* {for packgae.json} */}
      {/* "homepage": "https://anbesivamayam.github.io/Cloud-XL", */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />       
      </Routes>
    </>
  );
}

export default App;
