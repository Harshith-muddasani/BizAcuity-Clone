import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransitionWrapper from './components/PageTransitionWrapper'
import Home from './pages/Home'
import AtAGlance from './pages/AtAGlance'
import Services from './pages/Services'
import Platform from './pages/Platform'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/at-a-glance" 
            element={
              <PageTransitionWrapper>
                <AtAGlance />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageTransitionWrapper>
                <Services />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/platform" 
            element={
              <PageTransitionWrapper>
                <Platform />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/industries" 
            element={
              <PageTransitionWrapper>
                <Industries />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <PageTransitionWrapper>
                <Resources />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransitionWrapper>
                <Contact />
              </PageTransitionWrapper>
            } 
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App