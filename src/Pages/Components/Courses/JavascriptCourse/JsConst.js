import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const JsConst = () => {

    const jsConst = [
        {
            id: 2,
            topic: "JavaScript Const",
            title1: "",
            title2: "Cannot be Reassigned",
            title3: "Must be Assigned",
            title4: "Constant Arrays",
            title5: "",
            description1: "The const keyword was introduced in ES6 (2015).Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope.",
            description2: "A const variable cannot be reassigned:",
            description3: "JavaScript const variables must be assigned a value when they are declared:",
            description4: "You can change the elements of a constant array",
            description5: "you can NOT reassign the array",
            exampleTitle1: "",
            exampleTitle2: "Example: cannot re-assign",
            exampleTitle3: "Example: must be assigned",
            exampleTitle4: "Example: constant arrays",
            exampleTitle5: "Example: cannot reassign array",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "",
            example2: "\nconst PI = 3.141592653589793;\nPI = 3.14;      // This will give an error\nPI = PI + 10;   // This will also give an error",
            example3: "\n//Correct\n\nconst PI = 3.14159265359;\n\n//Incorrect\n\nconst PI;\nPI = 3.14159265359;",
            example4: "\n// You can create a constant array:\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\n// You can change an element:\ncars[0] = 'Toyota';\n\n// You can add an element:\ncars.push('Audi');",
            example5: "\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\ncars = ['Toyota', 'Volvo', 'Audi'];    // ERROR",
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
                <Link to="/jsCourses/jsConstModify" className='btn btn-secondary mx-5'>Edit & Delete</Link>

            </div>
            <div>
                {
                    jsConst.map((dataFlow) =>

                        <div>

                            <br /><br />

                            <div className='bg-green-200' style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <p className="text-3xl font-bold">  {dataFlow.topic} </p>}
                                <br />
                                {dataFlow.title1 && <p className="text-2xl font-bold"> {dataFlow.title1} </p>}
                                {dataFlow.description1 && <p className='mb-3'> {dataFlow.description1} </p>}

                                {dataFlow.example1 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                                <br />
                                {dataFlow.title2 && <p className="text-2xl font-bold"> {dataFlow.title2} </p>}
                                {dataFlow.description2 && <p className='mb-3'> {dataFlow.description2} </p>}
                                {dataFlow.example2 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title3 && <p className="text-2xl font-bold"> {dataFlow.title3} </p>}
                                {dataFlow.description3 && <p className='mb-3'> {dataFlow.description3} </p>}
                                {dataFlow.example3 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title4 && <p className="text-2xl font-bold"> {dataFlow.title4} </p>}
                                {dataFlow.description4 && <p className='mb-3'> {dataFlow.description4} </p>}
                                {dataFlow.example4 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title5 && <p className="text-2xl font-bold"> {dataFlow.title5} </p>}
                                {dataFlow.description5 && <p className='mb-5'> {dataFlow.description5} </p>}

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

export default JsConst;