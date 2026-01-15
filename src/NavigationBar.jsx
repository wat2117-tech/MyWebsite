import { Link } from 'react-router-dom'
import './NavigationBar.css'

function NavigationBar(){
    return(
           <>
              <nav>
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
           </>
    )
}

export default NavigationBar