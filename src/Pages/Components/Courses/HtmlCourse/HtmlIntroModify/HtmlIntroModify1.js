import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const HtmlIntroModify1 = () => {


    // import { useParams } from 'react-router-dom'

    const { id } = useParams()

    const [dataaIntro, setdataaIntro] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlIntro';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setdataaIntro(data))
    }, [dataaIntro])



    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const topic = event.target.topic.value

        const updateIntrolData1 = {
            topic: topic,


        }

        // sending data to server
        const url = `http://localhost:5000/htmlIntro/topic/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateIntrolData1)
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

                    {dataaIntro && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaIntro && <label className="label">
                            <span className="label-text font-bold">Sub-Section Topic:</span>
                        </label>}
                        <p> {dataaIntro.map(d => d.topic)} </p>
                        <br />
                        {dataaIntro && <div className=' flex'>
                            <input required type="text" name='topic' className="input input-bordered input-primary w-full max-w-xs" />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default HtmlIntroModify1;