import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    
    if (!user)  return <h4>Please login first</h4>

    return <h1>Current Username is:- {user.username}</h1>
}

export default Profile
