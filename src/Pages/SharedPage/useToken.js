import { useEffect, useState } from "react"

const useToken = (user) => {

    const [token, setToken] = useState('');
    useEffect(() => {

        const email = user?.user?.email;
        const currentUser = { user: email };
        console.log({ currentUser });


        if (email) {

            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Token is now inside', data)

                })
        }

    }, [user])

    return [token]
}


export default useToken