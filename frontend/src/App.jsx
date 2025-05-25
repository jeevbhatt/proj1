import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<SinglePage />} />
        <Route path="/books/:id/edit" element={<EditPage />} />
        <Route path="/create-page" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
