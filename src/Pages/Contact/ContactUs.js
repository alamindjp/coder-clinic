import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import EmailSender from "./EmailSender";

const ContactUs = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    fetch("contactUs.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div className="mt-10 ">
      <h1 className="text-4xl text-center font-semibold">
        Contact our Developers
      </h1>
      <div className="grid gap-5 justify-center lg:grid-cols-3 md:grid-cols-2 mt-10 mb-10">
        {developers?.map((developer) => (
          <ContactCard key={developer.id} developer={developer} />
        ))}
      </div>
      <div className="card sm:w-96 bg-slate-700  mx-auto mb-5 p-5">
        <h1 className="text-3xl text-center font-semibold text-red-400 pt-5">Send Your Email</h1>
        <p className="text-gray-200 py-2">Have any question or query? Send a mail to our organization.</p>
        <EmailSender />
      </div>
    </div>
  );
};

export default ContactUs;
