const BookDeleteDialog = ({ currentDeleteBook, setCurrentDeleteBook, books, setBooks, setIsDeleteBookDialogOpen }) => {
	const deleteBook = () => {
		fetch("http://localhost:8080/books/" + currentDeleteBook.id, {
			method: "DELETE"
		}).then((response) => {
			if (response.status === 200) {
				return response.json();
			}

			return null;
		}).then((data) => {
			if (data !== null) {
				setBooks(books.filter((book) => {
					return book.id !== data.id;
				}));

				closeDialog();
			}
		});
	};

	const closeDialog = () => {
		setCurrentDeleteBook(null);
		setIsDeleteBookDialogOpen(false);
	};

	return (
		<section className="book-form-container">
			<button className="book-form-container-close" onClick={closeDialog}>
				x
			</button>

			<article className="book-confirm-delete">
				<h2>
					Are you sure you would like to delete this book from your library?
				</h2>
				<section className="book-confirm-delete-buttons">
					<button onClick={deleteBook}>Yes</button>
					<button onClick={closeDialog}>No</button>
				</section>
			</article>
		</section>
	);
};

export default BookDeleteDialog;
