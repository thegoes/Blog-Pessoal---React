import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './paginas/home/Home'
import Cadastro from './paginas/home/cadastro/Cadastro'
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App