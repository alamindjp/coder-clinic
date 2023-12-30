import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AttributeModify4 = () => {
    const { id } = useParams();
    const [dataaAtt, setDataaAtt] = useState([])

    const data = dataaAtt.find(f => f._id === id)

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
        const example = event.target.example.value
        const updateHtmlData4 = {
            example: example,
        }
        // sending data to server
        const url = `http://localhost:5000/htmlAtt/example/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHtmlData4)
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
                            <span className="label-text font-bold"> Example:</span>
                        </label>}
                        <p> {data?.example} </p>
                        <br />
                        {dataaAtt && <div className=' flex'>
                            <textarea placeholder={data?.example} required type="text" name='example' className="input input-bordered input-primary w-full" />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AttributeModify4;