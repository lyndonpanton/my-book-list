import {useEffect, useState} from "react";

const BookDialog = ({ currentBookOpen, books, setBooks }) => {
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
		<form onSubmit={ handleFormSubmission }>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={updateTitle}/>
			<input
				type="text"
				placeholder="Author"
				value={author}
				onChange={updateAuthor}/>
			<input
				type="number"
				placeholder="Pages"
				value={pages}
				onChange={updatePages}/>
			<input
				type="text"
				placeholder="Cover URL"
				value={coverUrl}
				onChange={updateCoverUrl}/>
			<textarea value={ details } onChange={ updateDetails }></textarea>
			<input
				type="text"
				placeholder="ISBN"
				value={isbn}
				onChange={updateIsbn}/>
			{/*<input*/}
			{/*	type="submit"*/}
			{/*	value={*/}
			{/*		currentBookOpen*/}
			{/*			? "Update Book"*/}
			{/*			: "Create Book"*/}
			{/*	} />*/}
			<input
				type="submit"
				value="Submit" />
		</form>
	)
};

export default BookDialog;
