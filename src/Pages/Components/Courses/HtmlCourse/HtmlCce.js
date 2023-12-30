import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const HtmlCce = () => {

    // const dataCce = [
    //     {
    //         id: 5,
    //         topic: "HTML Quotation and Citation Elements",
    //         title1: "HTML <blockquote> for Quotations",
    //         title2: "HTML <q> for Short Quotations",
    //         title3: "HTML <abbr> for Abbreviations",
    //         title4: "HTML <address> for Contact Information",
    //         title5: "HTML <cite> for Work Title",
    //         description1: "The HTML <blockquote> element defines a section that is quoted from another source. Browsers usually indent <blockquote> elements.",
    //         description2: "The HTML <q> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.",
    //         description3: "The HTML <abbr> tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.', 'Dr.', 'ASAP', 'ATM'. Marking abbreviations can give useful information to browsers, translation systems and search-engines.Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the",
    //         description4: "The HTML <address> tag defines the contact information for the author/owner of a document or an article. The contact information can be an email address, URL, physical address, phone number, social media handle, etc.The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element.",
    //         description5: "The HTML <cite> tag defines the title of a creative work (e.g. a book, apoem, a song, a movie, a painting, a sculpture, etc.).Note: A person's name is not the title of a work.  The text in the <cite> element usually renders in italic.",
    //         exampleTitle1: "",
    //         exampleTitle2: "",
    //         exampleTitle3: "",
    //         exampleTitle4: "",
    //         exampleTitle5: "",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "",
    //         example2: "",
    //         example3: "",
    //         example4: "",
    //         example5: "",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]

    const [dataCce, setDataCce] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/htmlCce';
        fetch(url).then(res => res.json()).then(data => setDataCce(data))
    }, [])


    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
            <div align="right">

            </div>
            <div className='bg-gray-100'>
                {
                    dataCce.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlCce/topic/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlCce/title/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlCce/description/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlCce/example1/${dataFlow._id}`}>Update</Link>
                                </div>}

                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default HtmlCce;