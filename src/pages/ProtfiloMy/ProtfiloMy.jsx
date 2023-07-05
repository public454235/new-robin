import { useEffect, useState } from "react";
import Portfolio from "../Home/Portfolio/Portfolio";





const ProtfiloMy = () => {
    const [protfilos, setProtfilos] = useState([])


    useEffect(() => {
        fetch('myprotfilo.json')
            .then(res => res.json())
            .then(data => setProtfilos(data))
    }, [])
    return (
        <div className="hero min-h-screen"  style={{
            width: 'full',
            height: 'full',
            backgroundSize: 'caver',
            backgroundImage: 'url("https://i.ibb.co/k1B0vYL/bg-about.png")'
        }}>
            <div>
                
            <div className="pt-16" data-aos="zoom-in">
                        <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text  to-pink-500">Portfolios</h1>
                    </div>
            <div className="grid md:grid-cols-2 gap-10 mb-16 justify-center items-center mt-16">
            {
                protfilos.map(protfilo => <Portfolio
                    key={protfilo._id}
                    protfilo={protfilo}
                ></Portfolio>
                )
            }
        </div>
            </div>
        </div>
    );
};

export default ProtfiloMy;