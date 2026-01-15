import "./Journalism.css"
import image from "../assets/journalism-image.png"  // Fixed: Changed ".../assets" to "../assets"

export default function Journalism() { 
    return (
      <>
      <div className="flexbox-container">  {/* Fixed: Changed "class" to "className" */}
        <p id="name">Substack: The Z-List</p>  {/* Fixed: Removed space in id ="name" */}
        <img src={image} alt="react image" />
      </div>
      <div className="p-8 text-white bg-slate-900 min-h-screen">
        <h1 className="text-4xl">Journalism</h1>
      </div>
      </>
    )
}

// Removed duplicate: "export default Journalism" - you already have it at the top