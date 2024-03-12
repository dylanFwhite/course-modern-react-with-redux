import { createContext, useState, useCallback } from "react";
import axios from "axios"


// NOTE: Candidates for being included in the context is items that can be
// considered as Application state (as oppossed to component state) i.e. state
// that is used by multiple different components across the app
const BooksContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])

    // We use `useCallback()` to create stable reference to the underlying
    // function - this is to prevent infinite loops caused by the component
    // that contains the function definition being re-rendered due to the
    // function being re-defined.
    // In this case fatchbooks updates the books state which causes the
    // Provider() function to re-render - this then causes the fetchbooks()
    // function to be redefined in a new memory location, which in tern triggers
    // the useEffect callback when the App() (child) componenant gets re-
    // redered. The useEffect() callback makes a call to fetchbooks() which
    // repeats the cycle.
    // useCallback ensures that when the Provider() component is re-rendered
    // the fetchbooks() function references the original memory location
    // and is considered to be unchanged - therefore no longer triggering the
    // useEffect() hook in the App() component
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://127.0.0.1:3001/books')

        setBooks(response.data)
    }, [])

    const createBook = async (title) => {
        const response = await axios.post('http://127.0.0.1:3001/books', {
            title
        })

        // BAD CODE - DO NOT DO THE FOLLOWING
        // Cannot mutate an existing state object by reference because it will
        // not trigger a React re-render
        // Instead we need to create a new object in memory
        //
        // books.push({ id: 123, title: title })
        // setBooks(books)

        const updatedBooks = [
            ...books,
           response.data
        ] 

        setBooks(updatedBooks)
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://127.0.0.1:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }

            return book
        })

        setBooks(updatedBooks)
    }

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext

// import BooksContext, { Provider } from './asdasd'