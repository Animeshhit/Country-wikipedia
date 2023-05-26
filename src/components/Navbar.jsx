import {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

  const light = {
    Text:"Dark Mode",
    Icon:"contrast-outline"
  }

  const dark = {
    Text:"Light Mode",
    Icon:"sunny-outline"
  }

  const [theme,setTheme] = useState({
    Text:document.documentElement.classList.contains("dark") ? "Light Mode" : "Dark Mode",
    Icon:document.documentElement.classList.contains("dark") ? "sunny-outline":"contrast-outline"
  });

  const darkModeToggle = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          setTheme(dark);
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        
          setTheme(light);

      }
  
  // if NOT set via local storage previously
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          setTheme("dark");

      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          setTheme("light");
      }
  }
  }




    return (
        <>
          <header className="shadow-lg py-3 text-lighttextcolor bg-lightelmcolor dark:bg-darkelmcolor dark:text-lightmodebg">
            <div className="container">
                <nav className="flex items-center justify-between">
                   <h2 className="py-3 flex items-center gap-2 heading-font font-bold sm:text-xl">
                   <ion-icon name="flag-outline"></ion-icon>
                    <NavLink to="/"><span>Country Search</span></NavLink>
                    </h2>
                   <button onClick={darkModeToggle} type="button" className=" py-3 px-4 rounded-lg hover:shadow-lg flex items-center gap-2 cursor-pointer text-sm">
                   <ion-icon name={theme.Icon}></ion-icon>
                   <span>{theme.Text}</span>
                   </button>
                </nav>
            </div>
          </header>
        </>
    )
}

export default Navbar;