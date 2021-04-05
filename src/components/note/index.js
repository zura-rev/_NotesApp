import React from 'react'

export function Note({ note, handleClick }) {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div>{note.title}</div>
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
