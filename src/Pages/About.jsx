function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* White Banner Section */}
      <div className="bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-6 text-slate-900 font-bold">About</h1>
          <p className="text-lg leading-relaxed text-slate-900">
            Hello! I'm Billy Tang, a student at Columbia University majoring in Economics and Political Science. 
            I have a passion for understanding the complexities of economic systems and political structures, 
            and I enjoy exploring how these fields intersect to shape our world. 
            In my free time, I love working on various projects that allow me to apply my knowledge and skills in real-world scenarios. 
            Feel free to explore my projects and journalism work showcased on this website!
          </p>
        </div>
      </div>

      {/* Row 1: First Three Images */}
      <div className="flex justify-center gap-8 p-12">
        <img 
          src="/AmityGang.JPG" 
          alt="Article 1"
          className="w-96 h-72 object-cover cursor-pointer rounded-lg shadow-2xl"
        />
        <img
          src="/HappyLamb.jpg"
          alt="Article 2"
          className="w-96 h-72 object-cover cursor-pointer rounded-lg shadow-2xl"
        />
        <img
          src="/AlexisGoof.jpg"
          alt="Article 3"
          className="w-96 h-72 object-cover cursor-pointer rounded-lg shadow-2xl"
        />
      </div>

      {/* Row 2: Fourth and Fifth Images Side by Side */}
      <div className="flex justify-center gap-8 pb-12">
        <img
          src="/BillyWalker.JPG"
          alt="Article 4"
          className="w-96 h-72 object-cover cursor-pointer rounded-lg shadow-2xl"
        />
        <img
          src="/Aura.png"
          alt="Article 5"
          className="w-96 h-72 object-cover cursor-pointer rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

export default About