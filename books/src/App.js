import { useState } from "react"
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        // BAD CODE - DO NOT DO THE FOLLOWING
        // Cannot mutate an existing state object by reference because it will
        // not trigger a React re-render
        // Instead we need to create a new object in memory
        //
        // books.push({ id: 123, title: title })
        // setBooks(books)

        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title }
        ] 
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle}
            }

            return book
        })

        setBooks(updatedBooks)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList 
                books={books} 
                onDelete={deleteBookById} 
                onEdit={editBookById} 
            />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App