import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../actions";

export function Post({id}) {console.log('id',id)
    const dispatch = useDispatch()
    const {loader,  post} = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getPost(id))
    }, [])

    if(loader){
        return <h1>...იტვირთება</h1>
    }

  return (
      <>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
          <p>completed: {post.body?.toString()}</p>
          <p>userId: {post.userId}</p>
      </>
  )
}
