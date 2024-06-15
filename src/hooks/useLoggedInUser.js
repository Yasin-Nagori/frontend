import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

function useLoggedInUser() {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [loggedInUser, setLoggedInuser] = useState({});
    

    useEffect(() => {
        fetch(`http://localhost:5000/loggedInUser?email=${email}`).
            then(res => res.json()).
        then(data=>setLoggedInuser(data))
    }, [email, loggedInUser])
    
    return [loggedInUser, setLoggedInuser]
}

export default useLoggedInUser