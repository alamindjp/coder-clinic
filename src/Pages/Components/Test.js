import React, { useEffect, useState } from 'react';

const Test = () => {

    const [htmlData, setHtmlData] = useState([])

    useEffect(() => {
        const url = "html.json"
        fetch(url)
            .then((res) => res.json())
            .then((data) => setHtmlData(data))
    }, [])

    return (

        <div>
            {
                htmlData.map((dataFlow) => <p key={dataFlow.id}>{dataFlow.id}</p>)
            }
        </div>
    );
};

export default Test;