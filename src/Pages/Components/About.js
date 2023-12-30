import React from "react";
import company from "../../Assets/img/About/company.png";
import whyUs from "../../Assets/img/About/whyUs.png";
import coding from "../../Assets/img/About/coding.png";
import learning from "../../Assets/img/About/self-learning.png";
import easy from "../../Assets/img/About/easy.jpg";
import paid from "../../Assets/img/About/paid.png";
import interview from "../../Assets/img/About/interview.png";
import Skills from "../../Assets/img/About/Skills.png";

const About = () => {
  return (
    <div>
      <div className="hero h-screen bg-[url('https://placeimg.com/1000/800/arch')]">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-2/3">
            <h1 className="mb-5 text-5xl font-bold">Coders Clinic</h1>
            <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis, expedita quia quod maiores nisi recusandae pariatur assumenda repudiandae. A consequuntur error cumque beatae neque aperiam numquam animi delectus ducimus dicta, dolore repellendus expedita quo provident iste cupiditate? Autem ullam facere magni, aliquid eius labore facilis laudantium voluptatum numquam minima.</p>
          </div>
        </div>
      </div>
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" w-1/2 flex justify-center"> <img src={company} className="rounded-lg shadow-2xl w-3/5" alt="" /></div>
          <div className=" sm:w-1/2">
            <h1 className="text-5xl font-bold">Who We Are ?</h1>
            <p className="py-6 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in eaque illo! Porro officiis amet, explicabo dicta minus maiores! Veniam, doloremque voluptas. Pariatur itaque distinctio totam sequi debitis, dignissimos quas veniam fugit cumque, esse excepturi minima? Facilis, temporibus. Nesciunt quaerat nulla enim unde atque nihil facere sint odio consequuntur recusandae.</p>
          </div>
        </div>
      </div>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 flex justify-center"> <img src={whyUs} className="rounded-lg shadow-2xl w-3/5" alt="" /></div>
          <div className=" sm:w-1/2">
            <h1 className="text-5xl font-bold">Why Choose Us</h1>
            <p className="py-6 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, facilis officiis assumenda corporis vel excepturi recusandae facere tempora repellat dolore perferendis eum animi placeat enim magnam suscipit voluptatum nesciunt distinctio architecto ea est totam. Eum maxime molestiae dignissimos impedit deleniti ipsa pariatur. Accusantium laboriosam optio inventore facere error reprehenderit hic.</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-20">Feature We Are Provide</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto mt-10 mb-5">
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={coding} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Coding Problems</h2>
            <p>Solutions to common coding problems.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={learning} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Self-learning</h2>
            <p>Self-learning environment.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={easy} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Easy guideline</h2>
            <p>An easy guideline for framework learning</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={paid} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Paid courses</h2>
            <p>Paid courses features</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={interview} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Interview preparation</h2>
            <p>Interview preparation guideline</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card w-96 mx-auto glass">
          <figure><img className="w-full" src={Skills} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Skill Test</h2>
            <p>Multiple questions and answer section with auto result system</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
