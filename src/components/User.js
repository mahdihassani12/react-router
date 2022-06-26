import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const params = useParams()
    const user_id = params.user_id

    return (
        <div>{user_id}</div>
    )
}
