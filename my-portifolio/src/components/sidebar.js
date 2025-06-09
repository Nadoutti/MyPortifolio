// components/Sidebar.tsx
const Sidebar = () => {
  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <aside className="
      fixed 
      top-2
      w-11/12
      h-auto
      py-6
      rounded-md
      flex 
      flex-row 
      items-center 
      justify-around 
      bg-[#292929]
      text-white 
      lg:w-40
      lg:flex-col
      lg:h-70 
      lg:top-30 
      lg:left-60 
      lg:flex-col
      lg:space-y-6">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className="hover:text-cyan-400 text-lg capitalize"
        >
          {sec}
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
