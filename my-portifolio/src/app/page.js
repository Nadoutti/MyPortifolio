import Image from "next/image";
import Sidebar from "../components/sidebar.js"
import Footer from "../components/footer.js"
import Socials from "../components/socials.js"

export default function Home() {
  return (
    <div className="
      w-screen
      flex
      justify-center
      items-center
      font-mono
      text-sky-50
      bg-[#0d0d0d]">
      <Sidebar/>
      <Socials/>
      <container className="
        w-11/12
        sm:w-4/5
        md:w-2/3
        lg:w-1/2
        bg-[#141414]
        p-4
        sm:p-6
        md:p-8
        mt-25
        mb-6
        rounded-md">
        {/* Div para mostrar as minhas habilidades como programador */}
        <section id="home">
          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            divide-y divide-solid md:divide-y-0
            md:divide-x md:divide-solid

            ">
            <div className="
              w-full
              md:w-1/2
              h-50
              flex
              flex-row
              gap-[2vw]">
              <div>
                <Image src="/minha_foto.jpg" alt="A foto nao carregou" width="150" height="150" className="
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
              w-full
              md:w-1/2
              md:ml-4
              h-50
              flex
              flex-col
              justify-between">
              <div>
                <h2 className="font-bold text-[30px]">What I deliver</h2>
              </div>
              <div className="
                text-[20px]
                pb-8
                pl-5
                pt-5
                ">
                <p className="text-left! mb-5 flex flex-row e">
                  <Image width="25" height="25" src="/whitecheckempty.png" alt="Check" className="
                    w-8
                    h-8
                    mr-4 ">
                  </Image>
                  <span className="font-[900]">
                    Fast 
                  </span>
                  Applications
                </p>
                <p className="flex mb-5 text-left">
                  Fair Price<Image width="25" height="25" src="/whitecheckempty.png" alt="Check" className="
                    w-8
                    h-8
                    ml-4
                    ">
                  </Image></p>
                <p className="text-left mb-5 flex flex-row">
                  <Image width="25" height="25" src="/whitecheckempty.png" alt="Check" className="
                    w-8
                    h-8
                    mr-4 ">
                  </Image>Quality guaranteed</p>
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
            <p> I&apos;m a developer based in Brazil currently in my third
              semester of Computer Science.
              I have experience with Next.js, FastAPI,
              data structuring and analysis,
              which allows me to build fast and scalable web and mobile applications.
              I&apos;m currently looking for freelance opportunities.
              I can create landing pages, custom social media bio link pages,
              portfolios, sales dashboards, and much more.</p>
          </div> 
        </section>



        {/* Div para mostrar os projetos que eu ja fiz */}

        <section id="projects">
          <div className="mt-10">
            <h1 className="text-[28px] font-bold mb-10 text-center">Latest Projects</h1>

            <div className="
              flex
              flex-col
              items-center      /* Centraliza os filhos verticalmente */
              gap-4
              lg:flex-row
              lg:justify-around
              ">
              <a href="/projects/guava" className="w-11/12">
                <img
                  src="/guava.png"
                  width="35"
                  height="35"
                  alt="A foto não carregou"
                  className="rounded-lg w-full object-cover  h-[200px] bg-[#292929]"
                />
                <p className="
                  text-center">Guava Project</p>
              </a>
              <a href="/projects/predictflow" className="w-11/12">
                <img
                  width="45"
                  height="35"
                  alt="A foto não carregou"
                  src="/predictflow.png"
                  className="rounded-lg object-cover w-full h-[200px] bg-[#292929]"
                />
                <p className="
                  text-center">Predictflow</p>
              </a>
              <a href="/projects/aipredict" className="w-11/12">
                <img
                  width="45"
                  height="35"
                  alt="A foto não carregou"
                  src="/salary prediction project.png"
                  className="rounded-lg object-cover w-full h-[200px] bg-[#292929]"
                />
                <p className="
                  text-center">Salary Prediction</p>
              </a>
            </div>
          </div>
        </section>


        {/* Essa parte vai servir para o footer do meu portifolio */}
        <section id="contact">
          <Footer/>
        </section>


      </container>
    </div>
  );
}
