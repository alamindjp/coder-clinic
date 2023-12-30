import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';


const Attributes = () => {


    const [dataaAtt, setDataaAtt] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlAtt';
        fetch(url).then(res => res.json()).then(data => setDataaAtt(data))
    }, [dataaAtt])

    // const dataAtt = [
    //     {
    //         id: 2,
    //         topic: "Attributes",
    //         title1: "href Attributes",
    //         title2: "The src Attribute",
    //         title3: "The width and height Attributes",
    //         title4: "The alt Attribute",
    //         title5: "The style Attribute",
    //         description1: "The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:",
    //         description2: "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:",
    //         description3: "The <img> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):",
    //         description4: "The  alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader.",
    //         description5: "The style attribute is used to add styles to an element, such as color, font, size, and more.",
    //         exampleTitle1: "Example: href Attribute",
    //         exampleTitle2: "Example: src Attribute",
    //         exampleTitle3: "Example: The width and height Attributes",
    //         exampleTitle4: "Example: The alt Attribute",
    //         exampleTitle5: "Example: The style Attribute",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<p>\n  <a href='www.facebook.com'>facebook</a>\n  </p>",
    //         example2: "<img src='img_girl.jpg'>",
    //         example3: "<img src='img_girl.jpg' width='500' height='600'>",
    //         example4: "<img src='img_girl.jpg' alt='Girl with a jacket'>",
    //         example5: "<p style='color:red;'>This is a red paragraph.</p>",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]

    console.log(dataaAtt.length)

    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
            <div align="right">

            </div>
            <div className='bg-gray-100'>
                {
                    dataaAtt.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/topic/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/title/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/description/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/example/${dataFlow._id}`}>Update</Link>
                                </div>}



                                {/* {dataFlow.topic2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/topic2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/title2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description2 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/description2/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example2 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/example2/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/topic3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/title3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description3 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/description3/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example3 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/example3/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/topic4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/title4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description4 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/description4/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example4 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/example4/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/topic5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/title5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description5 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/description5/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example5 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/attribute/example5/${dataFlow._id}`}>Update</Link>
                                </div>} */}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default Attributes;



//   <div className={`${agree1 ? 'block' : 'hidden'} mt-5`}>
//                                         <input name='topic' type="text" />
//                                         <input name='' type="submit" value="update" className='btn btn-xs ml-5' />
//                                     </div> 





/* 



  






*/