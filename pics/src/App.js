import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList  from './components/ImageList'
import searchImages from './api'

function App() {
    const [images, setImages] = useState([])

    // Pass data from child to parent via the Even System using custom handlers
    const handleSubmit = async (term) => {
        const result = await searchImages(term)

        setImages(result)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App