import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './utils/routes'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Error from './pages/Error'
import Layout from './layouts/Layout'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.projects} element={<Projects/>}/>
        <Route path={routes.skills} element={<Skills/>}/>
        <Route path={routes.notFound} element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
