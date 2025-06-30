import Image from "next/image";
import Footer from "../../../components/footer.js";
import SideProjects from "../../../components/sideProjects.js";


export default function GuavaPage() {
  return (
    <>
      <SideProjects/>

      <div>

        <img src="/guava.png" className="
          rounded-md"/>

        <h1 className="
          text-2xl 
          font-bold 
          mt-4
          w-full
          text-center">The Guava Project</h1>

        <h2 className="
          mt-10
          text-2xl
          font-bold">About the project</h2>     

        <h2 className="
          mt-15
          text-[1.2rem]
          font-bold">Stack</h2>
        <p className=" 
          text-left
          mt-4">Flask · React · Solidity · Forge · Anvil</p>
        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Description</h2>
        <p className=" 
          text-left
          mt-4">Guava is an innovative platform designed to bring greater reliability,
          flexibility, and security to the freelance programming market by
          leveraging blockchain technology to guarantee payments and track project progress.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Project Goal</h2>
        <p className=" 
          text-left
          mt-4">Create a safer, more transparent environment for both freelancers and clients,
          using smart contracts to ensure fair deliveries and payments.</p>


        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">My Contributions</h2>
        <p className=" 
          text-left
          mt-4">  - Built the entire frontend interface using React.<br/>
          -  Developed the backend communication layer between clients and freelancers in Flask.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Challenges</h2>
        <p className=" 
          text-left
          mt-4">  The primary challenge was architecting smart contracts capable of monitoring project
          progress and automatically triggering payments, while maintaining trust and transparency for all parties.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Checkout the project!</h2>
        <div className="
          flex
          flex-row
          ">
          <Image src="/github.png" width="35" height="35" alt="Github" className="
            mt-6
            w-10
            h-10"/>
          <a href="https://github.com/Nadoutti" className="
            mt-7
            ml-6
            font-bold
            bg-white
            text-black
            rounded-full
            pt-2
            pl-4
            pr-4
            w-auto
            h-10
            transition-shadow
            duration-400
            hover:shadow-[0_0_15px_white]">Project repository</a>
        </div>
        <Footer />
      </div>
    </>

  );
}
