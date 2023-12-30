import React, { useEffect, useState } from 'react';
import "../../Courses/hoverButton.css"
import { useParams } from 'react-router-dom';

const AttributeModify = () => {

    const { id } = useParams()

    const [dataaAtt, setDataaAtt] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlAtt';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaAtt(data))
    }, [dataaAtt])



    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const topic = event.target.topic1.value

        const updateHtmlData = {
            topic: topic,


        }

        // sending data to server
        const url = `http://localhost:5000/htmlAtt/topic/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHtmlData)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log('success', data)
                alert('sent successfully');
                event.target.reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleModify} action="">
                <div className='p-5'>
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Attributes</p>

                    {dataaAtt && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaAtt && <label className="label">
                            <span className="label-text font-bold">Sub-Section Topic:</span>
                        </label>}
                        <p> {dataaAtt.map(d => d.topic)} </p>
                        <br />
                        {dataaAtt && <div className=' flex'>
                            <input required type="text" name='topic1' className="input input-bordered input-primary w-full max-w-xs" />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AttributeModify;


// const title1 = event.target.title1.value
// const title2 = event.target.title2.value
// const title3 = event.target.title3.value
// const title4 = event.target.title4.value
// const title5 = event.target.title5.value
// const description1 = event.target.description1.value
// const description2 = event.target.description2.value
// const description3 = event.target.description3.value
// const description4 = event.target.description4.value
// const description5 = event.target.description5.value
// const example1 = event.target.example1.value
// const example2 = event.target.example2.value
// const example3 = event.target.example3.value
// const example4 = event.target.example4.value
// const example5 = event.target.example5.value




// titile1: title1,
// titile2: title2,
// titile3: title3,
// titile4: title4,
// titile5: title5,
// description1: description1,
// description2: description2,
// description3: description3,
// description4: description4,
// description5: description5,
// example1: example1,
// example2: example2,
// example3: example3,
// example4: example4,
// example5: example5,