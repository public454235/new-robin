import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNode } from "react-icons/fa";
import { BiLogoFirebase, BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";



const Skills = () => {
    return (
        <div className="hero min-h-screen" style={{
            width: 'full',
            height: 'full',
            backgroundSize: 'caver',
            backgroundImage: 'url("https://i.ibb.co/k1B0vYL/bg-about.png")'
        }}>
            <div>

                <div>
                    <div className="pt-16" data-aos="zoom-in-down">
                        <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text  ">My Skills</h1>
                    </div>


                    <div className="">
                        <div className=" grid md:grid-cols-3 gap-10 mt-10 mb-16 justify-center items-center" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="card w-40 border-b-2 border-0 border-red-500 shadow-xl flex flex-col justify-center items-center p-4">
                                <FaHtml5 size={50} className="text-red-500"></FaHtml5>
                                <h4 className="card-title font-normal text-base">HTML 5</h4>
                                <p className="card-title font-normal text-base">85%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-sky-500 shadow-xl flex flex-col justify-center items-center p-4">
                                <FaCss3Alt size={50} className="text-sky-500"></FaCss3Alt>
                                <h4 className="card-title font-normal text-base">CSS 3</h4>
                                <p className="card-title font-normal text-base">75%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-amber-400 shadow-xl flex flex-col justify-center items-center p-4">
                                <BiLogoJavascript size={52} className="text-amber-400 mx-auto"></BiLogoJavascript>
                                <h4 className="card-title font-normal text-base">JavaScript (ES6)</h4>
                                <p className="card-title font-normal text-base">70%</p>
                            </div>

                            <div className="card w-40 border-b-2 border-0 border-sky-500 shadow-xl flex flex-col justify-center items-center p-4">
                                <FaReact size={50} className="text-sky-500 mx-auto"></FaReact>
                                <h4 className="card-title font-normal text-base">React Router</h4>
                                <p className="card-title font-normal text-base">85%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-purple-600 shadow-xl flex flex-col justify-center items-center p-4">
                                <FaBootstrap size={50} className="text-purple-600 mx-auto"></FaBootstrap>
                                <h4 className="card-title font-normal text-base">Bootstrap</h4>
                                <p className="card-title font-normal text-base">80%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-sky-500 shadow-xl flex flex-col justify-center items-center p-4">
                                <BiLogoTailwindCss size={50} className="text-sky-500 mx-auto"></BiLogoTailwindCss>
                                <h4 className="card-title font-normal text-base">Tailwind</h4>
                                <p className="card-title font-normal text-base">80%</p>
                            </div>

                            <div className="card w-40 border-b-2 border-0 border-amber-400 shadow-xl flex flex-col justify-center items-center p-4">
                                <BiLogoFirebase size={50} className="text-amber-400 mx-auto"></BiLogoFirebase>
                                <h4 className="card-title font-normal text-base">Firebase</h4>
                                <p className="card-title font-normal text-base">70%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-lime-600 shadow-xl flex flex-col justify-center items-center p-4">
                                <FaNode size={50} className="text-lime-600 mx-auto"></FaNode>
                                <h4 className="card-title font-normal text-base">Node.js</h4>
                                <p className="card-title font-normal text-base">60%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-lime-600 shadow-xl flex flex-col justify-center items-center p-4">
                                <BiLogoMongodb size={50} className="text-lime-600 mx-auto"></BiLogoMongodb>
                                <h4 className="card-title font-normal text-base">MongoDB</h4>
                                <p className="card-title font-normal text-base">75%</p>
                            </div>
                            <div className="card w-40 border-b-2 border-0 border-amber-400 shadow-xl flex flex-col justify-center items-center p-4">
                                <SiExpress size={52} className="text-amber-400 mx-auto"></SiExpress>
                                <h4 className="card-title font-normal text-base">Express.js</h4>
                                <p className="card-title font-normal text-base">70%</p>
                            </div>


                        </div>

                    </div>




                </div>

            </div>
        </div>
    );
};

export default Skills;