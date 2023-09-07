// External links
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'

export const SideBar = () => {
  return (
    <div className="fixed bottom-0 left-0 px-8 py-4 w-1/6 text-t-white hidden md:flex">
        <div className="py-4"> 
            <ul>
                <li className="mb-2">
                    <a href="https://github.com/Ryuichi-Yamafuji-Lun" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-4xl">
                        <FaGithub />
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://www.linkedin.com/in/ryulun/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="text-4xl">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="mb-2">
                    <FaMoon className='text-3xl'/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar