import{ Hero } from './components/sections/Hero.jsx';
import{ About } from './components/sections/About.jsx';
import{ Services } from './components/sections/Services.jsx';
import{ Skills } from './components/sections/Skills.jsx';
import{ Projects } from './components/sections/Projects.jsx';
import{ Contacts } from './components/sections/Contacts.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { ProjectDetails } from './components/sections/ProjectDetails.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Contacts />
              </>
            }
          />

         <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

