import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const [books, setBooks] = useState([]);

    return (
        <>
            <header>
                <h1>My Book List</h1>
            </header>

            <main>
                <section>
                    <h2>Your Books</h2>

                    <section>

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
