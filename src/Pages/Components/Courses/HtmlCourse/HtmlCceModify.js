import React from 'react';

const HtmlCceModify = () => {

    // const dataaCce = [
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


    const [dataCce, setDataCce] = React.useState({
        id: 5,
        topic: "HTML Quotation and Citation Elements",
        title1: "HTML <blockquote> for Quotations",
        title2: "HTML <q> for Short Quotations",
        title3: "HTML <abbr> for Abbreviations",
        title4: "HTML <address> for Contact Information",
        title5: "HTML <cite> for Work Title",
        description1: "The HTML <blockquote> element defines a section that is quoted from another source. Browsers usually indent <blockquote> elements.",
        description2: "The HTML <q> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.",
        description3: "The HTML <abbr> tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.', 'Dr.', 'ASAP', 'ATM'. Marking abbreviations can give useful information to browsers, translation systems and search-engines.Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the",
        description4: "The HTML <address> tag defines the contact information for the author/owner of a document or an article. The contact information can be an email address, URL, physical address, phone number, social media handle, etc.The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element.",
        description5: "The HTML <cite> tag defines the title of a creative work (e.g. a book, apoem, a song, a movie, a painting, a sculpture, etc.).Note: A person's name is not the title of a work.  The text in the <cite> element usually renders in italic.",
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
    });


    const handleChange = (e) => {
        setDataCce({ ...dataCce, [e.target.name]: e.target.value });
    };

    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete HTML   Quotation and Citetion</p>
                <form action="">
                    {dataCce.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataCce.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataCce.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataCce.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataCce.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataCce.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataCce.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataCce.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataCce.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataCce.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataCce.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataCce.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataCce.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    <hr />



                    {dataCce.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataCce.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataCce.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataCce.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataCce.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataCce.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataCce.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataCce.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataCce.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataCce.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataCce.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataCce.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataCce.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataCce.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataCce.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataCce.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataCce.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataCce.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataCce.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataCce.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataCce.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataCce.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataCce.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataCce.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataCce.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataCce.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataCce.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataCce.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataCce.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataCce.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />


                    {dataCce.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataCce.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataCce.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataCce.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataCce.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataCce.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataCce.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataCce.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataCce.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataCce.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default HtmlCceModify;