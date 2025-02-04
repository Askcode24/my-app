/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
/* import image from './../src/].jpg'
import image from './../src/image.png'
import React, { useState } from 'react'; */

import './index.css'
import { books } from './books'
import Book from './Book'
// import App from './prac2'

// ORIGINAL CODES
const BookList = () => {
	return (
		<>
			<h1>Amazon Best Sellers </h1>
			<section className='booklist'>
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />
				})}
			</section>
		</>
	)
}

/* const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Mind'
const img = './images/].jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
} */

/*const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/].jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-2.jpg',
}


 function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
} */

/*const Book = ({ img, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
} */

/* const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
} */

/* const names = ['John', 'Jane', 'Bob', 'Alice']

function SimpleList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  )
} */

/* function Parent() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [month, setMonth] = useState('May')
  const [year, setYear] = useState(2000)

  return (
    <div>
      <Child name={name} age={age} month={month} year={year} />
      <button onClick={() => setName(prompt(''))}>Change Name</button>
      <button onClick={() => setAge(prompt())}>Change Age</button>
      <button onClick={() => setMonth(prompt(''))}>Change Month</button>
      <button onClick={() => setYear(prompt())}>Change Year</button>
    </div>
  )
} 


function Child(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      <p>You are {props.month}.</p>
      <p>You are born in {props.year}.</p>
    </div>
  );
}
*/

/* const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
}) */

/* const books = [
	{
		author: 'Jordan Moore',
		title: 'Interesting Facts For Curious Minds',
		img: './images/].jpg',
		id: 1,
	},
	{
		author: 'James Clear',
		title: 'Atomic Habits',
		img: './images/book-2.jpg',
		id: 2,
	},
]

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);

  const getSingleBook = () => {
    getBook(id)
  }

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Get Book</button>
      // <button onClick={() => getBook(id)}>Get Book</button>
      <h4>{author}</h4>
    </article>
  )
} */

/* function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} />
			})}
		</section>
	)
}

const Book = (props) => {
	const { img, title, author } = props
	console.log(props)
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author} </h4>
		</article>
	)
} */

/* function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
} 
  
const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e)
    // e.target - element
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    // console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      // add onSubmit Event Handler
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        // add button with type='submit'
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

// alternative approach
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log('hello there')}>click me</button>
    </section>
  )
}

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('you clicked me')}>click me</button>
    </section>
  )
}
*/

/* const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => {
				// console.log(book)
				const { img, title, author, id } = book;
				return <Book book={book} key={id} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author } = props.book;
	console.log(props);

	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author} </h4>
		</article>
	);
}; */

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
