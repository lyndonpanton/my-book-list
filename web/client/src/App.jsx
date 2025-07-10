import "./styles.css"

import {useEffect, useState} from 'react'

import LibraryBook from "./LibraryBook.jsx";
import BookDialog from "./BookDialog.jsx";
import BookDeleteDialog from "./BookDeleteDialog.jsx";

function App() {
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
            <header>
                <h1>My Book List</h1>
            </header>

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
                                return <LibraryBook
                                    key={book.id}
                                    book={book}
                                    setCurrentBookOpen={ setCurrentBookOpen }
                                    setIsDialogOpen={ setIsDialogOpen }
                                    setCurrentDeleteBook={ setCurrentDeleteBook }
                                    setIsDeleteBookDialogOpen={ setIsDeleteBookDialogOpen }
                                />
                            })
                        }
                    </section>
                </section>
            </main>

            <footer>
                <section>
                <p>
                        &copy;
                        <span> { new Date().getFullYear() } </span>
                        Lyndon Mykal Panton | All Rights Reserved
                    </p>
                </section>
            </footer>
        </>
    )
}

export default App;
