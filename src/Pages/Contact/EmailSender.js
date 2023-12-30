import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const EmailSender = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rg199fs', 'template_5ygkl8n', form.current, 'ZsEC3GZIEcBh6A2K1')
            .then((result) => {
                alert("Your Email Was Send");
            }, (error) => {
                alert(error.text);
            });
        e.target.reset()

    };
    return (
        <div>
            <form className='w-[300px] mx-auto flex flex-col' ref={form} onSubmit={sendEmail}>
                <label className='text-white pt-3'>Name</label>
                <input className='p-2 pt-1 text-lg rounded bg-slate-200' type="text" name="user_name" placeholder='Type Your Name' required />
                <label className='text-white pt-3'>Email</label>
                <input className='p-2 pt-1 text-lg rounded bg-slate-200' type="email" name="user_email" placeholder='Type Your Email' required />
                <label className='text-white pt-3'>Subject</label>
                <input className='p-2 pt-1 rounded bg-slate-200' type="text" name="user_sub" placeholder='Type Your Email Subject' required />
                <label className='text-white pt-3'>Message</label>
                <textarea className='p-2 rounded bg-slate-200' name="message" placeholder='Type Your Massage' required />
                <input className='btn btn-secondary mt-5 w-[200px] mx-auto' type="submit" value="Send" />
            </form>
      </div>


    );
};

export default EmailSender;