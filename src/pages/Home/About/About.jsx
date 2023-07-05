import resume from '../../../assets/Resume Format.pdf'



const About = () => {
    return (
        <div style={{
            width: 'full',
            height: 'full',
            backgroundSize: 'caver',
            backgroundImage: 'url("https://i.ibb.co/k1B0vYL/bg-about.png")'
        }}>
            <div>

                <div className=" min-h-screen ">
                    <div className="pt-16">
                        <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text  to-pink-500">About Me</h1>
                    </div>


                    <div className="lg:flex justify-center lg:flex-row lg:pt-16 sm:pt-16">
                        <div className='lg:ml-4 sm:ml-60'>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">First Name:</span> Md Robin</h4>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">Age:</span> 23 Years</h4>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">Phone:</span> +8801751317994</h4>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">Address:</span><br />Rangpur, Bangladesh</h4>
                            <h4 className="text-1xl font-bold text-white"><span className="text-slate-300">Language:</span> Bangla, English</h4>
                        </div>

                        <div className='lg:ml-8 sm:ml-60'>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">Last Name:</span> Mia</h4>
                            <h4 className="text-1xl pb-6 font-bold text-white"><span className="text-slate-300">Nationality:
                            </span> Bangladeshi</h4>
                            <h4 className="text-1xl pb-6 font-bold text-green-600"><span className="text-slate-300">Email:</span><br />mdrobinmiaro1@gmail.com</h4>
                            <h4 className="text-1xl pb-6 font-bold text-green-600"><span className="text-slate-300">LinkedIn:
                            </span> Md Robin Mia</h4>
                            <h4 className="text-1xl font-bold text-green-600"><span className="text-slate-300">Github:
                            </span> Md Robin Mia</h4>
                        </div>

                        <div className='lg:ml-8 sm:ml-60 mt-8 border px-4 py-2'>
                            <h1 className=" font-bold text-6xl bg-gradient-to-r from-purple-500 via-pink-500  to-indigo-500 text-transparent bg-clip-text">10+</h1>
                            <p className="pt-4">COMPLETED
                                PROJECTS</p>
                        </div>

                        <div className='lg:ml-8 sm:ml-60 mt-8 border px-4 py-2'>
                            <h1 className=" font-bold text-6xl bg-gradient-to-r from-purple-500 via-pink-500  to-indigo-500 text-transparent bg-clip-text">30+</h1>
                            <p className="pt-4">PROBLEM
                                SOLVED</p>
                        </div>

                    </div>
                    <a href={resume} target='_blank' download="Robin Download Resume PDF File">
                        <button className="lg:ml-44 sm:ml-60 sm:mb-8 mt-8 border-2 rounded-full px-7 py-3 border-red-500 bg-gradient-to-r from-indigo-500 via-purple-500 text-lg text-transparent bg-clip-text  to-pink-500 font-bold">Download Resume</button>
                    </a>
                </div>
               
            </div>
        </div>



    );
};

export default About;