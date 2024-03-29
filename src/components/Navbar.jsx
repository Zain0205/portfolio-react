import { useRef, useState } from "react";
import { navbarListItems } from "../data";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [shadowNav, setShadowNav] = useState(false);
  const headerRef = useRef();

  const handleHamburger = () => {
    setHamburgerActive((prev) => !prev);
  };

  window.onscroll = () => {
    if (window.pageYOffset > headerRef.current.offsetTop) {
      setShadowNav(true);
    } else {
      setShadowNav(false);
    }
  };

  const handleNavigationClick = () => {
    setHamburgerActive(false);
  };

  const activatedHamburger = hamburgerActive ? "hamburger" : "";
  const displayNavigation = hamburgerActive ? "flex" : "hidden";
  const border = hamburgerActive ? "border-b border-dark" : "";
  const shadow = shadowNav ? "shadow-sm" : "";

  return (
    <>
      <header ref={headerRef} className={`shadow-black max-w-[100vw] z-[100] bg-white ${shadow} fixed px-5 ${border} top-0 left-0 right-0 flex justify-center items-center md:px-8 lg:px-36`}>
        <div className="flex justify-between items-center w-full">
          <div className="w-full">
            <a href="#" className="font-bold text-xl block py-5 text-dark lg:text-2xl">
              Fahmi<span className="text-primary">Zain</span>
            </a>
          </div>
          <div className="flex items-center lg:w-full lg:ml-20">
            <button onClick={handleHamburger} id="humberger" name="humberger" type="button" className={`block lg:hidden ${activatedHamburger}`}>
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav className={`${displayNavigation} absolute bg-primary lg:w-[45vw] shadow-lg w-full right-0 top-[4.3rem] lg:block lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:max-w-full`}>
              <ul className="block lg:justify-between lg:items-center lg:flex w-full">
                {navbarListItems.map((item) => (
                  <ListItem onClick={handleNavigationClick} key={item.id} page={item.sectionId}>
                    {item.list}
                  </ListItem>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

function ListItem({ children, page, ...props }) {
  return (
    <li {...props} className="group lg:py-2">
      <a
        href={page}
        className="text-md font-semibold text-white py-3 lg:py-1 px-5 md:px-8 lg:text-dark hover:bg-secondary hover:text-dark flex lg:hover:bg-transparent lg:hover:text-primary lg:hover:border-b-2 lg:hover:border-primary lg:px-0 lg:mx-"
      >
        {children}
      </a>
    </li>
  );
}
