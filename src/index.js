import React from 'react'
import ReactDOM from 'react-dom/client'
// import image from './../src/].jpg'
// import image from './../src/image.png'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
