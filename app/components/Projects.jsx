import Card from "./Card"

const Projects = () => {

  return (
    <section id='projects' className=' w-full bg-[#E1F3F6] min-h-screen shadow-xl shadow-[#75dfe2] pb-12'>
      <div className="flex w-full mb-8 xl:mb-16">
        <h1 className="justify-center mx-auto pt-32 text-4xl font-extrabold tracking-wide">My Projects</h1>
      </div>

      <Card />

    </section>
  )
}

export default Projects