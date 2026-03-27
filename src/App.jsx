import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className='bg-[#11071F] text-white flex flex-col min-h-screen'>

      <Navbar />

      <main className='flex-1'>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App