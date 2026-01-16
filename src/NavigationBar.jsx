import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './NavigationBar.css'

function NavigationBar(){
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Show navbar when at top (within 10px)
            if (currentScrollY < 10) {
                setIsVisible(true)
            }
            // Hide when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return(
        <nav className={isVisible ? 'navbar-visible' : 'navbar-hidden'}>
            <h1 id="name">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Billy Tang
                </Link>
            </h1>
            <div>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/journalism">Journalism</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar