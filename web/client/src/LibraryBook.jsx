const LibraryBook = ({ book, books, setBooks }) => {


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
		</article>
	);
}

export default LibraryBook;
