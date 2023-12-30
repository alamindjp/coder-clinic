import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const JsSyntex = () => {

    const jsSyntex = [
        {
            id: 2,
            topic: "JavaScript Syntax",
            title1: "",
            title2: "Strings",
            title3: "JavaScript Variables",
            title4: "JavaScript Operators",
            title5: "JavaScript Keywords",
            description1: "JavaScript syntax is the set of rules, how JavaScript programs are constructed",
            description2: "Strings are text, written within double or single quotes:",
            description3: "In a programming language, variables are used to store data values. JavaScript uses the keywords var, let and const to declare variables.An equal sign is used to assign values to variables.In this example, x is defined as a variable. Then, x is assigned (given) the value 6:",
            description4: "JavaScript uses arithmetic operators ( + - * / ) to compute values:",
            description5: "JavaScript keywords are used to identify actions to be performed.The let keyword tells the browser to create variables:",
            exampleTitle1: "Example: js Syntex",
            exampleTitle2: "Example: Strings",
            exampleTitle3: "Example: javascript Variable",
            exampleTitle4: "Example: Operators",
            exampleTitle5: "Example: keywords",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "// How to create variables:\nvar x;\nlet y;\n\n// How to use variables:\nx = 5;\ny = 6;\nlet z = x + y;",
            example2: "'John Doe'\n",
            example3: "let x;\n  x = 6;",
            example4: "(5 + 6) * 10",
            example5: "let x, y;\n\nx = 5 + 6;\ny = x * 10;",
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
                <Link to="/jsCourses/jsSyntexx" className='btn btn-secondary mx-5'>Edit & Delete</Link>

            </div>
            <div>
                {
                    jsSyntex.map((dataFlow) =>

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

export default JsSyntex;