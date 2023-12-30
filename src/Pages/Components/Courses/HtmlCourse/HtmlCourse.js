import React, { useEffect, useState } from "react";


const HtmlCourse = () => {

  const [htmlData, setHtmlData] = useState([])

  useEffect(() => {
    const url = "html.json"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHtmlData(data))
  }, [])

  return (
    <div>
      <h2 className="text-4xl text-primary mb-4">HTML Course</h2>

      <div>
        {
          htmlData.map((dataFlow, index) =>
            <div>
              <br /><br />
              <span className="font-bold"> {index + 1} </span><br /><br />
              <div style={{ backgroundColor: 'lightGray', padding: '20px', borderRadius: '10px' }}>
                <p className="text-3xl font-bold">  {dataFlow.topic} </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.title1} </p>
                <p> {dataFlow.description1} </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                <p> {dataFlow.description2} </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                <p> {dataFlow.description3} </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                <p> {dataFlow.description4} </p>

                <br />
                <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                <p> {dataFlow.description5} </p>
                <br />
                <hr />
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle1} </p>
                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code> {dataFlow.example1}</code> </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle2} </p>
                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example2}</code> </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle3} </p>
                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example3}</code> </p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle4} </p>
                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example4} </code></p>
                <br />
                <p className="text-2xl font-bold"> {dataFlow.exampleTitle5} </p>
                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code> {dataFlow.example5}</code> </p>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default HtmlCourse;
