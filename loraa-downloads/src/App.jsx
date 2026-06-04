import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InstallGuide from "./pages/InstallGuide";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-bg">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/install" element={<InstallGuide />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
