import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = (
        <>
            <Button 
                onClick={handleRemoveAlbum} 
                className="mr-2"
                loading={result.isLoading}
            >
                <GoTrashcan />
            </Button>
            {album.title}
        </>
    )

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    )
}

export default AlbumListItem