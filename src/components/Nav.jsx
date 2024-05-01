import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import { toggleTheme } from "../redux/slices/Themes/themeSlice";
import { ThemeContext } from "../context/ThemeProvider";

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation().pathname;

  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className=" flex font-bold text-xl items-center whitespace-nowrap  sm:text-xl"
        >
          <Navbar.Brand className="flex items-center">
            <span className="px-2 py-1  uppercase  text-[#0DB760] font-bold ">
              Amir <span className="">Dev</span>
            </span>
          </Navbar.Brand>
        </Link>

        <div className="flex gap-2  md:order-1 items-center">
          <Button
            className="w-10 h-10 rounded-full hidden sm:flex "
            color="gray"
            onClick={toggleTheme}
          >
            {theme === "llight" ? <FaSun /> : <FaMoon />}
          </Button>

          <Navbar.Toggle></Navbar.Toggle>
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={location === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="/about-me">About Me</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="/contact-us">Contact Us</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="https://res.cloudinary.com/dyhmbyp4o/image/upload/v1714423262/kgujc006vazfpxbjfp8x.pdf">Download Cv</Link>
          </Navbar.Link>
          {/* <Navbar.Link as={"div"}>
            <Link to="/">Download CV</Link>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

// "use client";

// import { Button, Navbar } from "flowbite-react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../context/ThemeProvider";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { Avatar, Dropdown } from "flowbite-react";
// import f2 from '../assets/face3.jpg'
// import f from '../assets/face.jpg'

// export default function Nav() {
//   const {theme,toggleTheme} =  useContext(ThemeContext)

//   return (

//     <Navbar fluid rounded>
//       <Navbar.Brand href="https://flowbite-react.com">

//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Dropdown
//         onClick={()=>{()=>alert('adf')}}
//           arrowIcon={false}
//           // inline
//           // label={
//           //   <Avatar className="object-cover  w-10 h-10" alt="User settings" img={`${theme ? f : f2 }`} rounded />
//           // }
//         >

//          <span>adf</span>
//           {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
//         </Dropdown>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
