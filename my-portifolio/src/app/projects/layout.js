import SideProjects from "../../components/sideProjects.js"

export default function ProjectsLayout({ children }) {
  return (
    <div
      className="
        w-screen
        flex
        justify-center
        items-center
        font-mono
        text-sky-50
        bg-[#0d0d0d]
        min-h-screen
      "
    >
      <SideProjects/>
      <div
        className="
          w-11/12
          sm:w-4/5
          md:w-2/3
          lg:w-1/2
          bg-[#141414]
          p-4
          sm:p-6
          md:p-8
          mt-[100px]
          mb-6
          rounded-md
        "
      >
        {children}
      </div>
    </div>
  );
}

