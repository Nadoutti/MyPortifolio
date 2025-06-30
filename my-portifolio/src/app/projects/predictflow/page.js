import Image from "next/image";
import Footer from "../../../components/footer.js";


export default function PredictflowPage() {
  return (
    <>

      <div>

        <img src="/predictflow.png" alt="Predict Flow page" className="
          rounded-md"/>

        <h1 className="
          text-2xl 
          font-bold 
          mt-4
          w-full
          text-center">Predict Flow</h1>

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
          mt-4">FastAPI · Next.js · OpenAI API</p>
        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Description</h2>
        <p className=" 
          text-left
          mt-4">Predict Flow is an internal application built for a confidential technology company
          to streamline the product purchasing workflow. The platform allows employees to track product 
          stages, forecast the arrival of new items,
          view responsible teams and individuals, and monitor the overall 
          status of each product in the pipeline.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Project Goal</h2>
        <p className=" 
          text-left
          mt-4">Provide a clear, real-time overview of the product
          acquisition and delivery process, improving organization and predictability 
          across teams.</p>


        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">My Contributions</h2>
        <p className=" 
          text-left
          mt-4">-  Developed all backend CRUD operations using FastAPI.<br/>
                -  Helped implement user authentication.<br/>
                -  Contributed to various frontend interface components using Next.js.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Challenges</h2>
        <p className=" 
          text-left
          mt-4">The main challenge was understanding and structuring the company data originated from their database.</p>

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
          <a href="https://github.com/Nadoutti/frontend-triunfantes" className="
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
            hover:shadow-[0_0_15px_white]">Frontend repository</a>
        </div>
        <div className="
          flex
          flex-row
          ">
          <Image src="/github.png" width="35" height="35" alt="Github" className="
            mt-6
            w-10
            h-10"/>
          <a href="https://github.com/Nadoutti/backend-triunfantes-fork" className="
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
            hover:shadow-[0_0_15px_white]">Backend repository</a>
        </div>
        <Footer />
      </div>
    </>

  );
}
