import Image from 'next/image'
import Link from 'next/link'

const IconCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
)

const IconBriefcase = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
)

const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
)
const IconHobby = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 6a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
)
export default function EcoPortfolio() {
  return (
      <div className="min-h-screen bg-black text-gray-300">
        <header className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">E-CV</h1>
        </header>

          <main className="container mx-auto p-4">
              <section className="mb-12 text-center">
                  <Image
                      src="/assets/img/Axel.jpg"
                      alt="Profile"
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 border-2 border-green-400"
                  />
                  <h2 className="text-3xl font-bold mb-2 text-green-400">Axel Poteau</h2>
                  <p className="text-xl mb-4 text-gray-400">Développeur Full Stack</p>
                  <div className="max-w-2xl mx-auto bg-gray-900 p-4 rounded-lg border border-gray-800">
                      <p className="text-sm">
                          Passionné par le développement et la technologie, je suis un développeur full stack
                          engagé dans la création de solutions numériques .
                      </p>
                  </div>
              </section>

              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                      <IconCode/> <span className="ml-2">Compétences</span>
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['JavaScript', 'TypeScript', 'C#', '.Net', 'Angular', 'Python', 'Java', 'Microsoft Sql server', 'PHP'].map((skill) => (
                          <li key={skill} className="bg-gray-900 p-2 rounded border border-gray-800">
                              {skill}
                          </li>
                      ))}
                  </ul>
              </section>

              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                      <IconBriefcase/> <span className="ml-2">Projets</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                          {name: 'CSkinGuess', desc: 'Mini jeu basé sur les cosmetiques de Counter-strike'},
                          {name: 'Fractals', desc: 'Outil de génération d\'images fractals'},
                          {name: 'Raytracing', desc: 'Outil de génération de rayon sur image'},
                          {name: 'Marathon web', desc: 'Un marathon de 48h visant à développé un site web en équipe'},
                      ].map((project) => (
                          <div key={project.name} className="bg-gray-900 p-4 rounded border border-gray-800">
                              <h4 className="font-bold mb-2 text-green-400">{project.name}</h4>
                              <p>{project.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>

              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                      <IconHobby/> <span className="ml-2">Hobbies</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                          {
                              name: 'Jeux Vidéo',
                              desc: 'Passionné par l\'exploration de mondes virtuels et les défis compétitifs.'
                          },
                          {
                              name: 'Informatique',
                              desc: 'Toujours en quête de nouvelles technologies et d\'innovations.'
                          },
                          {
                              name: 'Lutherie',
                              desc: 'Artisan de guitares, créant des instruments avec soin et précision.'
                          },
                          {
                              name: 'Guitare & Musique',
                              desc: 'Jouer de la guitare est une façon de m\'exprimer à travers la musique.'
                          }
                      ].map((hobby) => (
                          <div key={hobby.name} className="bg-gray-900 p-4 rounded border border-gray-800">
                              <h4 className="font-bold mb-2 text-green-400">{hobby.name}</h4>
                              <p>{hobby.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>


              <section>
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                      <IconMail/> <span className="ml-2">Contact</span>
                  </h3>
                  <p>N'hésitez pas à me contacter pour discuter de différents projets !</p>
                  <Link href="mailto:axelpoteau19@gmail.com"
                        className="inline-block mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                      M'envoyer un email
                  </Link>
              </section>
          </main>

          <footer className="container mx-auto p-4 text-center text-sm text-gray-500">
              <p>Conçu avec ❤️ pour la planète.</p>
          </footer>
      </div>
  )
}