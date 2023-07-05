import { FaComment, FaHome, FaReact, FaToolbox, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
        <div className="flex flex-col top-[20%] right-0 fixed">
            <div className='mb-2'>
                <ul>
                    <li className=" flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-5px] hover:rounded-full duration-300 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        <Link className='flex justify-between items-center w-full text-white' to='/'>
                            <>
                                <FaHome size={25}></FaHome> Home
                            </>
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col top-[35%] right-0 fixed">
            <div className='mb-2'>
                <ul>
                    <li className=" flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-5px] hover:rounded-full duration-300 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        <Link className='flex justify-between items-center w-full text-white' to='about'>
                            <>
                                <FaUserAlt size={25}></FaUserAlt> About
                            </>
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col top-[50%] right-0 fixed">
            <div className='mb-2'>
                <ul>
                    <li className=" flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-5px] hover:rounded-full duration-300 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        <Link className='flex justify-between items-center w-full text-white' to='skills'>
                            <>
                                <FaReact size={25}></FaReact> Skills
                            </>
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col top-[65%] right-0 fixed">
            <div className='mb-2'>
                <ul>
                    <li className=" flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-5px] hover:rounded-full duration-300 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        <Link className='flex justify-between items-center w-full text-white' to='protfiloMy'>
                            <>
                                <FaToolbox size={25}></FaToolbox> Portfolio
                            </>
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col top-[80%] right-0 fixed">
            <div className='mb-2'>
                <ul>
                    <li className=" flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-5px] hover:rounded-full duration-300 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
                        <Link className='flex justify-between items-center w-full text-white' to='contact'>
                            <>
                                <FaComment size={25}></FaComment> Contact
                            </>
                        </Link>

                    </li>
                </ul>
            </div>
        </div>


    </div>
    );
};

export default Navbar;