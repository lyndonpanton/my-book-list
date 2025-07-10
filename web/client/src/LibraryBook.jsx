const LibraryBook = ({ book, setCurrentBookOpen, setIsDialogOpen, setCurrentDeleteBook, setIsDeleteBookDialogOpen }) => {
	const updateBook = () => {
		setCurrentBookOpen(book);
		setIsDialogOpen(true);
	};

	const deleteBook = () => {
		setCurrentDeleteBook(book);
		setIsDeleteBookDialogOpen(true);
	};

	return (
		<article className="library-book">
			<h3 className="library-book-title">{ book.title }</h3>
			<h4 className="library-book-author">{ book.author }</h4>
			<img
				src={ book.coverUrl }
				alt="Book cover"
				className="library-book-cover" />
			<p className="library-book-pages">
				Pages: <span className="library-book-pages-count">{ book.pages }</span>
			</p>
			<section className="library-book-buttons">
				<button className="library-book-button" onClick={ updateBook }>Update</button>
				<button className="library-book-button" onClick={ deleteBook }>Delete</button>
			</section>
		</article>
	);
}

export default LibraryBook;
