import React from 'react';

const JavascriptQa = () => {
    return (
        <div className='m-5 p-8'>
            <h3 className='text-black font-bold text-3xl ml-5'>JavaScript Course:-</h3>
            <div className=' hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-01:  How does JavaScript work? </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span> <br />
                    Javascript is a synchronous single-threaded language. Javascript can execute single command at a time. It can only go to the next line once the current line has been finished executing. Javascript has two execution content. The first is memory content and the second one is code content. Memory content contains variables and functions as the key-value pairs. And the code component is the place where the whole js is executed. Its also known as the thread of execution.</p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-02: How does JavaScript code execute in Browser?</h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span><br /> Execution is the process by which a computer or virtual machine reads and acts on the instruction of a computer program. When we write code on our computer, it does some action mentioned in the written code. This process is called execution. In javascript, this execution is done by a special program called javascript engine. A popular javascript engine is called v8 engine, which was developed by Google. Memory and additional resources are needed to create an environment for code execution. It's called execution content.
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-03: What are the differences between “==” and “===”?
                </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span><br /> “==” is a type converting operator. It is used for comprising two string objects rather than value. It is used for checking data types values like int, and float. It is used to compare the value of primitive variables and the memory location of objects.
                    “===” is a strict equality operator or identity operator. It checks whether two operands are identically equal or not. It compares two values as well as their types.
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-04:  What is a callback function?
                </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span> <br /> In javascript, the callback function is a function to be executed after another function is finished execution. It passed an argument to another function so that it can be executed in that function. The callback function is the way to make sure that the code does not execute until the other code has already finished execution.</p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'> <h1 className='text-yellow-500 font-semibold mt-5'>Question-05: When will you return something from a function? </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span> <br /> When a function returns a value, the execution of that function is stopped. A function can return primitive values like string, number, and object types like array, function, etc. If a function returns a value, the value is assigned to a variable. If we want to return something for future use we need to return something from a function.</p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'> <h1 className='text-yellow-500 font-semibold mt-5'>Question-06:  Tell me about bind, call and apply.
            </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span> <br /> Bind is executed at the time when we execute the return function. It can take an array and any number of arguments as parameters. It returns a new function or copies a function.
                    Apply executed at the time of binding. It takes the array as a parameter. At the time of binding, it returns and calls the same function.
                </p>
            </div>
            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-07: What is a Closure in JavaScript? How does it work?
                </h1>
                <p className='text-black'><span className='text-black font-semibold'>Answer:</span> <br /> A closure is a function having access to the parent scope. It preserves the data from outside. It is an inner function that has access to the enclosing function’s variables. In closure, we have three scopes( local scope, outer function scope, and global scope). Whenever we create a function, a closure is also created at that time.
                </p>
            </div>
        </div >
    );
};

export default JavascriptQa;