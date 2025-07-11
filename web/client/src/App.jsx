import "./styles.css"

import {useEffect, useState} from 'react'

import Header from "./Header.jsx";

import LibraryBook from "./LibraryBook.jsx";
import BookDialog from "./BookDialog.jsx";
import BookDeleteDialog from "./BookDeleteDialog.jsx";

import Footer from "./Footer.jsx";

function App() {
    const appTitle = "My Book List";
    const [filterValue, setFilterValue] = useState("");

    const [books, setBooks] = useState([]);
    const [currentBookOpen, setCurrentBookOpen] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentDeleteBook, setCurrentDeleteBook] = useState(null);
    const [isDeleteBookDialogOpen, setIsDeleteBookDialogOpen] = useState(false);


    const updateIsCreateDialogOpen = (e) => {
        currentBookOpen === null
            ? setCurrentBookOpen(null)
            : setCurrentBookOpen(currentBookOpen);

        setIsDialogOpen(true);
    }

    useEffect(() => {
        fetch("http://localhost:8080/books", {
            method: "GET"
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }

            return null;
        }).then(async (data) => {
            if (data !== null) {
                setBooks(await data);
            }
        });
    }, []);

    return (
        <>
            <Header
                appTitle={ appTitle }
                filterValue={ filterValue }
                setFilterValue={ setFilterValue} />

            <main>
                <button className="create-book" onClick={ updateIsCreateDialogOpen }>
                    +
                </button>

                {
                    isDialogOpen
                        ? <BookDialog
                                currentBookOpen={ currentBookOpen }
                                setCurrentBookOpen={ setCurrentBookOpen }
                                setIsDialogOpen={ setIsDialogOpen }
                                books={ books }
                                setBooks={ setBooks } />
                        : null
                }

                {
                    isDeleteBookDialogOpen
                        ? <BookDeleteDialog
                                currentDeleteBook={ currentDeleteBook }
                                setCurrentDeleteBook={ setCurrentDeleteBook }
                                books={ books }
                                setBooks={ setBooks }
                                setIsDeleteBookDialogOpen={ setIsDeleteBookDialogOpen } />
                        : null
                }

                <section>
                    <h2>Your Books</h2>

                    <section className="library">
                        {
                            books.map((book) => {
                                if (
                                    book.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
                                    || book.author.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
                                    || book.isbn.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
                                    ) {

                                    return <LibraryBook
                                        key={book.id}
                                        book={book}
                                        setCurrentBookOpen={ setCurrentBookOpen }
                                        setIsDialogOpen={ setIsDialogOpen }
                                        setCurrentDeleteBook={ setCurrentDeleteBook }
                                        setIsDeleteBookDialogOpen={ setIsDeleteBookDialogOpen }
                                    />
                                } else {
                                    return null
                                }
                            })
                        }
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App;
