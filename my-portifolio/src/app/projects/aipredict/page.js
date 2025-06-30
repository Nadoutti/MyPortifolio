import Image from "next/image";
import Footer from "../../../components/footer.js";



export default function GuavaPage() {
  return (
    <>

      <div>

        <img src="/salary prediction project.png" alt="Ai predict image" className="
          rounded-md"/>

        <h1 className="
          text-2xl 
          font-bold 
          mt-4
          w-full
          text-center">AI Predict</h1>

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
          mt-4">FastAPI · Next.js · Scikit-learn · Docker · Joblib</p>
        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Description</h2>
        <p className=" 
          text-left
          mt-4">AI Predict is a study-driven project focused on predicting data
          analyst salaries using a linear regression model.
          The goal was to gain a deeper understanding of machine learning fundamentals by building a complete 
          ML pipeline from training to deployment (locally).</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Project Goal</h2>
        <p className=" 
          text-left
          mt-4">Explore and solidify key machine learning concepts through hands-on experience with model training, serving, and integration.</p>


        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">My Contributions</h2>
        <p className=" 
          text-left
          mt-4">  -  Built a FastAPI backend to serve the trained ML model.<br/>

-  Used Scikit-learn to train a linear regression model for salary prediction.<br/>

-  Containerized the entire application using Docker for a modular and reproducible environment.<br/>

-  Developed a basic frontend in Next.js to interact with the prediction API.</p>

        <h2 className="
          mt-10
          text-[1.2rem]
          font-bold">Challenges</h2>
        <p className=" 
          text-left
          mt-4">  The main challenges included learning Docker from scratch and understanding the end-to-end
          lifecycle of training, saving, and serving a machine learning model effectively.</p>

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
          <a href="https://github.com/Nadoutti/Salary-Prediction" className="
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
