const Book = (props) => {
  const { img, author, title, id } = props

  // console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h3>{id}</h3>
    </article>
  )
}

export default Book
