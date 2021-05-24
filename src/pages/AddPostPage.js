import React, { useState, useRef } from 'react'

export const AddPostPage = () => {
  //1
  //   const [title, setTitle] = useState('')
  //   const [body, setBody] = useState('')
  //   const [userId, setUserId] = useState('')

  //2
  //   const [form, setForm] = useState({
  //     title: '',
  //     body: '',
  //     userId: '',
  //   })

  //   const handleChange = (event) => {
  //     const { name, value } = event.target
  //     setForm({ ...form, [name]: value })
  //   }

  //3

  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const userIdRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('form', form)
  }

  const handleChange = () => {
    console.log('titleRef', titleRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        placeholder='title'
        ref={titleRef}
        onChange={handleChange}
      />
      <br />
      <input name='body' placeholder='body' />
      <br />
      <input name='userId' placeholder='userId' />
      <br />
      <button>addPost</button>
    </form>

    //1
    // <form>
    //   <input
    //     name='title'
    //     value={title}
    //     placeholder='title'
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <br />
    //   <input
    //     name='body'
    //     value={body}
    //     placeholder='body'
    //     onChange={(e) => setBody(e.target.value)}
    //   />
    //   <br />
    //   <input
    //     name='userId'
    //     value={userId}
    //     placeholder='userId'
    //     onChange={(e) => setUserId(e.target.value)}
    //   />
    //   <br />
    //   <button>addPost</button>
    // </form>

    //2
    // <form onSubmit={handleSubmit}>
    //   <input
    //     name='title'
    //     value={form.title}
    //     placeholder='title'
    //     onChange={handleChange}
    //   />
    //   <br />
    //   <input
    //     name='body'
    //     value={form.body}
    //     placeholder='body'
    //     onChange={handleChange}
    //   />
    //   <br />
    //   <input
    //     name='userId'
    //     value={form.userId}
    //     placeholder='userId'
    //     onChange={handleChange}
    //   />
    //   <br />
    //   <button>addPost</button>
    // </form>
  )
}
