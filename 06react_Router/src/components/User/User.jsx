import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
    return (
        <div className='bg-gray-600 text-white p-4 text-center font-semibold capitalize'>
            <h1>Current User Id is:- {id}</h1>
        </div>
    )
}

export default User
