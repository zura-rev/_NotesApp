import React, {useEffect, useState} from 'react'
import { Notes } from '../components/notes'

export function NotesPage(props) {

  return (
    <Notes
      removeNote={props.removeNote}
      getNote={props.getNote}
    />
  )
}
