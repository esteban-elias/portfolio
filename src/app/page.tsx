export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-5">
      {/* Profile section */}
      <section className="w-full h-[30rem] sm:h-80 flex flex-col sm:flex-row justify-center items-center sm:gap-16 sm:mt-16">
        <div className="w-48 h-48 sm:w-56 sm:h-56">
          <img
            src="/profile-picture.jpeg"
            alt="Foto perfil Esteban Castillo"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-montserrat font-bold text-2xl sm:text-4xl mt-4 sm:mt-0">
            Esteban Castillo
          </h1>
          <p className="max-w-sm text-sm sm:text-lg text-justify hyphens-auto sm:text-left mt-4">
            Analista Programador y estudiante de Ingeniería Informática.
            Interesado en el Desarrollo Web.
          </p>
          <ul className="w-full text-sm sm:text-lg mt-4 sm:mt-4">
            <li>Curriculum</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>esteban.castillo.contact@gmail.com</li>
          </ul>
        </div>
      </section>

      {/* Projects section */}
      <section className="flex flex-col w-full grow sm:mt-12">
        <h2 className="font-montserrat font-bold text-2xl">
          Proyectos
        </h2>
        {proyects.map((proyect, index) => (
          <article
            key={proyect.id}
            className={`sm:h-60 flex flex-col sm:flex-row sm:items-center ${
              index == 0 ? 'mt-9 sm:mt-10' : 'mt-20'
            } sm:gap-6 rounded`}
          >
            <img
              src={proyect.image}
              alt={`Imagen del proyecto ${proyect.name}`}
              className="object-cover w-full sm:w-1/2 aspect-[3/2] rounded"
            />
            <div className="sm:w-1/2">
              <div className="mt-2">
                <h3 className="font-montserrat font-bold text-xl mt-6">
                  {proyect.name}
                </h3>
                <p className="mt-3">{proyect.description}</p>
                <div className="mt-3">
                  {proyect.techStack.join(' - ')}
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <button className="bg-gray-300 px-4 py-2 rounded">
                  <a href={proyect.demoUrl}>Demo</a>
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded">
                  <a href={proyect.repoUrl}>Repo</a>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Contact section */}
      <section></section>
    </main>
  );
}

const proyects = [
  {
    id: 1,
    name: 'Proyecto 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 2,
    name: 'Proyecto 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 3,
    name: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 4,
    name: 'Proyecto 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 5,
    name: 'Proyecto 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 6,
    name: 'Proyecto 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
];
