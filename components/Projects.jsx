import Card from "./Card"


const Projects = () => {
  return (
    <section id='projects' className=' w-full bg-[#E1F3F6] min-h-screen'>
      <div className="flex w-full mb-8 xl:mb-16">
        <h1 className="justify-center mx-auto pt-32 text-4xl font-extrabold">My Projects</h1> 
      </div>

      <Card />

{/* use card for each project each having github and link and tech stack */}

    </section>
  )
}

export default Projects