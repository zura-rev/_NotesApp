import React from 'react'
import {useParams} from 'react-router-dom'
import {Post} from '../components/post'

export function PostPage() {
    const { id } = useParams()
    return (
        <div className='container'>
          <Post id={id}/>
        </div>
    )
}
