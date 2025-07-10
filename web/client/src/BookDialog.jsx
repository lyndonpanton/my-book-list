import {useEffect, useState} from "react";

const BookDialog = ({ currentBookOpen, setIsDialogOpen, books, setBooks }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [pages, setPages] = useState(0);
	const [isbn, setIsbn] = useState("");
	const [details, setDetails] = useState("");
	const [coverUrl, setCoverUrl] = useState("");

	useEffect(() => {
		if (currentBookOpen !== null) {
			setTitle(currentBookOpen.title);
			setAuthor(currentBookOpen.author);
			setPages(currentBookOpen.pages);
			setIsbn(currentBookOpen.isbn);

			if (currentBookOpen.details !== null) {
				setDetails(currentBookOpen.details);
			}

			if (currentBookOpen.coverUrl !== null) {
				setTitle(currentBookOpen.coverUrl);
			}
		}
	}, []);

	const handleFormSubmission = (e) => {
		e.preventDefault();

		currentBookOpen !== null ? updateBook() : createBook();
	};

	const createBook = () => {
		fetch("http://localhost:8080/books", {
			body: JSON.stringify({
				title: title,
				author: author,
				pages: pages,
				isbn: isbn,
				details: details,
				coverUrl: coverUrl,
			}),
			headers: {
				"content-type": "application/json"
			},
			method: "POST"
		}).then((response) => {
			if (response.status === 201) {
				return response.json();
			}

			return null;
		}).then((data) => {
			if (data !== null) {
				setBooks([...books, data]);

				setTitle("");
				setAuthor("");
				setPages(0);
				setIsbn("");
				setDetails("");
				setCoverUrl("");
			}
		});
	};

	const updateBook = () => {

	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const updateTitle = (e) => {
		setTitle(e.target.value);
	};

	const updateAuthor = (e) => {
		setAuthor(e.target.value);
	};

	const updatePages = (e) => {
		setPages(e.target.value);
	};

	const updateIsbn = (e) => {
		setIsbn(e.target.value);
	};

	const updateDetails = (e) => {
		setDetails(e.target.value);
	};

	const updateCoverUrl = (e) => {
		setCoverUrl(e.target.value);
	};

	return (
		<div className="book-form-container">
			<button className="book-form-container-close" onClick={ closeDialog }>
				x
			</button>
			<form onSubmit={handleFormSubmission} className="book-form">
				<label htmlFor="book-form-title" className="book-form-label">
					<span className="book-form-text">Title*</span>
					<input
						id="book-form-title"
						type="text"
						placeholder="Title"
						value={title}
						onChange={updateTitle}
						className="book-form-input"/>
				</label>

				<label htmlFor="book-form-author" className="book-form-label">
					<span className="book-form-text">Author*</span>
					<input
						id="book-form-author"
						type="text"
						placeholder="Author"
						value={author}
						onChange={updateAuthor}
						className="book-form-input"/>
				</label>

				<label htmlFor="book-form-pages" className="book-form-label">
					<span className="book-form-text">Pages*</span>
					<input
						id="book-form-pages"
						type="number"
						placeholder="Pages"
						value={pages}
						onChange={updatePages}
						className="book-form-input"/>
				</label>

				<label htmlFor="book-form-cover" className="book-form-label">
					<span className="book-form-text">Cover URL*</span>
					<input
						id="book-form-cover"
						type="text"
						placeholder="Cover URL"
						value={coverUrl}
						onChange={updateCoverUrl}
						className="book-form-input"/>
				</label>
				<label htmlFor="book-form-isbn" className="book-form-label">
					<span className="book-form-text">ISBN</span>
					<input
						id="book-form-isbn"
						type="text"
						placeholder="ISBN"
						value={isbn}
						onChange={updateIsbn}
						className="book-form-input"/>
				</label>
				<label htmlFor="book-form-details">
					<span className="book-form-text-block">Description</span>
					<textarea
						id="book-form-details"
						value={details}
						onChange={updateDetails}
						className="book-form-text-area">
					</textarea>
				</label>
				{/*<input*/}
				{/*	type="submit"*/}
				{/*	value={*/}
				{/*		currentBookOpen*/}
				{/*			? "Update Book"*/}
				{/*			: "Create Book"*/}
				{/*	} />*/}
				<input
					type="submit"
					value="Create Book"
					className="book-form-submit" />
			</form>
		</div>
	)
};

export default BookDialog;
