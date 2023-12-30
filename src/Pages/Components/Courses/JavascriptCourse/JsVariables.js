import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const JsVariables = () => {

    const jsVariables = [
        {
            id: 2,
            topic: "Javascript Variables",
            title1: "4 way to decleare javascript variables:",
            title2: "What are Variables?",
            title3: "When to Use JavaScript var?",
            title4: "When to Use JavaScript const?",
            title5: "JavaScript Data Types",
            description1: "using var, let, const and using nothing",
            description2: "Variables are containers for storing data (storing data values). In this example, x, y, and z, a, b and c, d, e and f are variables, declared with the var, let and const keyword:",
            description3: "Always declare JavaScript variables with var,let, or const.The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015.If you want your code to run in older browser, you must use var.",
            description4: "If you want a general rule: always declare variables with const.If you think the value of the variable can change, use let.In this example, price1, price2, and total, are variables:",
            description5: "JavaScript variables can hold numbers like 100 and text values like 'John Doe'.In programming, text values are called text strings.JavaScript can handle many types of data, but for now, just think of numbers and strings.Strings are written inside double or single quotes. Numbers are written without quotes.If you put a number in quotes, it will be treated as a text string.",
            exampleTitle1: "",
            exampleTitle2: " Example: Variables",
            exampleTitle3: "",
            exampleTitle4: "Example: when to use const and let",
            exampleTitle5: "Example: Data type",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "",
            example2: "// variables: var,\n\nvar x = 5;\nvar y = 6;\nvar z = x + y;\n\n// variables: let,\nlet a = 3;\nlet b = 4;\nlet c = a + b;\n\n//variables: const\nConst d = 10;\nconst e = 12;\nconst f = d + e;",
            example3: "",
            example4: "const price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;",
            example5: "const pi = 3.14;\nlet person = 'John Doe';\nlet answer = 'Yes I am!';",
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
                <Link to="/jsCourses/jsVariabless" className='btn btn-secondary mx-5'>Edit & Delete</Link>
            </div>
            <div>
                {
                    jsVariables.map((dataFlow) =>

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

export default JsVariables;