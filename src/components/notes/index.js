import React, { useEffect } from 'react'
import { Note } from '../note'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions'

export function Notes({ removeNote }) {
  const dispatch = useDispatch()
  const { loader, posts } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (loader) {
    return <h4>...იტვირთება</h4>
  }

  return (
    <div className='container some-style'>
      <ul className='list-group'>
        {posts &&
          posts.map((item) => (
            <Note key={item.id} note={item} handleClick={removeNote} />
          ))}
      </ul>
    </div>
  )
}
