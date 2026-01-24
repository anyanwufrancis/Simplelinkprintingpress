import { Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
// import About from "./Components/about/About";
import Service from "./Components/Service"
// import Contact from "./Components/Contact";
// import { Work } from "./Components/work";

function AppContent() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Service" element={<Service />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
