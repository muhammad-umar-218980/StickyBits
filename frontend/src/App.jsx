import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ViewNote from "./pages/ViewNote.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<ViewNote />} />
      </Routes>
    </div>
  );
};

export default App;
