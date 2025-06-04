import Image from "next/image";
import Sidebar from "../components/sidebar.js"

export default function Home() {
  return (
    <div className="
      w-screen
      h-screen
      flex
      justify-center
      items-center
      font-mono">
      <Sidebar/>
      <container className="
        w-1/2
        h-auto
        bg-[#141414]
        p-8
        mt-40
        rounded-md">
        {/* Div para mostrar as minhas habilidades como programador */}
        <section id="home">
          <div className="
            flex
            flex-row
            items-center
            justify-center
            divide-x-1 divide-solid">
            <div className="
              w-1/2
              h-50
              flex
              flex-row
              gap-[2vw]">
              <div>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg"/>
              </div>
              <div className="
                ">
                <h2 className="
                  font-bold
                  text-[28px]
                  mb-10">
                  Pedro Nadotti</h2>
                <p className="
                  text-[20px]">
                  1 Year of experience</p>
              </div>
            </div>

            <div className="
              text-right
              w-1/2
              h-50
              flex
              flex-col
              justify-between">
              <div>
                <h2 className="font-bold text-[30px]">Full Stack</h2>
              </div>
              <div className="
                text-[20px]
                pb-8
                pl-5
                pt-5
                ">
                <p className="text-right mb-5 flex flex-row e">
                  <img width="25" height="25" src="whitecheckempty.png" className="
                    w-8
                    h-8
                    mr-4 ">
                  </img>
                  <span className="font-[900]">
                    Fast 
                  </span>
                  Applications
                </p>
                <p className="flex mb-5 justify-end">
                  Fair Price<img width="25" height="25" src="whitecheckempty.png" className="
                    w-8
                    h-8
                    ml-4
                    ">
                  </img></p>
                <p className="text-right mb-5 flex flex-row">
                  <img width="25" height="25" src="whitecheckempty.png" className="
                    w-8
                    h-8
                    mr-4 ">
                  </img>Quality guaranteed</p>
              </div>
            </div>
          </div>
        </section>


        {/* Parte do about me */}
        <section id="about">
          <div className="mt-10">
            <h1 className="
              text-[28px]
              font-bold
              mb-10">About Me</h1>
            <p> I'm a developer based in Brazil currently in my third
              semester of Computer Science.
              I have experience with Next.js, FastAPI,
              data structuring and analysis,
              which allows me to build fast and scalable web and mobile applications.
              I'm currently looking for freelance opportunities.
              I can create landing pages, custom social media bio link pages,
              portfolios, sales dashboards, and much more.</p>
          </div> 
        </section>



        {/* Div para mostrar os projetos que eu ja fiz */}
        <section id="projects">
          <div className="mt-10">
            <h1 className="text-[28px] font-bold mb-10">Latest Projects</h1>
            <div className="
              flex
              flex-row
              justify-around">

              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>
              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>
              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>
            </div>

            <div className="
              flex
              flex-row
              justify-around
              mt-5">
              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>
              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>
              <a>
                <img src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
                  rounded-lg
                  w-[250px]
                  h-[150px]"/>
              </a>

            </div>
          </div>
        </section>


      </container>
    </div>
  );
}
