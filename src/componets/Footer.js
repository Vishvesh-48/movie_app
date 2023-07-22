import { Link } from "react-router-dom"

export const Footer = () => {
  return (

  
      <footer className="bg-white  bottom-0 shadow m-0 dark:bg-gray-800">
      <div className="w-full  max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030   <Link to="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Instgram</Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">FaceBook</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/vishveshwar-kolte-306673243"  target="_blank"  className="mr-4 hover:underline md:mr-6">Linkedin</Link>
          </li>
          <li>
            <Link to="https://web.whatsapp.com/" target="_blank" className="hover:underline">Whatsapp</Link>
          </li>
        </ul>
      </div>
    </footer>
 
  )
}
