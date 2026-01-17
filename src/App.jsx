import { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Journalism from "./Pages/Journalism"
import { Routes, Route, HashRouter } from "react-router-dom";
import resume from "./assets/resume.pdf"
import headshot from "./assets/headshot.jpg"
import Footer from './Footer'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <HashRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Journalism" element={<Journalism />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}  

function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [name, setName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullName = 'Billy Tang'
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setName(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Keep cursor blinking for 2 seconds after typing finishes, then hide it
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 150)
    
    return () => clearInterval(typingInterval)
  }, [])
  
  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530) // Blink speed
    
    return () => clearInterval(cursorInterval)
  }, [])
  
  return (
    <>
      <div className="flex min-h-screen relative overflow-hidden">
        {/* Animated Metallic Wave Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-700 to-transparent animate-pulse" 
                 style={{ animationDuration: '4s' }} />
          </div>
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.9">
                  <animate attributeName="stop-color" 
                    values="#94a3b8;#cbd5e1;#94a3b8" 
                    dur="6s" 
                    repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="#e2e8f0" stopOpacity="0.7">
                  <animate attributeName="stop-color" 
                    values="#e2e8f0;#f8fafc;#e2e8f0" 
                    dur="5s" 
                    repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#64748b" stopOpacity="0.8">
                  <animate attributeName="stop-color" 
                    values="#64748b;#94a3b8;#64748b" 
                    dur="7s" 
                    repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="#cbd5e1" stopOpacity="0.6">
                  <animate attributeName="stop-color" 
                    values="#cbd5e1;#e2e8f0;#cbd5e1" 
                    dur="5.5s" 
                    repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.9">
                  <animate attributeName="stop-color" 
                    values="#94a3b8;#cbd5e1;#94a3b8" 
                    dur="6s" 
                    repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <filter id="metallic-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            
            <path fill="url(#metallic-gradient)" filter="url(#metallic-blur)">
              <animate attributeName="d" 
                dur="15s" 
                repeatCount="indefinite"
                values="
                  M0,400 Q250,300 500,350 T1000,400 L1000,1000 L0,1000 Z;
                  M0,450 Q250,350 500,400 T1000,450 L1000,1000 L0,1000 Z;
                  M0,350 Q250,450 500,300 T1000,350 L1000,1000 L0,1000 Z;
                  M0,400 Q250,300 500,350 T1000,400 L1000,1000 L0,1000 Z
                " />
            </path>
            
            <path fill="url(#metallic-gradient)" opacity="0.5" filter="url(#metallic-blur)">
              <animate attributeName="d" 
                dur="12s" 
                repeatCount="indefinite"
                values="
                  M0,500 Q250,400 500,450 T1000,500 L1000,1000 L0,1000 Z;
                  M0,450 Q250,550 500,400 T1000,450 L1000,1000 L0,1000 Z;
                  M0,550 Q250,450 500,500 T1000,550 L1000,1000 L0,1000 Z;
                  M0,500 Q250,400 500,450 T1000,500 L1000,1000 L0,1000 Z
                " />
            </path>
            
            <path fill="url(#metallic-gradient)" opacity="0.3" filter="url(#metallic-blur)">
              <animate attributeName="d" 
                dur="18s" 
                repeatCount="indefinite"
                values="
                  M0,600 Q250,500 500,550 T1000,600 L1000,1000 L0,1000 Z;
                  M0,550 Q250,650 500,500 T1000,550 L1000,1000 L0,1000 Z;
                  M0,650 Q250,550 500,600 T1000,650 L1000,1000 L0,1000 Z;
                  M0,600 Q250,500 500,550 T1000,600 L1000,1000 L0,1000 Z
                " />
            </path>
          </svg>
        </div>
        
        {/* Resume Slide-out Panel */}
        <div 
          className={`fixed top-0 left-0 h-full bg-neutral-800 p-8 z-50 transition-transform duration-300 ease-in-out ${
            isResumeOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ width: '50vw' }}
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>Resume</h2>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </div>
            <iframe
              src={resume}
              title="Billy Tang Resume"
              className="w-full flex-1 rounded-lg bg-white"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex items-center justify-center p-25 relative z-10">
          <div className="max-w-2xl w-full bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
            <img 
              src={headshot} 
              alt="Billy Tang" 
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-200 shadow-lg mx-auto"
            />
            <h1 className="text-7xl font-light mb-2 tracking-tight text-center" style={{ fontFamily: 'Arial, bold', minHeight: '5.5rem' }}>
              {name}
              <span style={{ opacity: showCursor && name.length < fullName.length ? 1 : 0 }}>|</span>
            </h1>
            <div className="h-px w-48 bg-black mb-8 mx-auto" />
            <p className="text-lg mb-1 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Student at Columbia University</p>
            <p className="text-lg mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Economics · Political Science</p>
            
            <div className="flex justify-center items-center gap-8 mt-6">
              <button 
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="bg-neutral-800 text-white px-8 py-3 rounded-lg hover:bg-neutral-700 transition-all shadow-lg font-medium tracking-wider uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                RESUME
              </button>
            </div>
          </div>
        </div>
       
        {/* Overlay when resume is open */}
        {isResumeOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsResumeOpen(false)}
          />
        )}
      </div>
    </>
  )
}

export default App