import { Layout } from './components/layout/Layout.jsx';
import { Home } from './pages/home/Home.jsx';
import { ProjectDetails } from './pages/projectDetails/ProjectDetails.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route path="/" element={ <Home /> }/>
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

