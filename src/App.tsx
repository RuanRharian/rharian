import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Loja from "./pages/Loja";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/loja" element={<Loja />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
