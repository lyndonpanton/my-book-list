import "./styles.css"

import {useEffect, useState} from 'react'

import LibraryBook from "./LibraryBook.jsx";

function App() {
    const [books, setBooks] = useState([]);

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
                <section>
                    <h2>Your Books</h2>

                    <section className="library">
                        {
                            books.map((book) => {
                                return <LibraryBook
                                            key={ book.id }
                                            book={ book }
                                            books={ books }
                                            setBooks={ setBooks }
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
