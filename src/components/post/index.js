import { getNodeText } from '@testing-library/dom'
import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../actions";

export function Note({ note, handleClick }) {
  const history = useHistory()
  const getNote = (id) => {
    history.push(`./note/${id}`)
  }


    const dispatch = useDispatch()
    const {loader,  posts} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(loader){
        return <h1>...იტვირთება</h1>
    }

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.id)}>{note.title}</div>
      <div>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleClick(note.id)}
        >
          x
        </button>
      </div>
    </li>
  )
}
