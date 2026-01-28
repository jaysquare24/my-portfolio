import{ Hero } from './components/sections/Hero.jsx';
import{ About } from './components/sections/About.jsx';
import{ Services } from './components/sections/Services.jsx';
import{ Skills } from './components/sections/Skills.jsx';
import{ Projects } from './components/sections/Projects.jsx';
import{ Contacts } from './components/sections/Contacts.jsx';
import { Layout } from './components/layout/Layout.jsx';
import './styles/app.css'
function App() {

  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contacts />
      </Layout>
    </div>
  )
}

export default App
