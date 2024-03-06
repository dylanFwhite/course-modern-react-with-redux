import { useState } from "react"
import './SearchBar.css'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        onSubmit(
            // NEVER DO THIS!!! - Always use state to keep track of values as
            // it allows us to use the state system to control values and means
            // we don't have to use vanilla JS for subsequent changes
            // document.querySelector('input').value
            term
        )
    }
    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    
    return (
        <div className="search-bar">
            {/* Use form tag to monitor submit events */}
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar