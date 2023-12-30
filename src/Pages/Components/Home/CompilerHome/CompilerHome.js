import React from "react";
import { useNavigate } from "react-router-dom";
// import CompilerHome from '../CompilerHome/Com';

const CompilerHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="hero ">
        <div class="hero-content flex-col-reverse lg:flex-row ">
          <div className="lg:w-3/6">
            <img src="https://i.ibb.co/FsTbWP7/compiler.png" alt="" />
          </div>
          <div className="lg:w-3/6">
            <h1 className="text-4xl text-center text-info">
              Run Your Code With Our Compiler
            </h1>

            <div className="grid grid-cols-2 gap-5 mt-16 ">
              <button
                onClick={() => {
                  navigate("/Editor");
                }}
                className="btn  text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                JavaScript
              </button>
              <button
                onClick={() => {
                  navigate("/Editor");
                }}
                className="btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                HTML
              </button>
              <button
                onClick={() => {
                  navigate("/Editor");
                }}
                className="btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                CSS
              </button>
              <button
                onClick={() => {
                  navigate("/Editor");
                }}
                className="btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                C++
              </button>
              <button
                onClick={() => {
                  navigate("/pythonCom");
                }}
                className="btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                Python
              </button>
              <button
                onClick={() => {
                  navigate("/Editor");
                }}
                className="btn text-black hover:text-white justify-center shadow-lg bg-white text-center font-bold rounded-md compiler py-10 content-center duration-1000"
              >
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompilerHome;
