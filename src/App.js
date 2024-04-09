import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Footer from './components/Footer/Footer';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Importa deleteDoc y doc
import { db } from './firebase/config.js';
import Contact from './pages/Contact/Contact.jsx';


export const deleteProject = async (projectId) => {
  try {
    await deleteDoc(doc(db, "proyectos", projectId)); // Elimina el documento dentro de la colección "proyectos"
    console.log('Proyecto eliminado exitosamente');
  } catch (error) {
    console.error('Error al eliminar el proyecto:', error);
  }
};

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

        const projectsData = projectsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })); // Incluye el ID del documento en el objeto
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
          element={<Home projects={projects} services={services} loading={loading} error={error} deleteProject={deleteProject} />}
        />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
