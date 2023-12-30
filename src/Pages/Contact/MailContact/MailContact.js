import React, { useRef } from 'react';
import linkedIn from '../../../Assets/icons/linkedin.svg'
import facebook from '../../../Assets/icons/facebook.svg'
import github from '../../../Assets/icons/github.svg'
import gmail from '../../../Assets/icons/gmail.svg'
import email from '../../../Assets/icons/email.png'
import phone from '../../../Assets/icons/phone.png'
import location from '../../../Assets/icons/location.png'
import emailjs from '@emailjs/browser';

const MailContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rg199fs', 'template_5ygkl8n', form.current, 'ZsEC3GZIEcBh6A2K1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-slate-100'>
            <h1 className="text-textSemi text-5xl font-bold pt-10 text-center">Contact Us</h1>
            <div id='contact' className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:pr-32">
                        <div>
                            <h3 className="text-4xl font-bold text-info">Contact <span className='text-success'>Info</span></h3>
                            <div className='mt-5'>
                                <p className='flex items-center'><img className='w-[45px] pr-3' src={email} alt="" /> <span className='text-xl'>miraclecoders505.2@gmail.com</span></p>
                                <p className='flex items-center'><img className='w-[40px] my-3 pr-3' src={phone} alt="" /> <span className='text-xl'>(+880) 1785740163</span></p>
                                <p className='flex items-center'><img className='w-[40px] pr-3' src={location} alt="" /> <span className='text-xl'>Dhaka, Bangladesh</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-400">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" className="input input-bordered bg-slate-200 text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email" className="input input-bordered bg-slate-200 text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Massage</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered text-black bg-slate-200" placeholder="Massage" required/>
                            </div>
                            <div className="form-control text-white mt-6">
                                <input type="submit" value="Send" className="btn btn-outline " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-10 w-[90%] mx-auto'>
                <div className='h-[5px] w-1/2 bg-slate-400 rounded-l-lg'></div>
                <div className='h-[5px] w-1/2 bg-slate-400 rounded-r-lg'></div>
            </div>
            <h3 className="text-4xl font-bold text-gray-500 mt-7 underline underline-offset-8 text-center">Get In Touch</h3>
            <ul className='flex justify-center py-10 animate-pulse'>
                <li className='px-2'><a href="https://github.com/akilinjamam/code-clinic" target='_blank' rel="noReferrer"><img className='w-[50px]' src={github} alt="" /></a></li>
                <li className='px-2'><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMHjlhGGzTJQbMfzdwJJxhjpFvVbhTMcScmDDqtkCpHhnPVxlxhdJFCnnLBzTQDPLZkTr" target='_blank' rel="noReferrer"><img className='w-[50px]' src={gmail} alt="" /></a></li>
                <li className='px-2'><a href="https://www.linkedin.com/in/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px]' src={linkedIn} alt="" /></a></li>
                <li className='px-2'><a href="https://www.facebook.com/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px]' src={facebook} alt="" /></a></li>
            </ul>
        </div>
    );
};

export default MailContact;