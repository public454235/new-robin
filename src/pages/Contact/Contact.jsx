import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Link } from "react-router-dom";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_62qni7c', 'template_hhql4x9', form.current, 'qz9Qpcr1EyRQWhaQy')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div style={{
            width: 'full',
            height: 'full',
            backgroundSize: 'caver',
            backgroundImage: 'url("https://i.ibb.co/k1B0vYL/bg-about.png")'
        }}>
            <div>
                <div className="min-h-screen">
                    <div className="pt-16 pb-4">
                        <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text  to-pink-500">Contact Me</h1>
                    </div>

                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col gap-40 lg:flex-row">
                            <div className="lg:text-left">
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <div className="text-red-500 p-3 rounded-full  border-red-500 border focus:outline-none ">
                                        <FaPhoneAlt size={20} className=""></FaPhoneAlt>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-3xl">Phone</h1>
                                        <p className="font-bold">+8801751317994</p>
                                    </div>
                                </div>
                                <div className="flex mt-6 justify-center items-center gap-4">
                                    <div className="text-red-500 p-3 rounded-full  border-red-500 border focus:outline-none ml-20 ">
                                        <FaEnvelope size={20} className=""></FaEnvelope>
                                    </div>
                                    <div className="">
                                        <h1 className="font-bold text-3xl">Email</h1>
                                        <p className="font-bold">mdrobinmiaro1@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex mt-6 justify-center items-center gap-4">
                                    <div className="text-red-500 p-3 rounded-full  border-red-500 border focus:outline-none ml-8">
                                        <FaLocationArrow size={20} className=""></FaLocationArrow>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-3xl">Location</h1>
                                        <p className="font-bold">Rangpur, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex mt-6 justify-center items-center gap-4">
                                    <Link to='https://www.linkedin.com/in/md-robin-mia-3a1b99245/?trk=public-profile-join-page'><FaLinkedin className="text-red-500" size={40}></FaLinkedin></Link>
                                    <Link to='https://www.facebook.com/profile.php?id=100007703565509'><FaFacebook className="text-red-500" size={40}></FaFacebook></Link>
                                    <Link to='https://github.com/public454235'><FaGithub className="text-red-500" size={40}></FaGithub></Link>
                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                                <div className="card-body">
                                    <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text  to-pink-500">Get in Touch</h1>
                                    
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">name</span>
                                            </label>
                                            <input type="text" name="user_name" placeholder="name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="user_email" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">message</span>
                                            </label>
                                            <textarea type="submit" name="message" id="" cols="30" rows="10" className="input input-bordered input-lg w-full max-w-xs"></textarea>
                                        </div>

                                        <div className=" mt-6">
                                            <input style={{ cursor: 'pointer' }} className=" border-2 rounded-full px-7 py-3 border-red-500 bg-gradient-to-r from-indigo-500 via-purple-500 text-lg text-transparent bg-clip-text  to-pink-500 font-bold" type="submit" value="Send Message" />
                                        </div>



                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;