import { FaEye, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";





const Portfolio = ({protfilo}) => {

    const {detail, image, name, live, github } = protfilo

    return (           
                    <div className="card h-96 w-96 bg-base-100 shadow-xl col">
                            <figure><img src={image} alt="Shoes" /></figure>
                            <div className="card-body flex flex-col justify-center items-center">
                                <h1 className="font-bold">{name}</h1>
                                <p className='ml-7'>Technologies: {detail}</p>

                                <div className="card-actions mt-4">
                                    <Link to={github}>
                                        <button className="inline-flex items-center py-1 px-4 mb-1 font-medium text-white transition duration-200 rounded-md shadow-md md:mb-0 bg-red-500 hover:bg-red-700"><FaGithub></FaGithub> GITHUB</button>
                                    </Link>
                                    <Link to={live}>
                                        <button className="inline-flex items-center py-1 px-4 mb-1 font-medium text-white transition duration-200 rounded-md shadow-md md:mb-0 bg-red-500 hover:bg-red-700"><FaEye></FaEye> LIVE SITE</button>
                                    </Link>


                                </div>
                            </div>
                        </div>             
    );
};

export default Portfolio;