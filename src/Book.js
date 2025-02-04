const Book = (props) => {
	const { img, title, author, number } = props
	// console.log(props)
	console.log(number)
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{/* <h3>{id}</h3> */}
			<span className='number'>{`#${number + 1}`}</span>
		</article>
	)
}

export default Book
