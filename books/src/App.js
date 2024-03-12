import { useEffect } from "react"
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import useBooksContext from './hooks/use-books-context'


function App() {
    const {fetchBooks} = useBooksContext()

    // DONT DO THIS - It will trigger an infinite re-render loop
    // fetchBooks()
    // Utilise useEffect() instead to control when code is run
    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default App