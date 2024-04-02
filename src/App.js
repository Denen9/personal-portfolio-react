import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Footer from './components/Footer/Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config.js';

function App() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsRef = collection(db, "proyectos");
        const servicesRef = collection(db, "services");

        const [projectsSnapshot, servicesSnapshot] = await Promise.all([
          getDocs(projectsRef),
          getDocs(servicesRef)
        ]);

        const projectsData = projectsSnapshot.docs.map(doc => doc.data());
        const servicesData = servicesSnapshot.docs.map(doc => doc.data());

        setProjects(projectsData);
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} services={services} loading={loading} error={error} />}
        />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
