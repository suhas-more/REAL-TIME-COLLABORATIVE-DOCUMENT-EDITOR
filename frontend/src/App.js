import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import { v4 as uuidV4 } from 'uuid';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/docs/:id" element={<Editor />} />
      </Routes>
    </Router>
  );
}

function HomeRedirect() {
  React.useEffect(() => {
    window.location.href = `/docs/${uuidV4()}`;
  }, []);
  return <div>Redirecting...</div>;
}
