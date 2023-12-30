import React from 'react';

const HtmlQa = () => {
    return (
        <div className='m-5 p-8 text-black'>
             <h3 className='text-black font-bold text-3xl ml-5'>HTML Course:-</h3>
            <div className=' hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-01: What are the differences between html4 and html5? </h1>
                <p><span className='text-black font-semibold'>Answer:</span> <br />
                    Html4 has a common structure like header and footer whereas Html5 has a new structure like drag and drop. Html can not embed audio and video directly and makes use of a flash player. Html5 can embed audio and video without using a flash player. Html4 can,t handle incorrect tags while Html5 can. Local storage is not possible in Html4 but in Html5 new tags and new technologies like local storage are enhanced.
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-02: What are semantic tags in Html? Give us some examples.
                </h1>
                <p><span className='text-black font-semibold'>Answer:</span><br /> Semantic tags are used for making Html tags understandable. It is the best way to define different sections and layouts of a web page. For example, the figure tag means that the particular part is containing a figure and figcaption indicates the caption of that figure. One can easily find different parts after looking at semantic tags like header, nav, aside, footer etc. div is also a tag which not indicate any specific parts , so this tag is not semantic tag
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-03: What is the purpose of the article, div, section, nav, aside?

                </h1>
                <p><span className='text-black font-semibold'>Answer:</span><br /> airticle, section, nav, and aside tags are semantic tags. All these tags have a specific purpose.aside tag is used for enclosing the main section of a web page while  section tag used for enclosing a sub-content or sub-section of a website. nav tag used for indicating navigational blocks(menus). It is the best way to use this tag for the primary menu. aside tag highlights the main object of a web page. div tag is not a semantic tag. It is used for containing any part of a web page. It's a container of Html elements. Both aside and div tag has same behavior with defferent purpose.

                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-04: Why will you use a meta tag?

                </h1>
                <p><span className='text-black font-semibold'>Answer:</span> <br /> meta is a self-closing tag used inside the head of the Html document. By using the meta tag we tell the web browser what our website is about. Meta tag has some attributes like description,  keywords, author, and some more. Description contains a short description of the website which will show on our web browser while searching. The author attribute contains the name of the author of the web page. We can also set a viewport for mobile and other devices while browsing by using the meta tag. We can also set auto-refresh of our web page by using a meta tag.
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'> <h1 className='text-yellow-500 font-semibold mt-5'>Question-05: What is the difference between inline, inline-block, and block? </h1>
                <p><span className='text-black font-semibold'>Answer:</span> <br />Inline elements can not have specific height and width. It automatically adjusts its height and width according to content.
                    Block elements can have specific heights and widths. It always starts from a new line. It occupies full line space. It doesn’t let any element come to the same line by default.
                    Inline-block elements act like both inline and block elements. It doesn't start from a new line. But we can define its height and width.
                </p>
            </div>

            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'> <h1 className='text-yellow-500 font-semibold mt-5'>Question-06:  Tell me about bind, call and apply.
            </h1>
                <p><span className='text-black font-semibold'>Answer:</span> <br /> Bind is executed at the time when we execute the return function. It can take an array and any number of arguments as parameters. It returns a new function or copies a function.
                    Apply executed at the time of binding. It takes the array as a parameter. At the time of binding, it returns and calls the same function.
                </p>
            </div>
            <div className='hover:shadow-lg hover:shadow-black px-5 pb-4'>
                <h1 className='text-yellow-500 font-semibold mt-5'>Question-07: What is a Closure in JavaScript? How does it work?
                </h1>
                <p><span className='text-black font-semibold'>Answer:</span> <br /> A closure is a function having access to the parent scope. It preserves the data from outside. It is an inner function that has access to the enclosing function’s variables. In closure, we have three scopes( local scope, outer function scope, and global scope). Whenever we create a function, a closure is also created at that time.
                </p>
            </div>
        </div >
    );
};

export default HtmlQa;