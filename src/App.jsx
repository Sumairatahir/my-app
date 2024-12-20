import logo from './logo.svg';
import './App.css';
import { ExternalLink } from 'lucide-react'

function App() {
  return (
    <div className='text-2xl'>
     <div className="min-h-screen bg-gray-400 text-gray-800 font-sans">
     <header className="bg-gray-500 text-white p-3 top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SUMAIRA TAHIR</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img 
              src="./Images/mepic.png" 
              alt="sumaira tahir" 
              className="w-48 h-43 rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-center">
               I am SUMAIRA TAHIR,student at GIAIC with background in arts.recently i completed typescript and now diving in to web development.<thead></thead>
            </p>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              
              { title: "countdown timer", description: "A countdown timer", link: "#" },
              { title: "Task Manager", description: "A productivity app built with React and Firebase", link: "#" }
            ].map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-indigo-900 hover:underline flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[ "JavaScript", "Node.js", "HTML5", "CSS3", "TypeScript", "Git", ].map((skill, index) => (
                <li key={index} className="bg-gray-200 rounded-full px-4 py-2 text-center">{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="bg-gray shadow-md rounded-lg p-6">
            <p className="text-lg mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-2">
              <a href="mailto:john.doe@example.com" className="flex items-center text-blue-900 hover:underline">
                sumairatahir929@gmail.com
              </a>
              <a href="https://github.com/sumairatahir" className="flex items-center text-blue-900 hover:underline">
                 github.com/
              </a>
              <a href="https://linkedin.com/in/Sumaira Tahir" className="flex items-center text-blue-900hover:underline">
                linkedin.com/in/
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-500 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 sumaira tahir. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;