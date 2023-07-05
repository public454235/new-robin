import { Link } from 'react-router-dom';
import image from '../../../assets/Robin.png'
import resume from '../../../assets/Resume Format.pdf'
import { FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <div className="hero min-h-screen" style={{
            width: 'full',
            height: 'full',
            backgroundSize: 'caver',
            backgroundImage: 'url("https://i.ibb.co/HTd8gtW/bg.png")'
        }}>
            <div>

                <div>
                    <a href={resume} target='_blank' download="Robin Download Resume PDF File">
                        <h1 className=" right-0 fixed sm:mb-8 mt-2 pt-3  rounded-full px-10 border-red-500 bg-gradient-to-r from-indigo-500 via-purple-500 text-lg text-transparent bg-clip-text  to-pink-500 font-bold ">Download Resume <FaDownload></FaDownload></h1>
                    </a>
                </div>
                <div>
                    <div className="hero-content flex-col lg:flex-row m-8">
                        <div className='raja' data-aos="fade-right">
                            <img src={image} className=" max-w-sm h-[400px] rounded-3xl drop-shadow-lg" />
                        </div>
                        <div className='ml-8' data-aos="fade-left">
                            <h4 className="text-2xl font-bold text-slate-300">Hi, I'm</h4>
                            <h1 className="text-6xl pb-6 font-bold bg-gradient-to-r from-purple-500 via-pink-500  to-indigo-500 text-transparent bg-clip-text">MD: ROBIN MIA</h1>
                            <h2 className="text-4xl font-bold text-slate-300">Font-End <span style={{ color: 'slate-300', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['React Developer', 'React Router Dom',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                   
                                />
                            </span></h2>

                            <p className="py-6">I am a young professional with a core interest in Font-End Developer and React., solid understanding of JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                            <Link to='about'>
                                <button className=" border-2 rounded-full px-7 py-3 border-red-500 bg-gradient-to-r from-indigo-500 via-purple-500 text-lg text-transparent bg-clip-text  to-pink-500 font-bold">More About Me</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;