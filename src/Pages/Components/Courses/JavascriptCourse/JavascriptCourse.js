import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const JavascriptCourse = () => {

  const jsIntro = [
    {
      id: 2,
      topic: "Introduction",
      title1: "What is Javascript?",
      title2: "",
      title3: "",
      title4: "",
      title5: "JavaScript Can Change HTML Content",
      description1: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.One of many JavaScript HTML methods is getElementById().The example below 'finds' an HTML element (with id='demo'), and changes the element content (innerHTML) to 'Hello JavaScript':",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      exampleTitle1: "Example:",
      exampleTitle2: "",
      exampleTitle3: "",
      exampleTitle4: "",
      exampleTitle5: "",
      exampleTitle6: "",
      exampleTitle7: "",
      exampleTitle8: "",
      exampleTitle9: "",
      exampleTitle10: "",
      example1: "document.getElementById('demo').innerHTML = 'Hello JavaScript';",
      example2: "",
      example3: "",
      example4: "",
      example5: "",
      example6: "",
      example7: "",
      example8: "",
      example9: "",
      example10: ""
    }
  ]

  return (
    <div>
      <h2 className="text-4xl text-black pl-5">Javascript Course</h2>
      <div align="right">
        <Link to="/jsCourses/jsCourseModify" className='btn btn-secondary shadow-md text-white mx-5'>Edit & Delete</Link>

      </div>
      <div>
        {
          jsIntro.map((dataFlow) =>

            <div>

              <br /><br />

              <div className='bg-green-200' style={{ padding: '20px', borderRadius: '10px' }}>
                {dataFlow.topic && <p className="text-3xl font-bold">  {dataFlow.topic} </p>}
                <br />
                {dataFlow.title1 && <p className="text-2xl font-bold mb-3"> {dataFlow.title1} </p>}
                {dataFlow.description1 && <p> {dataFlow.description1} </p>}
                <br />
                {dataFlow.title2 && <p className="text-2xl font-bold mb-3"> {dataFlow.title2} </p>}
                {dataFlow.description2 && <p> {dataFlow.description2} </p>}
                <br />
                {dataFlow.title3 && <p className="text-2xl font-bold mb-3"> {dataFlow.title3} </p>}
                {dataFlow.description3 && <p> {dataFlow.description3} </p>}
                <br />
                {dataFlow.title4 && <p className="text-2xl font-bold mb-3"> {dataFlow.title4} </p>}
                {dataFlow.description4 && <p> {dataFlow.description4} </p>}

                <br />
                {dataFlow.title5 && <p className="text-2xl font-bold mb-3"> {dataFlow.title5} </p>}
                {dataFlow.description5 && <p> {dataFlow.description5} </p>}
                <br />
                <hr />
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle1} </p>
                <br />
                {dataFlow.example1 && <div className='flex bg-black justify-between p-2 rounded '>
                  <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                  </code></pre>
                  <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                </div>}


                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle2} </p>
                <br />
                {dataFlow.example2 && <div className='flex bg-black justify-between p-2 rounded '>
                  <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                  </code></pre>
                  <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                </div>}
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle3} </p>
                <br />
                {dataFlow.example3 && <div className='flex bg-black justify-between p-2 rounded '>
                  <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                  </code></pre>
                  <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                </div>}
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle4} </p>
                <br />
                {dataFlow.example4 && <div className='flex bg-black justify-between p-2 rounded '>
                  <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                  </code></pre>
                  <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                </div>}
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle5} </p>
                <br />
                {dataFlow.example5 && <div className='flex bg-black justify-between p-2 rounded '>
                  <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                  </code></pre>
                  <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                </div>}
              </div>
            </div>)

        }
      </div>
    </div>
  );
};

export default JavascriptCourse;


/* 

 const jsIntro = [
    {
      id: 2,
      topic: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      exampleTitle1: "",
      exampleTitle2: "",
      exampleTitle3: "",
      exampleTitle4: "",
      exampleTitle5: "",
      exampleTitle6: "",
      exampleTitle7: "",
      exampleTitle8: "",
      exampleTitle9: "",
      exampleTitle10: "",
      example1: "",
      example2: "",
      example3: "",
      example4: "",
      example5: "",
      example6: "",
      example7: "",
      example8: "",
      example9: "",
      example10: ""
    }
  ]


*/