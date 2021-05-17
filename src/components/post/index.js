import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../actions'

export function Post({ id }) {
  const dispatch = useDispatch()
  const { loader, post } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [])

  console.log('post', post)

  if (loader) {
    return <h4>...იტვირთება</h4>
  }

  return (
    <>
      {post && (
        <div>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
          <p>completed: {post.body?.toString()}</p>
          <p>userId: {post.userId}</p>
        </div>
      )}
    </>
  )
}
