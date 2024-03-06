import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        // Always include keys when building lists to facilitate
        // efficient rerendering on state changes
        // Best option is to try and use IDs that come from underlying DB
        return <ImageShow key={image.id} image={image} />
    })
    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList