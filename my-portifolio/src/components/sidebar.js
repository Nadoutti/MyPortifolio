// components/Sidebar.tsx
const Sidebar = () => {
  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <aside className="
      fixed 
      top-30 
      left-60 
      h-70 
      w-40 
      bg-[#292929]
      rounded-md
      text-white 
      flex 
      flex-col 
      items-center 
      justify-center 
      space-y-6">
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
