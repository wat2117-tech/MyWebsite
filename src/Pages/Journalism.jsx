import "./Journalism.css"
import substackImage from "../assets/journalism-image.png"

export default function Journalism() { 
    const timelineItems = [
      {
        year: "Dec 22nd 2025",
        title: "A Pragmatic Defense of the Liberal Arts",
        description: "Getting the use out of so-called 'useless' degrees",
        image: "/LiberalArts.jpeg"  // Correct path for public folder
      },
      {
        year: "Dec 31st 2025",
        title: "A Luddite's Revenge: On the Emerging Authentication Economy and Why being a Person is now Artisnal",
        description: "Or Why the Point of 'For Humans, By Humans' is having Someone to Blame when Things go Wrong.",
        image: "/Luddites.jpg" // Correct path for src assets"
      },
      {
        year: "Jan 7th 2025",
        title: "Ten Trends I'm Keeping my Eye on in 2026",
        description: "Because I have to Justify my Doom-scrolling with Something. That and My Observations as a Columbia Freshmen Seeing His Peers Navigate Systemic Collapse in Real Time",
        image: "/Top Ten Trends.png"
      }
    ];

    return (
      <div className="min-h-screen bg-slate-900">
        <div className="flex flex-col items-center justify-center pt-20 px-64">
          <h1 className="text-4xl text-white mb-8">Journalism</h1>
          <p 
            className="text-2xl text-white mb-6, px-85" 
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
              fontWeight: '800'
            }}
          > 
            Substack: The Z-List
          </p>
          <a 
            href="https://substack.com/@billytang1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src={substackImage}  // CHANGED: was {image}, now {substackImage}
              alt="The Z-List Substack" 
              className="max-w-4xl w-full h-auto rounded-lg shadow-2xl"
            />
          </a>
          <p 
            className="text-lg text-white mt-6 max-w-4xl text-center" 
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
              fontWeight: '400'
            }}
          >
            The Z-List is a Substack newsletter where I share my thoughts on current events, politics, and culture.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto py-20 px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Recent Posts</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div 
                    key={index}
                    className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 relative`}
                  >
                    {/* Content Side */}
                    <div className="w-5/12 flex justify-end">
                      <div className={`${isLeft ? 'text-right' : 'text-left'} transform transition-all duration-500 hover:scale-105`}>
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
                          <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                          <h3 className="text-2xl font-bold text-black mt-2 mb-3">{item.title}</h3>
                          <p className="text-slate-30 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center Circle */}
                    <div className="w-2/12 flex justify-center z-10">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg transform transition-all duration-300 hover:scale-150"></div>
                    </div>
                    
                    {/* Image Side */}
                    <div className="w-5/12">
                      <div className="transform transition-all duration-500 hover:scale-105 hover:rotate-2">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="rounded-2xl shadow-2xl w-full h-64 object-cover border-4 border-white border-opacity-20"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto py-20px-8">
          <h2 className ="text-3xl font-bold text-white text-center mb-8">Professional Journalism</h2>
          <p className="text-lg text-white text-center">
            In addition to my personal writing, I have contributed articles to various publications, covering topics such as technology, culture, and social issues. My work aims to inform and engage readers while providing thoughtful analysis and perspectives.
          </p>
        </div>
        <div className ="max-w-6xlmx-autopy-20 px-8 pb-32">
         <h2 className ="text-4xl font-bold text-white text-center mb-16">More Articles</h2>
         <div className ="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*Article 1*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://your-article-url-here.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/your-image-1.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 1</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
          {/*Article 2*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <img 
              src="/your-image-2.jpg" 
              alt="Article 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 2</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
          {/*Article 3*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://your-article-url-here.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/your-image-1.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 3</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
          {/*Article 4*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://your-article-url-here.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/your-image-1.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 4</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
          {/*Article 5*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://your-article-url-here.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/your-image-1.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6"> 
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 5</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
          {/*Article 6*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://your-article-url-here.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/your-image-1.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Article Title 6</h3>
              <p className="text-slate-300 leading-relaxed">A brief description of the article content goes here.</p>
            </div>
          </div>
         </div>
        </div>
      </div>      
    )
}