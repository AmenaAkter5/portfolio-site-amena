import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='*' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
