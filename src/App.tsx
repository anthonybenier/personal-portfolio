import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails").then(module => ({ default: module.ProjectDetails })));

import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
    </Router>
  );
}

export default App;
