const HeaderLayout = () => {
  return (
    <header className="bg-white shadow-lg">
      <nav
        className="mx-auto flex items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-black font-semibold">Your Company</span>
          </a>
        </div>
        
      </nav>
    </header>
  );
};

export default HeaderLayout;
