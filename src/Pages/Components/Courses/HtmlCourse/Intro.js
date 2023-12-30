import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const Intro = ({ activate }) => {
    const [introData, setIntroData] = useState([])
    console.log(introData.length)
    useEffect(() => {
        // const url = "htmlIntro.json"
        const url = "http://localhost:5000/htmlIntro"
        fetch(url)
            .then((res) => res.json())
            .then((data) => setIntroData(data))
    }, [])
    return (
        <div >
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>


            <div className='bg-gray-100'>
                {
                    introData.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example/${dataFlow._id}`}>Update</Link>
                                </div>}

                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default Intro;