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
      <div className="min-h-screen relative z-10">
      <div className="flex flex-col items-center justify-center pt-20 px-64 bg-slate-900 bg-opacity-80 backdrop-blur-sm pb-12">
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
              fontWeight: '400',
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
        <div className="max-w-xl mx-auto py-20 px-12">
          <h2 className ="text-3xl font-bold text-white text-center mb-8">Professional Journalism</h2>
          <p className="text-lg text-white text-center">
            In addition to my personal writing, I have contributed articles to various publications, covering topics such as technology, culture, and social issues. My work aims to inform and engage readers while providing thoughtful analysis and perspectives.
          </p>
        </div>
        <div className ="max-w-6xlmx-auto py-20 px-8 pb-32">
         <h2 className ="text-4xl font-bold text-white text-center mb-16">More Articles</h2>
         <div className ="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*Article 1*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://www.usatoday.com/story/opinion/voices/2024/04/17/ai-students-cheating-plagiarism-grammarly/73223779007/" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/USAToday.png" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">She used Grammarly to proofread her paper. Now she's accused of 'unintentionally cheating.'
</h3>
              <p className="text-slate-800 leading-relaxed">Whatever my school's rule is on artificial intelligence, I will abide by it. But the concern over Grammarly makes me think of the debate over calculator use in schools from the 1970s.
.</p>
            </div>
          </div>
          {/*Article 2*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://www.usnews.com/opinion/articles/2024-07-03/ten-commandments-signs-in-schools-are-wrong-but-students-like-me-dont-pay-attention-to-classroom-posters-anyway" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/Ten Commandments.jpg" 
              alt="Article 2"
              className="w-full h-48 object-cover"
            />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Ten Commandments Signs in Schools Are Wrong. But Students Like Me Don't Pay Attention to Classroom Posters Anyway
                </h3>
              <p className="text-slate-800 leading-relaxed">The blurring of church and state in schools is alarming, but we should work to change laws, not worry about posters that many will brush off anyway.

              </p>
            </div>
          </div>
          {/*Article 3*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://www.usnews.com/opinion/articles/2024-09-10/what-trump-and-harris-could-learn-from-high-school-debaters" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/TrumpHarris.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">What Trump and Harris Could Learn From High School Debaters.</h3>
              <p className="text-slate-800 leading-relaxed">The first rule of Debate Club is no pundits.</p>
            </div>
          </div>
          {/*Article 4*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://thefulcrum.us/election-2024/harris-walz-gen-z" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/KamalaHQ.jpg" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Don't meme it: Harris/Walz must address Gen Z's real concerns to win.</h3>
              <p className="text-slate-800 leading-relaxed">But memes are not enough to win over younger voters like me. They’re great, don’t get me wrong, but people don’t often take their political views from deep-fried images.</p>
            </div>
          </div>
          {/*Article 5*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://www.inquirer.com/opinion/commentary/march-madness-online-gambling-teens-zoomers-20250404.html" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/Gambling.png" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6"> 
              <h3 className="text-2xl font-bold text-black mb-2">Online gambling puts tech-savvy teens at risk
</h3>
              <p className="text-slate-800 leading-relaxed">The prevalence and aggressive advertising by online gambling sites represent a new public health problem for Gen Z.</p>
            </div>
          </div>
          {/*Article 6*/}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
            <a 
              href="https://www.floridatoday.com/story/opinion/2025/03/06/17-states-passed-laws-protecting-student-journalists/81370144007/" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <img 
              src="/StuJournalist.png" 
              alt="Article 1"
              className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Florida needs to protect student journalists | Opinion</h3>
              <p className="text-slate-800 leading-relaxed">Since 2023, almost 2.5 newspapers have closed daily, with the U.S. losing almost a third of all newspapers since 2005. Journalists are losing their jobs; it’s almost impossible to keep up with the firings or “restructurings.” The news industry is shrinking and the defense against that isn’t some new grant from the Craig Newmark Foundation.</p>
            </div>
          </div>
         </div>
        </div>
      </div>
      </div>      
    )
}