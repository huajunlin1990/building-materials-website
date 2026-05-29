import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cases } from './pages/Cases'
import { News } from './pages/News'
import { Solutions } from './pages/Solutions'
import { Downloads } from './pages/Downloads'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/news" element={<News />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
